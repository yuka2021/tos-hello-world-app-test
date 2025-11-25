import "./Render.css";
import amberLogoPath from "../../assets/telemetry_amber_loader.webp";
import { useEffect, useState } from "react";
import { store } from "@telemetryos/sdk";

export function Render() {
  const [subtitle, setSubtitle] = useState("");

  const subscribeSubtitleEffect = () => {
    store()
      .application.subscribe("subtitle", (value) => {
        setSubtitle(value);
      })
      .catch(console.error);
  };
  useEffect(subscribeSubtitleEffect, []);

  return (
    <div className="render">
      <div className="render__hero">
        <div className="render__hero-logo">
          <img src={amberLogoPath} alt="TelemetryOS" />
        </div>
        <div className="render__hero-title">Hello from TelemetryOS!</div>
        <div className="render__hero-subtitle">{subtitle}</div>
      </div>
      <div className="render__docs-information">
        <div className="render__docs-information-title">
          Looking for help getting started?
        </div>
        <div className="render__docs-information-text">
          Visit our application development documentation to learn more about
          building applications with TelemetryOS.
        </div>
        <a
          className="render__docs-information-button"
          href="http://docs.telemetryos.ai/"
          target="_blank"
          rel="noreferrer"
        >
          View Documentation
        </a>
      </div>
    </div>
  );
}
