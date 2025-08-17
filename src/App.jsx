import Chatbot from "./components/Chatbot.jsx";

function App() {
  return (
    <div style={{maxWidth:600, margin:"2em auto", fontFamily:"sans-serif"}}>
      <h1>digi-bot</h1>
      <p>digi-bot hilft Lehrkräften, Arbeitsdokumente und Anleitungen zu finden.</p>
      <Chatbot />
    </div>
  );
}

export default App;