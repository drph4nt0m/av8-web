import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type CommandItem = {
  slash: string;
  description: string;
};

const CommandsList: CommandItem[] = [
  {
    slash: "metar",
    description:
      "Get the latest METAR (Meteorological Terminal Aviation Routine Weather Report) for any airport",
  },
  {
    slash: "taf",
    description:
      "Get the latest TAF (Terminal Aerodrome Forecast) for any airport",
  },
  {
    slash: "station",
    description: "Get the station information for any airport",
  },
  {
    slash: "atis",
    description: "Get the live ATIS (as text) for any airport",
  },
  {
    slash: "atis-voice",
    description: "Get the live ATIS (as voice) for any airport",
  },
  {
    slash: "flight",
    description: "Get the flight information for a real life flight",
  },
  {
    slash: "ivao",
    description: "Get the information for a call sign on the IVAO network",
  },
  {
    slash: "vatsim",
    description: "Get the information for a call sign on the VATSIM network",
  },
  {
    slash: "nats",
    description:
      "Get the information for the latest active North Atlantic Tracks",
  },
  {
    slash: "zulu",
    description: "Get the current zulu time",
  },
  {
    slash: "time",
    description:
      "Get the zulu to local or local to zulu time conversions for any airport",
  },
  {
    slash: "help",
    description: "Get the description of all commands",
  },
  {
    slash: "info",
    description:
      "Provides information about AvBot, and links for adding the bot and joining the support server",
  },
  {
    slash: "ping",
    description: "Checks the AvBot's ping to the Discord server",
  },
];

function CommandRow({ slash, description }: CommandItem) {
  return (
    <tr>
      <td data-th="Slash">
        <code>/{slash}</code>
      </td>
      <td data-th="Description">{description}</td>
    </tr>
  );
}

export default function HomepageCommands(): JSX.Element {
  return (
    <section id="commands">
      <div className={styles.commands}>
        <h2 className="text--center">Commands</h2>
        <table>
          <tr>
            <th>Slash</th>
            <th>Description</th>
          </tr>
          {CommandsList.map((props, idx) => (
            <CommandRow key={idx} {...props} />
          ))}
        </table>
      </div>
    </section>
  );
}
