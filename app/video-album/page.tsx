"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import {
  SkipBack,
  Play,
  SkipForward,
  Volume1,
  Volume2,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
});

export default function VideoAlbumPage() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<>
{/* NAVBAR */}
<header
  style={{
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    padding: "42px 82px",
    columnGap: "16px",
    fontSize: "14px",
    backgroundColor: "#fcfaf7",
    color: "#111",
  }}
>
  <div
    onClick={() => setMenuOpen(true)}
    style={{
      cursor: "pointer",
      fontSize: "28px",
    }}
  >
    ☰
  </div>

  <div
    style={{
      fontSize: "14px",
      textAlign: "center",
      letterSpacing: "14px",
      wordSpacing: "18px",
      whiteSpace: "nowrap",
      fontWeight: 600,
    }}
  >
    ETERNA MEMORIES
  </div>

  <div
    style={{
      fontSize: "22px",
      cursor: "pointer",
      letterSpacing: "1px",
    }}
  >
    ЗАПАЗИ ДАТА →
  </div>
</header>
{menuOpen && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "320px",
      height: "100vh",
      backdropFilter: "blur(10px)",
transition: "0.4s ease",backgroundColor: "rgba(252,250,247,0.96)",
      padding: "48px",
      zIndex: 100,
      display: "flex",
      flexDirection: "column",
      gap: "28px",
      fontSize: "22px",
    }}
  >
    <div
      onClick={() => setMenuOpen(false)}
      style={{
        fontSize: "28px",
        cursor: "pointer",
        marginBottom: "30px",
      }}
    >
      ✕
    </div>

  <a
  href="/video-booth"
  style={{
    cursor: "pointer",
    transition: "0.3s",
    textDecoration: "none",
    color: "#3e352d",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.opacity = "0.6";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.opacity = "1";
  }}
>
  Видео будка
</a>
<a
  href="/video-booth"
  style={{
    cursor: "pointer",
    transition: "0.3s",
    textDecoration: "none",
    color: "#3e352d",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.opacity = "0.6";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.opacity = "1";
  }}
>
  Видео албум
</a>
<a
  href="/video-booth"
  style={{
    cursor: "pointer",
    transition: "0.3s",
    textDecoration: "none",
    color: "#3e352d",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.opacity = "0.6";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.opacity = "1";
  }}
>
  Галерия
</a>
<a
  href="/video-booth"
  style={{
    cursor: "pointer",
    transition: "0.3s",
    textDecoration: "none",
    color: "#3e352d",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.opacity = "0.6";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.opacity = "1";
  }}
>
  Контакти
</a>  </div>
)}

      <main
        style={{
          minHeight: "100vh",
          background: "#f6f1e7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "40px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "1200px",
            maxWidth: "95vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
          }}
        >
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.div
                key="closed"
                initial={{
                  opacity: 0,
                  rotateY: -8,
                }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                }}
                exit={{
                  opacity: 0,
                  rotateY: 10,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src="/album-closed.png"
                    alt="Closed Album"
                    fill
                    priority
                    style={{
                      objectFit: "contain",
                      filter:
                        "drop-shadow(0 20px 40px rgba(0,0,0,0.16))",
                    }}
                  />
<div
  style={{
    position: "absolute",
    top: "56%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    pointerEvents: "none",
  }}
>
  <div
    style={{
      fontSize: "32px",
      fontStyle: "italic",
      fontWeight: 300,
      letterSpacing: "6px",
      color: "#c6a76a",
      fontFamily: "serif",
      textShadow: "0 1px 1px rgba(255,255,255,0.18)",
    }}
  >
    Стефан & Даниела
  </div>

  <div
  style={{
    marginTop: "10px",
    fontSize: "13px",
    letterSpacing: "4px",
    color: "#c6a76a",
    fontFamily: "serif",
    opacity: 0.75,
  }}
>
  04.05.2026г.
</div>

<div
  style={{
    marginTop: "34px",
    display: "flex",
    justifyContent: "center",
    opacity: 0.5,
  }}
>
  <Image
    src="/logo.png"
    alt="Eterna Logo"
    width={240}
    height={80}
    style={{
      objectFit: "contain",
    }}
  />
</div>
</div>
                  {/* invisible click area */}
                  <button
                    onClick={() => setOpen(true)}
                    style={{
                      position: "absolute",
                      inset: 0,
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
                    }}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{
                  opacity: 0,
                  rotateY: -14,
                  scale: 0.985,
                }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotateY: 8,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src="/album-open.png"
                    alt="Opened Album"
                    fill
                    priority
                    style={{
                      objectFit: "contain",
                      filter:
                        "drop-shadow(0 24px 48px rgba(0,0,0,0.18))",
                    }}
                  />
                  {/* TRANSPARENT CONTROLS */}
                 <div
 style={{
  position: "absolute",
  bottom: "35%",
  right: "24%",
  width: "220px",
  height: "30px",
}}
>
  {[
    <SkipBack size={11} strokeWidth={1.5} />,
    <Play size={11} strokeWidth={1.5} />,
    <SkipForward size={11} strokeWidth={1.5} />,
    <Volume1 size={11} strokeWidth={1.5} />,
    <Volume2 size={11} strokeWidth={1.5} />,
  ].map((icon, index) => (
    <button
      key={index}
      style={{
        position: "absolute",
        top: "0px",

        left:
          index === 0
            ? "35px"
            : index === 1
            ? "75px"
            : index === 2
            ? "115px"
            : index === 3
            ? "152px"
            : "192px",

        width: "26px",
        height: "28px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.7)",
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        color: "#b89a68",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      {icon}
    </button>
  ))}
</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            marginTop: "0px",
            background: "rgba(255,255,255,0.72)",
            color: "#444",
            border: "1px solid rgba(0,0,0,0.06)",
            padding: "14px 34px",
            cursor: "pointer",
            fontSize: "14px",
            borderRadius: "999px",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
            letterSpacing: "0.4px",
            transition: "all 0.3s ease",
          }}
        >
          {open ? "Затвори албума" : "Отвори албума"}
        </button>
      </div>
    </main>
    </>
  );
}