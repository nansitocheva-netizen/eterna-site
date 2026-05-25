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
import logoImage from "@/public/logo.png";

const { album, playerLabels } = copy.videoAlbum;

const VOLUME_STEP = 0.1;
const demoVideos = album.demoVideoSources;

type AlbumShowcaseProps = {
  /** Ribbed fabric-style surface. Default is plain smooth white. */
  textured?: boolean;
};

export default function AlbumShowcase({
  textured = false,
}: AlbumShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoplayOnTrackChange = useRef(false);
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [customising, setCustomising] = useState(false);
  const [coverTitle, setCoverTitle] = useState(album.names);
  const [coverSubtitle, setCoverSubtitle] = useState(album.date);

  const beginTransition = useCallback((nextOpen: boolean) => {
    setIsAnimating(true);
    if (nextOpen) {
      setCustomising(false);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
      setVideoIndex(0);
    }
    setOpen(nextOpen);
  }, []);

  const handleOpen = useCallback(
    () => beginTransition(true),
    [beginTransition],
  );

  const handleClose = useCallback(
    () => beginTransition(false),
    [beginTransition],
  );

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

  const handlePlayPrevious = useCallback(() => {
    if (videoIndex <= 0) return;

    autoplayOnTrackChange.current = isPlaying;
    setVideoIndex((index) => index - 1);
  }, [videoIndex, isPlaying]);

  const handlePlayNext = useCallback(() => {
    if (videoIndex >= demoVideos.length - 1) return;

    autoplayOnTrackChange.current = isPlaying;
    setVideoIndex((index) => index + 1);
  }, [videoIndex, isPlaying]);

  const handleVolumeChange = useCallback((delta: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = Math.max(0, Math.min(1, video.volume + delta));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !open) return;

    video.load();

    if (!autoplayOnTrackChange.current) return;

    autoplayOnTrackChange.current = false;
    video.play().catch(() => setIsPlaying(false));
  }, [videoIndex, open]);

  const showCustomiseForm = customising && !open;
  const PlayIcon = isPlaying ? Pause : Play;

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
            <div
              className={`${styles.pageSlot} ${styles.pageLeft}`}
              aria-hidden
            />

            <div className={`${styles.pageSlot} ${styles.pageRight}`}>
              <div className={styles.pageRightInner}>
                <div className={styles.screenBezel}>
                  <video
                    ref={videoRef}
                    className={`${styles.video} ${open ? "" : styles.videoHidden}`}
                    src={demoVideos[videoIndex]}
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
                  <button
                    type="button"
                    className={styles.controlBtn}
                    aria-label={playerLabels.previous}
                    onClick={handlePlayPrevious}
                    disabled={!open || videoIndex <= 0}
                  >
                    <SkipBack
                      className={styles.controlIcon}
                      strokeWidth={1.4}
                    />
                  </button>
                  <button
                    type="button"
                    className={styles.controlBtn}
                    aria-label={
                      isPlaying ? playerLabels.pause : playerLabels.play
                    }
                    onClick={handleTogglePlay}
                    disabled={!open}
                  >
                    <PlayIcon className={styles.controlIcon} strokeWidth={1.4} />
                  </button>
                  <button
                    type="button"
                    className={styles.controlBtn}
                    aria-label={playerLabels.next}
                    onClick={handlePlayNext}
                    disabled={!open || videoIndex >= demoVideos.length - 1}
                  >
                    <SkipForward
                      className={styles.controlIcon}
                      strokeWidth={1.4}
                    />
                  </button>
                  <button
                    type="button"
                    className={styles.controlBtn}
                    aria-label={playerLabels.volumeDown}
                    onClick={() => handleVolumeChange(-VOLUME_STEP)}
                    disabled={!open}
                  >
                    <Volume1 className={styles.controlIcon} strokeWidth={1.4} />
                  </button>
                  <button
                    type="button"
                    className={styles.controlBtn}
                    aria-label={playerLabels.volumeUp}
                    onClick={() => handleVolumeChange(VOLUME_STEP)}
                    disabled={!open}
                  >
                    <Volume2 className={styles.controlIcon} strokeWidth={1.4} />
                  </button>
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
                <p className={styles.coverNames}>{coverTitle}</p>
                <p className={styles.coverDate}>{coverSubtitle}</p>
                <div className={styles.coverLogo}>
                  <Image
                    src={logoImage}
                    alt="Eterna Logo"
                    className={styles.coverLogoImg}
                    priority
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

            <div className={`${styles.coverFace} ${styles.coverInside}`}>
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

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={handleToggle}
        >
          {open ? album.closeBtn : album.openBtn}
        </button>

        <button
          type="button"
          className={`${styles.customiseBtn} ${customising ? styles.customiseBtnActive : ""}`}
          onClick={() => setCustomising((prev) => !prev)}
          aria-expanded={showCustomiseForm}
          disabled={open}
        >
          {album.customiseBtn}
        </button>
      </div>

      {showCustomiseForm && (
        <form
          className={styles.customiseForm}
          onSubmit={(event) => event.preventDefault()}
        >
          <label className={styles.customiseField}>
            <span className={styles.customiseLabel}>{album.titleLabel}</span>
            <input
              type="text"
              className={styles.customiseInput}
              value={coverTitle}
              onChange={(event) => setCoverTitle(event.target.value)}
              placeholder={album.titlePlaceholder}
              maxLength={48}
            />
          </label>

          <label className={styles.customiseField}>
            <span className={styles.customiseLabel}>{album.subtitleLabel}</span>
            <input
              type="text"
              className={styles.customiseInput}
              value={coverSubtitle}
              onChange={(event) => setCoverSubtitle(event.target.value)}
              placeholder={album.subtitlePlaceholder}
              maxLength={32}
            />
          </label>
        </form>
      )}
    </div>
  );
}
