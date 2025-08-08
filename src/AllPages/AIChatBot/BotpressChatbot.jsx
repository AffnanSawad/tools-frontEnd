import React, { useEffect } from "react";

const BotpressChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.setAttribute("data-bot-id", "YOUR_BOT_ID");
    script.setAttribute("data-host", "https://cdn.botpress.cloud/webchat/v0");
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return null;
};

export default BotpressChatbot;
