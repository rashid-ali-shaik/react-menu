import { useState } from "react";

import "./App.css";
import Header from "./Header";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

let categories = data.map((item) => item.category);
const allCategories = ["all", ...new Set(categories)];

function App() {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((e) => e.category === category);
    setMenu(newItems);
  };
  return (
    <main>
      <Header title={"Our Menu"} />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menu={menu} />
    </main>
  );
}

export default App;
