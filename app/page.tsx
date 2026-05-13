"use client";
import { useState, useEffect } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400"],
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f6f1ec",
        display: "flex",
        flexDirection: "column",
        fontFamily: cormorant.style.fontFamily,
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          width: "100%",
          backgroundColor: "#fcfaf7",
          borderBottom: "1px solid rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "100vw",
            overflowX: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: isMobile ? "14px 16px" : "20px",
            boxSizing: "border-box",
            overflow: "hidden",
            gap: isMobile ? "10px" : "20px",
          }}
        >
          <div
            onClick={() => setMenuOpen(true)}
            style={{
              cursor: "pointer",
              fontSize: isMobile ? "22px" : "28px",
              flexShrink: 0,
              width: isMobile ? "24px" : "32px",
            }}
          >
            ☰
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 0,
              textAlign: "center",
              fontSize: isMobile ? "8x" : "14px",
              letterSpacing: isMobile ? "1px" : "6px",
              fontWeight: 600,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            ETERNA MEMORIES
          </div>

          <div
            style={{
              fontSize: isMobile ? "12px" : "22px",
              cursor: "pointer",
              letterSpacing: "1px",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            ЗАПАЗИ ДАТА →
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "320px",
            maxWidth: "100vw",
            height: "100vh",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(252,250,247,0.96)",
            padding: "48px",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            fontSize: "22px",
            boxSizing: "border-box",
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
              textDecoration: "none",
              color: "#3e352d",
            }}
          >
            Видео будка
          </a>

          <a
            href="/video-album"
            style={{
              textDecoration: "none",
              color: "#3e352d",
            }}
          >
            Видео албум
          </a>

          <a
            href="/gallery"
            style={{
              textDecoration: "none",
              color: "#3e352d",
            }}
          >
            Галерия
          </a>

          <a
            href="/contacts"
            style={{
              textDecoration: "none",
              color: "#3e352d",
            }}
          >
            Контакти
          </a>
        </div>
      )}

      {/* HERO */}
      <section
        style={{
          minHeight: "100dvh",
          position: "relative",
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 32%, rgba(255,255,255,0.28) 52%, rgba(255,255,255,0.05) 70%)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            padding: isMobile
              ? "80px 20px 40px"
              : "120px 40px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <h1
              style={{
                fontSize: isMobile ? "42px" : "56px",
                lineHeight: "1.1",
                fontWeight: 300,
                marginBottom: "42px",
                color: "#2f2a28",
                letterSpacing: "0.5px",
                fontFamily: cormorant.style.fontFamily,
              }}
            >
              СЪЗДАВАМЕ
              <br />
              СПОМЕНИ.
            </h1>

            <div
              style={{
                width: "72px",
                height: "1px",
                background: "#c7b28a",
                marginBottom: "40px",
              }}
            />

            <p
              style={{
                fontSize: isMobile ? "17px" : "19px",
                lineHeight: "2",
                color: "#5f5a55",
                maxWidth: "400px",
                margin: 0,
              }}
            >
              Видео будка за послания,
              <br />
              която запазва емоциите
              <br />
              от вашия специален ден.
            </p>

            <button
              style={{
                marginTop: "54px",
                background: "#111",
                color: "white",
                border: "none",
                padding: "18px 42px",
                borderRadius: "999px",
                cursor: "pointer",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              ЗАПАЗИ ДАТА
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: isMobile ? "70px 20px" : "100px 40px",
          backgroundColor: "#fbf7f2",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(3, minmax(0, 1fr))",
            gap: "24px",
            width: "100%",
          }}
        >
          {[
            {
              title: "ВИДЕО ПОСЛАНИЯ",
              text: "Вашите гости оставят видео послания, пълни с емоции и пожелания.",
            },
            {
              title: "НЕЗАБРАВИМИ СПОМЕНИ",
              text: "Истински думи, смях и чувства, които ще съхранявате завинаги.",
            },
            {
              title: "ЛЕСНО И УДОБНО",
              text: "Получавате всички видео послания с високо качество след вашето събитие.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                borderRight:
                  !isMobile && index !== 2
                    ? "1px solid rgba(184,155,108,0.18)"
                    : "none",
                paddingRight: !isMobile ? "36px" : "0px",
              }}
            >
              <div
                style={{
                  width: "86px",
                  height: "86px",
                  borderRadius: "999px",
                  backgroundColor: "#f5eee7",
                  margin: "0 auto 28px",
                  display: "grid",
                  placeItems: "center",
                  color: "#b59a78",
                }}
              />

              <div>
                <div
                  style={{
                    fontSize: "12px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#3f3935",
                    marginBottom: "18px",
                    fontWeight: 600,
                  }}
                >
                  {item.title}

                  <div
                    style={{
                      width: "42px",
                      height: "1px",
                      backgroundColor: "#d8c7ad",
                      margin: "14px auto 20px",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "2.2",
                    color: "#5f5752",
                    fontWeight: 500,
                    maxWidth: "280px",
                    margin: "18px auto 24px",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}