export default function Progress() {
  return (
    <div className="mb-4 grid w-full grid-cols-2 items-center">
      <progress
        className="col-span-2 mb-1 h-3 w-full"
        max={100}
        value={30}
      ></progress>
      <p className="font-semibold">
        Question <span className="text-secondary font-bold">1</span> / 10
      </p>
      <p className="text-right font-semibold">
        Score <span className="text-secondary font-bold">10</span> / 100
      </p>
    </div>
  );
}
