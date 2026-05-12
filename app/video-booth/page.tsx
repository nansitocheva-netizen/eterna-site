"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
});

export default function VideoBooth() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      style={{
    minHeight: "100vh",
    backgroundColor: "#f8f4ef",
    fontFamily: cormorant.style.fontFamily,
    zoom: "0.85",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          padding: "38px 82px",
          backgroundColor: "rgba(252,250,247,0.92)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          onClick={() => setMenuOpen(true)}
          style={{
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          ☰
        </div>

        <div
          style={{
            textAlign: "center",
            letterSpacing: "14px",
            wordSpacing: "18px",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          ETERNA MEMORIES
        </div>

        <div
          style={{
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ЗАПАЗИ ДАТА →
        </div>
      </header>

      {/* MENU */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "360px",
            height: "100vh",
            backgroundColor: "rgba(252,250,247,0.96)",
            backdropFilter: "blur(10px)",
            padding: "48px",
            zIndex: 99999,
            pointerEvents: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            fontSize: "22px",
          }}
        >
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "30px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            ✕
          </div>

          {[
            "Начало",
            "Видео будка",
            "Видео албум",
            "Галерия",
            "Контакти",
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => {
  if (item === "Начало") window.location.href = "/";
  if (item === "Видео будка") window.location.href = "/video-booth";
  if (item === "Видео албум") window.location.href = "/video-album";
  if (item === "Галерия") window.location.href = "/gallery";
  if (item === "Контакти") window.location.href = "/contact";
}}
              style={{
                cursor: "pointer",
                color: "#3b342d",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* HERO */}
      <section
        style={{
          minHeight: "88vh",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          alignItems: "center",
          padding: "40px 0 80px 90px",
          overflow: "hidden",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            maxWidth: "520px",
          }}
        >
          <div
            style={{
              letterSpacing: "4px",
              fontSize: "12px",
              color: "#9d8972",
              marginBottom: "24px",
            }}
          >
            VIDEO BOOTH
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.02",
              fontWeight: 300,
              color: "#2d2825",
              marginBottom: "34px",
            }}
          >
            Видео будка за
            <br />
            незабравими
            <br />
            послания
          </h1>

          <p
            style={{
              fontSize: "21px",
              lineHeight: "1.9",
              color: "#5f5750",
              maxWidth: "460px",
            }}
          >
            Дайте възможност на вашите гости
            да оставят лични видео послания,
            които ще пазите завинаги.
            Истински емоции. Истински спомени.
          </p>

          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "46px",
              alignItems: "center",
            }}
          >
            <button
              type="button"
              data-booking-trigger="true"
              style={{
                background: "#111",
                color: "white",
                border: "none",
                padding: "18px 38px",
                borderRadius: "999px",
                cursor: "pointer",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              ЗАПАЗИ СВОЯТА ДАТА
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            height: "820px",
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
          }}
        />
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          padding: "130px 90px",
          backgroundColor: "#fcfaf7",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "90px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "4px",
              color: "#a08d75",
              marginBottom: "16px",
            }}
          >
            КАК РАБОТИ
          </div>

          <div
            style={{
              width: "60px",
              height: "1px",
              backgroundColor: "#ccb899",
              margin: "0 auto",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "60px",
            maxWidth: "1320px",
            margin: "0 auto",
          }}
        >
          {[
           {
  number: "01",
  title: "Гостите записват",
  text: "Вашите гости застават пред будката и записват своето послание.",

  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 21a8 8 0 0 0-16 0"/>
      <circle cx="10" cy="8" r="5"/>
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>
    </svg>
  ),
},
            {
              number: "02",
              title: "Всички спомени се съхраняват",
              text: "Всички видеа се съхраняват сигурно и се подготвят за вашия персонален видео албум.",
            icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/>
    <path d="M14 2v5a1 1 0 0 0 1 1h5"/>
    <path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z"/>
  </svg>
),
            },
            {
              number: "03",
              title: "Получавате видео албум",
              text: "Получавате всички послания в красив видео албум, който ще пазите завинаги.",
            icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
  </svg>
),
            },
          ].map((item, index) => (
  <div
    key={index}
    style={{
      textAlign: "center",
      padding: "0 30px",
      borderRight:
        index !== 2
          ? "1px solid rgba(190,170,145,0.2)"
          : "none",
    }}
  >
    <div
      style={{
        width: "86px",
        height: "86px",
        borderRadius: "999px",
        backgroundColor: "#f5eee7",
        margin: "0 auto 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#b59a78",
      }}
    >
      {item.icon}
    </div>

    <div
      style={{
        color: "#aa967c",
        fontSize: "14px",
        marginBottom: "18px",
      }}
    >
                {item.number}
              </div>

              <h3
                style={{
                  fontSize: "34px",
                  fontWeight: 300,
                  color: "#2f2a27",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "2",
                  color: "#5d5752",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
{/* WHAT'S INCLUDED */}
<section
  style={{
    backgroundColor: "#f3ece5",
    padding: "120px 90px",
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "90px",
    }}
  >
    {/* LEFT TEXT */}
    <div>
      <div
        style={{
          fontSize: "13px",
          letterSpacing: "4px",
          color: "#a28d74",
          marginBottom: "18px",
          textTransform: "uppercase",
        }}
      >
        КАКВО ВКЛЮЧВА
      </div>

      <div
        style={{
          width: "50px",
          height: "1px",
          backgroundColor: "#cdb79c",
          marginBottom: "42px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {[
          "Лесно преносима видео будка",
          "Таблет за заснемане на видео послания",
          "Винтидж телефон като декоративен акцент",
          "Персонализиран стартов екран",
          "Персонализирани инициали и дизайн",
          "USB и cloud доставка на всички файлове",
          "Професионална настройка и присъствие на екип",
          "Елегантен дизайн, подходящ за всяко събитие",
        ].map((text, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              color: "#3e352d",
              fontSize: "22px",
              lineHeight: "1.6",
            }}
          >
            <div
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "999px",
                border: "1px solid #b79f84",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#b79f84",
                fontSize: "14px",
                flexShrink: 0,
              }}
            >
              ✓
            </div>

            {text}
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div
  style={{
    flex: 1,
    height: "480px",
    borderRadius: "32px",
    overflow: "hidden",
    backgroundColor: "#d8c2ad",
  }}
>
  <img
    src="/phone.png"
    alt="Vintage phone"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      display: "block",
    }}
  />
</div>
  </div>
</section>
</main>
  );
}