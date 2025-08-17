const faqs = [
  {
    question: "Wie erstelle und benenne ich Gruppen in IServ?",
    link: "https://kgsschwarmstedt.de/iserv/file/-/Groups/Lehrer/Anleitungen%20und%20Hilfen/Kurzanleitung%20-%20Gruppen%20in%20IServ.pdf",
    linkText: "Kurzanleitung - Gruppen in IServ.pdf"
  },
  {
    question: "Wie benutze ich die ProWise Tafeln?",
    link: "https://kgsschwarmstedt.de/iserv/file/-/Groups/Lehrer/Anleitungen%20und%20Hilfen/Prowise%20-%20Kurzanleitung.pdf",
    linkText: "Kurzanleitung - Prowise.pdf"
  }
  // Weitere Einträge kannst du hier ergänzen!
];

export default function Leitfaeden() {
  return (
    <ul>
      {faqs.map((faq, idx) => (
        <li key={idx} style={{marginBottom: "1.2em"}}>
          <strong>{faq.question}</strong><br />
          <a href={faq.link} target="_blank" rel="noopener noreferrer">{faq.linkText}</a>
        </li>
      ))}
    </ul>
  );
}