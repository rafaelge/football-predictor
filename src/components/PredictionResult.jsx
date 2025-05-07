import React from "react";

const PredictionResult = ({ prediction }) => {
  if (!prediction) {
    return null;
  }

  return (
    <div className="bg-white shadow-md rounded-md p-4 text-center max-w-sm mx-auto mt-6">
      <h2 className="text-lg font-bold mb-2">Previsão do Jogo</h2>
      <div className="text-left">
        <p>
          <strong>Chance do Time da Casa:</strong> {prediction.home_team_probability}%
        </p>
        <p>
          <strong>Chance do Time Visitante:</strong> {prediction.away_team_probability}%
        </p>
        <p>
          <strong>Chance de Empate:</strong> {prediction.draw_probability}%
        </p>
      </div>
    </div>
  );
};

export default PredictionResult;
