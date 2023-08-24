import MenuItem from "./MenuItem";
function Menu({ menu }) {
  return (
    <section className="section-center">
      {menu.map((item) => (
        <MenuItem {...item} key={item.id} />
      ))}
    </section>
  );
}
export default Menu;
