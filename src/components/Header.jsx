import logo from "../assets/logo.png";

function Header() {
    return (
      <header className="header">
        <img src={logo} alt="Aarogya Naari Logo" className="brand-logo" />
        <h1 className="site-title">Aarogya Naari</h1>
        <p className="motto">"Empowering Women, Enriching Health"</p>
      </header>
    );
  }
  
  export default Header;