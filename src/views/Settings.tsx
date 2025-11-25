import "./Settings.css";

import { useEffect, useState } from "react";
import { store } from "@telemetryos/sdk";

export function Settings() {
  const [subtitleText, setSubtitleText] = useState("");
  const [isLoadingValue, setIsLoadingValue] = useState(true);

  const fetchSubtitleEffect = () => {
    (async () => {
      const defaultSubtitle = "This is your render view.";
      let subtitle = await store().application.get("subtitle");
      if (!subtitle) await store().application.set("subtitle", defaultSubtitle);
      setSubtitleText(defaultSubtitle);
      setIsLoadingValue(false);
    })().catch(console.error);
  };

  useEffect(fetchSubtitleEffect, []);

  const handleSubtitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitleText(event.target.value);
    store()
      .application.set("subtitle", event.target.value)
      .catch(console.error);
  };

  return (
    <div className="settings" style={{ backgroundColor: "red" }}>
      <div className="form-field">
        <h1>Hello World -Settings-</h1>
        <div className="form-field-label">Subtitle Text</div>
        <div className="form-field-frame">
          <input
            className="form-field-input"
            type="text"
            value={subtitleText}
            onChange={handleSubtitleChange}
            disabled={isLoadingValue}
          />
        </div>
      </div>
    </div>
  );
}
