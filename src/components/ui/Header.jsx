import logo from "../../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header className="mx-auto my-12 text-center">
      <img
        src={logo}
        alt="logo"
        className="mx-auto h-20 w-20 bg-transparent object-contain"
      />
      <h1 className="text-2xl">Investment Calculator</h1>
    </header>
  );
}

export default Header;
