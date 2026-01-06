import { useState } from "react";
import "./WizardBot.css";

function WizardBot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "🧙‍♂️ Welcome to the Wizarding Shop! Ask me about wands, potions, or books.",
    },
  ]);
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const msg = input.toLowerCase();
    let botResponse = "";

    if (msg.includes("wand")) {
      botResponse = "✨ Our wands choose the wizard. Check the Wands category!";
    } else if (msg.includes("potion")) {
      botResponse =
        "🧪 Potions are brewed with care. Amortentia is very popular!";
    } else if (msg.includes("book")) {
      botResponse = "📚 Spellbooks help young wizards learn faster.";
    } else if (msg.includes("price")) {
      botResponse = "💰 Prices vary depending on the magic level of the item.";
    } else if (msg.includes("hello") || msg.includes("hi")) {
      botResponse = "✨ Greetings, young wizard!";
    } else {
      botResponse =
        "🔮 I’m still learning magic… try asking about wands, potions, or books!";
    }

    setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    setInput("");
  }

  return (
    <div className="wizardbot-container">
      <div className="wizardbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.sender}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="wizardbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about magical items..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default WizardBot;
