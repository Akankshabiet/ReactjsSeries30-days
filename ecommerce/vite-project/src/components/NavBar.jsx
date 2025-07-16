const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">MegaMart</div>
      <input type="text" placeholder="Search here..." className="search-bar" />
      <nav className="menu">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Contact</a>
        <a href="#">Cart</a>
      </nav>
    </header>
  );
};

export default Navbar;
