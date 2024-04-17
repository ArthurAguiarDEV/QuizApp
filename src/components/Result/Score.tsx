interface ScoreProps {
  score: number;
}
const Score = ({ score }: ScoreProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 mt-5 mb-10">
      <span className="font-medium text-3xl text-slate-700">{score} / 7</span>
      <span className="font-medium text-[17px] text-slate-700">
        Voce conseguiu{" "}
        <span className="text-[17px] font-medium text-blue-600">{score} </span>
        pontos no jogo de{" "}
        <span className="text-[17px] font-medium text-blue-600">7 </span>
        Perguntas.
      </span>
    </div>
  );
};

export default Score;
