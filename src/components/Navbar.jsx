function Navbar({ search, setSearch }) {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">CodeLearn</h1>

      <input
        type="text"
        placeholder="Cari tutorial..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white text-black px-3 py-2 rounded-md"
      />
    </nav>
  );
}

export default Navbar;
