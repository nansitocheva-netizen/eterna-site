"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

const VOLUME_STEP = 0.1;
const demoVideos = album.demoVideoSources;

type AlbumShowcaseProps = {
  /** Ribbed fabric-style surface. Default is plain smooth white. */
  textured?: boolean;
  /** Show only the video page — no cover, left page, toggle, or customise UI. */
  noCover?: boolean;
};

export default function AlbumShowcase({
  textured = false,
  noCover = false,
}: AlbumShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoplayOnTrackChange = useRef(false);
  const [open, setOpen] = useState(noCover);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoAspect, setVideoAspect] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [customising, setCustomising] = useState(false);
  const [coverName1, setCoverName1] = useState(album.name1);
  const [coverName2, setCoverName2] = useState(album.name2);
  const [coverDate, setCoverDate] = useState(album.date);

  const isOpen = noCover || open;

  const beginTransition = useCallback((nextOpen: boolean) => {
    setIsAnimating(true);
    if (nextOpen) {
      setCustomising(false);
      setShowVideo(false);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
      setVideoIndex(0);
      setVideoAspect(null);
      setShowVideo(false);
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
    setVideoAspect(null);
    if (!isPlaying) setShowVideo(false);
    setVideoIndex((index) => index - 1);
  }, [videoIndex, isPlaying]);

  const handlePlayNext = useCallback(() => {
    if (videoIndex >= demoVideos.length - 1) return;

    autoplayOnTrackChange.current = isPlaying;
    setVideoAspect(null);
    if (!isPlaying) setShowVideo(false);
    setVideoIndex((index) => index + 1);
  }, [videoIndex, isPlaying]);

  const handleVolumeChange = useCallback((delta: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = Math.max(0, Math.min(1, video.volume + delta));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isOpen || !autoplayOnTrackChange.current) return;

    video.load();
    autoplayOnTrackChange.current = false;
    video.play().catch(() => setIsPlaying(false));
  }, [videoIndex, isOpen]);

  const handleVideoMetadata = useCallback(() => {
    const video = videoRef.current;
    if (!video?.videoWidth || !video.videoHeight) return;

    setVideoAspect(video.videoWidth / video.videoHeight);
  }, []);

  const showCustomiseForm = customising && !isOpen;
  const PlayIcon = isPlaying ? Pause : Play;
  const isPortrait = videoAspect !== null && videoAspect < 1;
  const screenStyle = videoAspect
    ? ({ "--video-aspect": String(videoAspect) } as React.CSSProperties)
    : undefined;

  return (
    <div className={styles.albumContainer}>
      <div
        className={`${styles.albumViewport} ${noCover ? styles.albumViewportNoCover : isOpen ? styles.albumViewportOpen : ""} ${isAnimating && !noCover ? styles.albumViewportAnimating : ""}`}
        aria-label={isOpen ? album.openAlt : album.closedAlt}
      >
        <div
          className={`${styles.albumBook} ${noCover ? styles.albumBookNoCover : ""} ${textured ? styles.albumTextured : ""}`}
        >
          <div className={styles.spread}>
            {!noCover && (
              <div
                className={`${styles.pageSlot} ${styles.pageLeft}`}
                aria-hidden
              />
            )}

            <div className={`${styles.pageSlot} ${styles.pageRight}`}>
              <div className={styles.pageRightInner}>
                <div className={styles.screenBezel}>
                  <video
                    ref={videoRef}
                    className={`${styles.video} ${isPortrait ? styles.videoPortrait : ""} ${isOpen && showVideo ? "" : styles.videoHidden}`}
                    style={screenStyle}
                    src={demoVideos[videoIndex]}
                    preload={showVideo ? "metadata" : "none"}
                    playsInline
                    aria-hidden={!isOpen}
                    aria-label={album.demoVideoAriaLabel}
                    onLoadedMetadata={handleVideoMetadata}
                    onPlay={() => {
                      setShowVideo(true);
                      setIsPlaying(true);
                    }}
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
                    disabled={!isOpen || videoIndex <= 0}
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
                    disabled={!isOpen}
                  >
                    <PlayIcon className={styles.controlIcon} strokeWidth={1.4} />
                  </button>
                  <button
                    type="button"
                    className={styles.controlBtn}
                    aria-label={playerLabels.next}
                    onClick={handlePlayNext}
                    disabled={!isOpen || videoIndex >= demoVideos.length - 1}
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
                    disabled={!isOpen}
                  >
                    <Volume1 className={styles.controlIcon} strokeWidth={1.4} />
                  </button>
                  <button
                    type="button"
                    className={styles.controlBtn}
                    aria-label={playerLabels.volumeUp}
                    onClick={() => handleVolumeChange(VOLUME_STEP)}
                    disabled={!isOpen}
                  >
                    <Volume2 className={styles.controlIcon} strokeWidth={1.4} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {!noCover && (
            <div
              className={`${styles.cover} ${open ? styles.coverOpen : ""} ${isAnimating ? styles.coverAnimating : ""}`}
            >
              <div className={`${styles.coverFace} ${styles.coverFront}`}>
                <div className={styles.coverSpine} aria-hidden />

                <div className={styles.coverContent}>
                  <div className={styles.coverNamesBlock}>
                    <p className={styles.coverName1}>{coverName1}</p>
                    <p className={styles.coverConjunction}>{album.conjunction}</p>
                    <p className={styles.coverName2}>{coverName2}</p>
                  </div>
                  <p className={styles.coverDate}>{coverDate}</p>
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
          )}
        </div>
      </div>

      {!noCover && (
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
      )}

      {!noCover && showCustomiseForm && (
        <form
          className={styles.customiseForm}
          onSubmit={(event) => event.preventDefault()}
        >
          <label className={styles.customiseField}>
            <span className={styles.customiseLabel}>{album.name1Label}</span>
            <input
              type="text"
              className={styles.customiseInput}
              value={coverName1}
              onChange={(event) => setCoverName1(event.target.value)}
              placeholder={album.name1Placeholder}
              maxLength={24}
            />
          </label>

          <label className={styles.customiseField}>
            <span className={styles.customiseLabel}>{album.name2Label}</span>
            <input
              type="text"
              className={styles.customiseInput}
              value={coverName2}
              onChange={(event) => setCoverName2(event.target.value)}
              placeholder={album.name2Placeholder}
              maxLength={24}
            />
          </label>

          <label className={styles.customiseField}>
            <span className={styles.customiseLabel}>{album.dateLabel}</span>
            <input
              type="text"
              className={styles.customiseInput}
              value={coverDate}
              onChange={(event) => setCoverDate(event.target.value)}
              placeholder={album.datePlaceholder}
              maxLength={32}
            />
          </label>
        </form>
      )}
    </div>
  );
}
