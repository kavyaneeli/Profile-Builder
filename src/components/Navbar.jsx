function Navbar({ showPage, page }) {
  return (
    <nav className="navbar">
      <button
        className={page === "create" ? "active" : ""}
        onClick={() => showPage("create")}
      >
        Create Profile
      </button>

      <button
        className={page === "profiles" ? "active" : ""}
        onClick={() => showPage("profiles")}
      >
        Saved Profiles
      </button>
    </nav>
  );
}

export default Navbar;