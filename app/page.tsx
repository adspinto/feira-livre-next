"use client";

import { Button } from "ui";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div
      className={styles.container}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Web</h1>
      <div
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          border: "1px solid red"
        }}
      >
        <Button onClick={() => console.log("Pressed!")} text="Boop" />
      </div>
    </div>
  );
}
