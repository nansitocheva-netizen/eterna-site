import type { ReactNode } from "react";
import styles from "./HowItWorks.module.css";
import { copy } from "../copy";

export type HowItWorksStep = {
  number: string;
  title: string;
  text: string;
  icon: ReactNode;
};

export default function HowItWorks({ steps }: { steps: HowItWorksStep[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>{copy.shared.howItWorksEyebrow}</div>
        <div className={styles.eyebrowLine} />
      </div>
      <div className={styles.grid}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles.icon}>{step.icon}</div>
            <div className={styles.number}>{step.number}</div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
