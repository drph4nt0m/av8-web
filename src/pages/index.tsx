import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageStats from "@site/src/components/HomepageStats";
import HomepageCommands from "@site/src/components/HomepageCommands";
import GitHubSponsorCard from "@site/src/components/GitHubSponsorCard";
const av8Config = require("../../av8.config");

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--secondary", styles.heroBanner)}>
      <div className="container">
        <img
          src="img/logo.svg"
          alt="AvBot logo"
          height="200px"
          width="200px"
          className="hero__logo"
        />
        {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to={av8Config.invite}
          >
            Add to Discord
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Head>
        <title>AvBot: Aviation enthusiast's friendly neighborhood bot</title>
        <meta
          property="keywords"
          content={
            "aviation, discord, bot, flight, simulation, online, metar, taf, station, atis, flight, ivao, vatsim, nats, zulu, time"
          }
        />
        <meta
          name="description"
          content={
            "Get METAR, TAF, ATIS, station information, IVAO and VATSIM's flight and controller information, zulu time, and much more."
          }
        />
        <meta
          property="og:title"
          content={"AvBot: Aviation enthusiast's friendly neighborhood bot"}
        />
        <meta
          property="og:description"
          content={
            "Get METAR, TAF, ATIS, station information, IVAO and VATSIM's flight and controller information, zulu time, and much more."
          }
        />
        <meta
          property="og:image"
          content={"https://new.av8.dev/img/logo.svg"}
        />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageStats />
        <HomepageCommands />
        <GitHubSponsorCard />
      </main>
    </Layout>
  );
}
