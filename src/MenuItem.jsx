function MenuItem({ title, price, img, desc }) {
  return (
    <article>
      <img src={img} alt={title} />
      <header className="info">
        <h3>{title}</h3>
        <span>{"$" + price}</span>
      </header>
      <p>{desc}</p>
    </article>
  );
}
export default MenuItem;
