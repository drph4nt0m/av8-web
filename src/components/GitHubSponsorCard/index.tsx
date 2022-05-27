import React from "react";
import styles from "./styles.module.css";

export default function GitHubSponsorCard(): JSX.Element {
  return (
    <section id="sponsor">
      <iframe
        src="https://github.com/sponsors/drph4nt0m/card"
        title="Sponsor drph4nt0m"
        height="225"
        width="600"
        className={styles.sponsorCard}
      ></iframe>
    </section>
  );
}
