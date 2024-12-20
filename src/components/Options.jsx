import OptionButton from "./OptionButton";

export default function Options() {
  return (
    <div className="flex flex-col gap-3">
      <OptionButton>Nicotine</OptionButton>
      <OptionButton>Cathinone</OptionButton>
      <OptionButton>Ephedrine</OptionButton>
      <OptionButton>Glaucine</OptionButton>
    </div>
  );
}
