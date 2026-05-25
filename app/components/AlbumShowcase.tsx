"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Volume1,
  Volume2,
} from "lucide-react";
import styles from "./AlbumShowcase.module.css";
import { copy } from "../copy";

const { album, playerLabels } = copy.videoAlbum;

const SKIP_SECONDS = 10;
const VOLUME_STEP = 0.1;

type AlbumShowcaseProps = {
  /** Ribbed fabric-style surface. Default is plain smooth white. */
  textured?: boolean;
};

export default function AlbumShowcase({ textured = false }: AlbumShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const beginTransition = useCallback((nextOpen: boolean) => {
    setIsAnimating(true);
    if (!nextOpen) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
    setOpen(nextOpen);
  }, []);

  const handleOpen = useCallback(() => beginTransition(true), [beginTransition]);

  const handleClose = useCallback(() => beginTransition(false), [beginTransition]);

  const handleToggle = useCallback(() => {
    beginTransition(!open);
  }, [open, beginTransition]);

  useEffect(() => {
    if (!isAnimating) return;
    const id = window.setTimeout(() => setIsAnimating(false), 1100);
    return () => window.clearTimeout(id);
  }, [isAnimating]);

  const handleTogglePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  }, []);

  const handleSkip = useCallback((delta: number) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;

    video.currentTime = Math.max(
      0,
      Math.min(video.duration, video.currentTime + delta),
    );
  }, []);

  const handleVolumeChange = useCallback((delta: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = Math.max(0, Math.min(1, video.volume + delta));
  }, []);

  useEffect(() => {
    if (open) return;
    setIsPlaying(false);
  }, [open]);

  const controls = [
    {
      id: "skipBack",
      Icon: SkipBack,
      label: playerLabels.skipBack,
      onClick: () => handleSkip(-SKIP_SECONDS),
    },
    {
      id: "play",
      Icon: isPlaying ? Pause : Play,
      label: isPlaying ? playerLabels.pause : playerLabels.play,
      onClick: handleTogglePlay,
    },
    {
      id: "skipForward",
      Icon: SkipForward,
      label: playerLabels.skipForward,
      onClick: () => handleSkip(SKIP_SECONDS),
    },
    {
      id: "volumeDown",
      Icon: Volume1,
      label: playerLabels.volumeDown,
      onClick: () => handleVolumeChange(-VOLUME_STEP),
    },
    {
      id: "volumeUp",
      Icon: Volume2,
      label: playerLabels.volumeUp,
      onClick: () => handleVolumeChange(VOLUME_STEP),
    },
  ];

  return (
    <div className={styles.albumContainer}>
      <div
        className={`${styles.albumViewport} ${open ? styles.albumViewportOpen : ""} ${isAnimating ? styles.albumViewportAnimating : ""}`}
        aria-label={open ? album.openAlt : album.closedAlt}
      >
        <div
          className={`${styles.albumBook} ${textured ? styles.albumTextured : ""}`}
        >
          <div className={styles.spread}>
            <div className={`${styles.pageSlot} ${styles.pageLeft}`} aria-hidden />

            <div className={`${styles.pageSlot} ${styles.pageRight}`}>
              <div className={styles.pageRightInner}>
                <div className={styles.screenBezel}>
                  <video
                    ref={videoRef}
                    className={`${styles.video} ${open ? "" : styles.videoHidden}`}
                    src={album.demoVideoSrc}
                    preload="metadata"
                    playsInline
                    aria-hidden={!open}
                    aria-label={album.demoVideoAriaLabel}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />
                </div>

                <div className={styles.controlRow}>
                  {controls.map(({ id, Icon, label, onClick }) => (
                    <button
                      key={id}
                      type="button"
                      className={styles.controlBtn}
                      aria-label={label}
                      onClick={onClick}
                      disabled={!open}
                    >
                      <Icon className={styles.controlIcon} strokeWidth={1.4} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.cover} ${open ? styles.coverOpen : ""} ${isAnimating ? styles.coverAnimating : ""}`}
          >
            <div className={`${styles.coverFace} ${styles.coverFront}`}>
              <div className={styles.coverSpine} aria-hidden />

              <div className={styles.coverContent}>
                <p className={styles.coverNames}>{album.names}</p>
                <p className={styles.coverDate}>{album.date}</p>
                <div className={styles.coverLogo}>
                  <Image
                    src="/logo.png"
                    alt="Eterna Logo"
                    width={200}
                    height={64}
                    className={styles.coverLogoImg}
                  />
                </div>
              </div>

              {!open && (
                <button
                  type="button"
                  className={styles.coverOpenBtn}
                  onClick={handleOpen}
                  aria-label={album.openTriggerAriaLabel}
                />
              )}
            </div>

            <div
              className={`${styles.coverFace} ${styles.coverInside}`}
            >
              {open && (
                <button
                  type="button"
                  className={styles.coverCloseBtn}
                  onClick={handleClose}
                  disabled={isAnimating}
                  aria-label={album.closeBtn}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <button type="button" className={styles.toggleBtn} onClick={handleToggle}>
        {open ? album.closeBtn : album.openBtn}
      </button>
    </div>
  );
}
