import type { ReactNode } from "react";
import styles from "./ClosingCta.module.css";
import { copy } from "../copy";

type Props = {
  heading: ReactNode;
  subtext?: string;
  buttonLabel?: string;
  size?: "sm" | "lg";
  /**
   * Key from `copy.bookingProducts` to pre-select in the booking modal
   * when the CTA is clicked. Omit to leave the modal on the default
   * "not decided yet" option.
   */
  productKey?: string;
};

export default function ClosingCta({
  heading,
  subtext,
  buttonLabel = copy.shared.checkDatesBtn,
  size = "lg",
  productKey,
}: Props) {
  return (
    <section className={styles.section}>
      <h2
        className={`${styles.heading} ${size === "sm" ? styles.headingSm : ""}`}
        style={{ whiteSpace: "pre-line" }}
      >
        {heading}
      </h2>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
      <button
        type="button"
        className={styles.btn}
        data-booking-trigger="true"
        {...(productKey ? { "data-booking-product": productKey } : {})}
      >
        {buttonLabel}
      </button>
    </section>
  );
}
