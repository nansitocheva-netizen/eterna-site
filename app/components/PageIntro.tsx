import type { ReactNode } from "react";
import styles from "./PageIntro.module.css";

type Props = {
  eyebrow: string;
  heading: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
};

export default function PageIntro({ eyebrow, heading, text, children }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <div className={styles.line} />
      <h1 className={styles.heading} style={{ whiteSpace: "pre-line" }}>{heading}</h1>
      {text && <p className={styles.text} style={{ whiteSpace: "pre-line" }}>{text}</p>}
      {children}
    </section>
  );
}
