import { useState } from "react";

const faqs = [
  {
    question: "Wie erstelle und benenne ich Gruppen in IServ",
    answer: "Die Anleitung findest du hier: <a href='https://kgsschwarmstedt.de/iserv/file/-/Groups/Lehrer/Anleitungen%20und%20Hilfen/Kurzanleitung%20-%20Gruppen%20in%20IServ.pdf' target='_blank'>Kurzanleitung - Gruppen in IServ.pdf</a>"
  },
  {
    question: "Wie benutze ich die ProWise Tafeln",
    answer: "Die Anleitung findest du hier: <a href='https://kgsschwarmstedt.de/iserv/file/-/Groups/Lehrer/Anleitungen%20und%20Hilfen/Prowise%20-%20Kurzanleitung.pdf' target='_blank'>Kurzanleitung - Prowise.pdf</a>"
  }
  // Weitere Einträge kannst du hier ergänzen!
];

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [lastQuestion, setLastQuestion] = useState("");

  function handleAsk() {
    const search = input.trim().toLowerCase();
    if (!search) return;

    // Suche nach passenden Antworten
    const found = faqs.filter(faq =>
      faq.question.toLowerCase().includes(search)
      || search.includes(faq.question.toLowerCase())
    );
    setResults(found.length ? found : []);
    setLastQuestion(input);
    setInput("");
  }

  function handleInput(e) {
    setInput(e.target.value);
    // Live-Suche (optional)
    const search = e.target.value.trim().toLowerCase();
    if (search.length > 2) {
      const found = faqs.filter(faq =>
        faq.question.toLowerCase().includes(search)
        || search.includes(faq.question.toLowerCase())
      );
      setResults(found.length ? found : []);
      setLastQuestion("");
    } else {
      setResults([]);
    }
  }

  return (
    <div style={{maxWidth: 500, margin: "2em auto", padding: "1em", border: "1px solid #ccc", borderRadius: "8px", background: "#f9f9f9"}}>
      <h2>FAQ-Chatbot</h2>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Frage eingeben oder Schlagwort suchen..."
        style={{width: "100%", padding: "0.5em", marginBottom: "1em"}}
        onKeyDown={e => { if (e.key === "Enter") handleAsk(); }}
      />
      <button style={{padding:"0.5em 1em"}} onClick={handleAsk}>Suchen</button>
      <div style={{marginTop: "1em"}}>
        {(results.length > 0) ? (
          <ul>
            {results.map((faq, idx) => (
              <li key={idx} style={{marginBottom:"1em"}}>
                <strong>{faq.question}</strong><br />
                <span dangerouslySetInnerHTML={{__html: faq.answer}} />
              </li>
            ))}
          </ul>
        ) : lastQuestion ? (
          <div style={{color: "#a00"}}>Keine passende Antwort gefunden.</div>
        ) : null}
      </div>
    </div>
  );
}