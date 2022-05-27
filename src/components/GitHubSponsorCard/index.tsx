import React from "react";
import styles from "./styles.module.css";

export default function GitHubSponsorCard(): JSX.Element {
  return (
    <section id="sponsor" className={styles.sponsorSection}>
      <iframe
        src="https://github.com/sponsors/drph4nt0m/card"
        title="Sponsor drph4nt0m"
        className={styles.sponsorCard}
      ></iframe>
    </section>
  );
}
