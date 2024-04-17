import Reset from "./Reset";
import Score from "./Score";

interface ResultProps {
  score: number;
  reset: () => void;
}

const Result = ({ score, reset }: ResultProps) => {
  return (
    <>
      <Reset reset={reset} />
      <Score score={score} />
    </>
  );
};

export default Result;
