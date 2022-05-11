import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type StatItem = {
  id: string;
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
};

const StatsList: StatItem[] = [
  {
    id: "numberOfGuilds",
    title: "Discord servers",
    Svg: require("@site/static/img/discord-server-icon.svg").default,
  },
  {
    id: "totalMembers",
    title: "Users",
    Svg: require("@site/static/img/users-icon.svg").default,
  },
  {
    id: "totalCommandsUsed",
    title: "Commands used",
    Svg: require("@site/static/img/commands-icon.svg").default,
  },
];

function Stat({ id, title, Svg }: StatItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.statSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <span id={id}>{0}</span>+ {title}
        </h3>
      </div>
    </div>
  );
}

export default function HomepageStats(): JSX.Element {
  return (
    <section id="stats" className={styles.stats}>
      <div className="container">
        <div className="row">
          {StatsList.map((props, idx) => (
            <Stat key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
