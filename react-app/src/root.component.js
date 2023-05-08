import "./style.css";
import { useState } from "react";
import axios from "axios";

export default function Root(props) {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8084/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="col-md-11 container container_style">
      <h2>Zeptej se AI!</h2>
      <p> Téma SPA a MF je tak rozsáhlé, že i přes všechnu snahu zde a v mé práci
        rozhodně nenajdeš první a poslední. Neboj se zeptat umělé inteligence!
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" placeholder="Sem napiš otázku" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <button type="submit" className="btn btn-primary btn-md btn-block">Zeptej se!</button>
      </form>
      <p className="openai_response">{response}</p>
      <p className="openai_realized">Služba realizována pomocí <a href="https://openai.com/blog/openai-api" target="_blank">OpenAI API</a></p>
      </div>
  );
}
