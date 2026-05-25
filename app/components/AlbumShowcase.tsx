"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SkipBack, Play, Pause, SkipForward, Volume1, Volume2 } from "lucide-react";
import styles from "./AlbumShowcase.module.css";
import { copy } from "../copy";

const { album, playerLabels } = copy.videoAlbum;

const SKIP_SECONDS = 10;
const VOLUME_STEP = 0.1;

/** Measured from album-open.png — button center coords as % of the 1536×1024 artwork */
const CONTROL_POSITIONS = [
  { left: 63.74, top: 63.18 },
  { left: 67.71, top: 63.46 },
  { left: 71.68, top: 63.34 },
  { left: 75.39, top: 63.26 },
  { left: 79.26, top: 63.14 },
] as const;

export default function AlbumShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleToggle = useCallback(() => setOpen((v) => !v), []);

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
    const video = videoRef.current;
    if (!video || open) return;

    video.pause();
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
      <div className={styles.albumWrapper}>
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="closed"
              className={styles.albumStage}
              initial={{ opacity: 0, rotateY: -8 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 10 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/album-closed.png"
                alt={album.closedAlt}
                fill
                priority
                className={styles.albumArt}
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.16))",
                }}
              />

              <div className={styles.albumTextOverlay}>
                <div className={styles.albumNames}>{album.names}</div>
                <div className={styles.albumDate}>{album.date}</div>
                <div className={styles.albumLogo}>
                  <Image
                    src="/logo.png"
                    alt="Eterna Logo"
                    width={240}
                    height={80}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              <button
                type="button"
                className={styles.albumOpenBtn}
                onClick={handleOpen}
                aria-label={album.openTriggerAriaLabel}
              />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              className={styles.albumStage}
              initial={{ opacity: 0, rotateY: -14, scale: 0.985 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 8 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.albumFrame}>
                <Image
                  src="/album-open.png"
                  alt={album.openAlt}
                  fill
                  priority
                  className={styles.albumArt}
                  style={{
                    filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))",
                  }}
                />
              </div>

              <video
                ref={videoRef}
                className={styles.videoScreen}
                src={album.demoVideoSrc}
                preload="metadata"
                playsInline
                aria-label={album.demoVideoAriaLabel}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              {controls.map(({ id, Icon, label, onClick }, index) => (
                  <button
                    key={id}
                    type="button"
                    className={styles.controlBtn}
                    style={{
                      left: `${CONTROL_POSITIONS[index].left}%`,
                      top: `${CONTROL_POSITIONS[index].top}%`,
                    }}
                    aria-label={label}
                    onClick={onClick}
                  >
                    <Icon className={styles.controlIcon} strokeWidth={1.5} />
                  </button>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button type="button" className={styles.toggleBtn} onClick={handleToggle}>
        {open ? album.closeBtn : album.openBtn}
      </button>
    </div>
  );
}
