function Categories({ categories, filterItems }) {
  return (
    <section className="cat">
      {categories.map((item) => {
        return (
          <button key={item} className="btn" onClick={() => filterItems(item)}>
            {item}
          </button>
        );
      })}
    </section>
  );
}
export default Categories;
