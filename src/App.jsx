import React, { useState } from "react";
import NumericInput from "./components/NumericInput";
import PredictionResult from "./components/PredictionResult";

const App = () => {
  const [form, setForm] = useState({ home_team_rank: "", away_team_rank: "" });
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.home_team_rank || !form.away_team_rank) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erro ao obter previsão");
      }

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Previsão de Jogos de Futebol</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-6 max-w-md w-full"
      >
        <NumericInput
          label="Ranking do Time da Casa"
          value={form.home_team_rank}
          onChange={(value) => handleChange("home_team_rank", value)}
        />
        <NumericInput
          label="Ranking do Time Visitante"
          value={form.away_team_rank}
          onChange={(value) => handleChange("away_team_rank", value)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
          disabled={loading}
        >
          {loading ? "Carregando..." : "Obter Previsão"}
        </button>
      </form>
      <PredictionResult prediction={prediction} />
    </div>
  );
};

export default App;
