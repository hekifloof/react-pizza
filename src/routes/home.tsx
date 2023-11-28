import "../scss/app.scss";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import { useEffect, useState } from "react";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

const Home = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({
    name: "популярности",
    value: "rating",
    order: "desc",
  });

  useEffect(() => {
    setIsLoading(true);
    const fetchPizzaData = async () => {
      const data = await fetch(
        `https://656221b0dcd355c0832496fd.mockapi.io/react-pizza/pizzas?category=${
          activeCategory > 0 ? activeCategory : ""
        }&sortBy=${activeSort.value}&order=${activeSort.order}`,
      );
      const pizzaData = (await data.json()) as Pizza[];
      setPizzaList(pizzaData);
      setIsLoading(false);
    };
    window.scrollTo(0, 0);
    fetchPizzaData().catch(console.error);
  }, [activeCategory, activeSort.name, activeSort.order, activeSort.value]);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={activeCategory}
            onClickCategory={setActiveCategory}
          />
          <Sort activeSort={activeSort} onClickSort={setActiveSort} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array<undefined>(10)].map((_, index) => (
                <PizzaSkeleton key={index}></PizzaSkeleton>
              ))
            : pizzaList.map((pizza) => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
