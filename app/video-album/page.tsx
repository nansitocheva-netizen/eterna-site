"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SkipBack, Play, SkipForward, Volume1, Volume2 } from "lucide-react";
import styles from "./page.module.css";

const playerIcons = [
  { Icon: SkipBack,    label: "Предишно",     left: "35px"  },
  { Icon: Play,        label: "Пусни",        left: "75px"  },
  { Icon: SkipForward, label: "Следващо",     left: "115px" },
  { Icon: Volume1,     label: "Намали звука", left: "152px" },
  { Icon: Volume2,     label: "Увеличи звука",left: "192px" },
];

export default function VideoAlbumPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <div className={styles.albumContainer}>
          <div className={styles.albumWrapper}>
            <AnimatePresence mode="wait">
              {!open ? (
                <motion.div
                  key="closed"
                  initial={{ opacity: 0, rotateY: -8 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 10 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image
                      src="/album-closed.png"
                      alt="Затворен албум"
                      fill
                      priority
                      style={{
                        objectFit: "contain",
                        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.16))",
                      }}
                    />

                    <div className={styles.albumTextOverlay}>
                      <div className={styles.albumNames}>Стефан &amp; Даниела</div>
                      <div className={styles.albumDate}>04.05.2026г.</div>
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
                      className={styles.albumOpenBtn}
                      onClick={() => setOpen(true)}
                      aria-label="Отвори албума"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotateY: -14, scale: 0.985 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: 8 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image
                      src="/album-open.png"
                      alt="Отворен албум"
                      fill
                      priority
                      style={{
                        objectFit: "contain",
                        filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))",
                      }}
                    />

                    <div className={styles.playerControls}>
                      {playerIcons.map(({ Icon, label, left }) => (
                        <button
                          key={label}
                          className={styles.controlBtn}
                          style={{ left }}
                          aria-label={label}
                        >
                          <Icon size={11} strokeWidth={1.5} />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className={styles.toggleBtn}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Затвори албума" : "Отвори албума"}
          </button>
        </div>
      </section>
    </main>
  );
}
