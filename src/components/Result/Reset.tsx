interface ResetProps {
  reset: () => void;
}
const Reset = ({ reset }: ResetProps) => {
  return (
    <div className="w-full flex items-center justify-center">
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full bg-white border border-blue-600 py-3 px-12 text-blue-600 font-medium mt-2 hover:bg-cyan-100"
      >
        Tentar Novamente
      </button>
    </div>
  );
};

export default Reset;
