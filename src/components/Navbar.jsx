import navLinks from '../constants/' // Or '../constants/index.js' but, since it is index.js you don't need to specify it. It will automatically look for index.js file in the constants folder

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label.toLowerCase()}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search button" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart button" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;