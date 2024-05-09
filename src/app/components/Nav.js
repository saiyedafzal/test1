function Header() {
  return (
    <header className="header">
      <nav className="brand container navbar">
        Brand
        <svg
          className="burger"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#a)">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="#292929"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
        <div className="menu">
          <ul className="menu-inner">
            <li className="menu-item">
              <span className="menu-link">Home</span>
            </li>
            <li className="menu-item">
              <span className="menu-link">Feature</span>
            </li>
            <li className="menu-item">
              <span className="menu-link">Pricing</span>
            </li>
            <li className="menu-item">
              <span className="menu-link">Support</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
