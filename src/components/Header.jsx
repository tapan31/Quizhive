import Logo from "../assets/quizhive-high-resolution-logo-transparent.png";

export default function Header() {
  return (
    <header className="my-5">
      <div className="mx-auto w-3/4 sm:w-1/2 md:w-1/4">
        <img src={Logo} alt="Logo" className="w-full" />
      </div>
    </header>
  );
}
