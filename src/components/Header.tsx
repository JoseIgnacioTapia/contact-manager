interface HeaderProps {
  branding: string;
}

function Header({ branding }: HeaderProps) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
