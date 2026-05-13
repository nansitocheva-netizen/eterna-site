"use client";
import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400"],
});

export default function Home() {
const [menuOpen, setMenuOpen] = useState(false);return (
<main
style={{
minHeight: "100vh",
backgroundColor: "#f6f1ec",
display: "flex",
flexDirection: "column",
fontFamily: cormorant.style.fontFamily,
}}
>
{/* NAVBAR */}
<header
  style={{
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    flexWrap: "wrap",
    width: "100%",
    boxSizing: "border-box",
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
      letterSpacing: "6px",
      wordSpacing: "6px",
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
  href="/video-album"
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
  href="/gallery"
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
  href="/contacts"
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

{/* HERO */}
<section
  style={{
    height: "100vh",
    minHeight: "760px",
    position: "relative",
    backgroundImage: "url('/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
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
height: "100%",
padding: "120px 24px 60px",
display: "flex",
flexDirection: "column",
justifyContent: "flex-start",
alignItems: "flex-start",
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
fontSize: "56px",
lineHeight: "1.15",
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
></div>

<p
style={{
fontSize: "19px",
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
padding: "100px 24px",
backgroundColor: "#fbf7f2",
}}
>
<div
style={{
maxWidth: "1280px",
margin: "0 auto",
display: "grid",
gridTemplateColumns:
  typeof window !== "undefined" && window.innerWidth < 768
    ? "1fr"
    : "repeat(3, minmax(0, 1fr))",
gap: "24px",
}}
>
{[
{
title: "ВИДЕО ПОСЛАНИЯ",
text: "Вашите гости оставят видео послания, пълни с емоции и пожелания.",
icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
    <rect x="2" y="6" width="14" height="12" rx="2" />
  </svg>
),
},
{
title: "НЕЗАБРАВИМИ СПОМЕНИ",
text: "Истински думи, смях и чувства, които ще съхранявате завинаги.",
icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
  </svg>
),
},
{
title: "ЛЕСНО И УДОБНО",
text: "Получавате всички видео послания с високо качество след вашето събитие.",
icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 13v8l-4-4" />
    <path d="m12 21 4-4" />
    <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
  </svg>
),
},
].map((item, index) => (
<div
key={index}
style={{
textAlign: "center",
borderRight:
index !== 2
? "1px solid rgba(184,155,108,0.18)"
: "none",
paddingRight:
  typeof window !== "undefined" && window.innerWidth < 768
    ? "0px"
    : "36px",
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
>
{item.icon}
</div>

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
margin: "18px auto  24px",
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
