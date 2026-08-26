import type { ReactNode } from "react";
import styles from "./PageIntro.module.css";

type Props = {
  eyebrow: string;
  heading: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  /** Horizontal alignment of the intro block. Defaults to "center". */
  align?: "center" | "left";
};

export default function PageIntro({
  eyebrow,
  heading,
  text,
  children,
  align = "center",
}: Props) {
  const alignClass = align === "left" ? styles.alignLeft : "";
  return (
    <section className={`${styles.section} ${alignClass}`.trim()}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <div className={styles.line} />
      <h1 className={styles.heading} style={{ whiteSpace: "pre-line" }}>{heading}</h1>
      {text && <p className={styles.text} style={{ whiteSpace: "pre-line" }}>{text}</p>}
      {children}
    </section>
  );
}
