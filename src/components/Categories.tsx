import { useState } from "react";

const Categories = () => {
  const [activeCategoty, setActiveCategory] = useState(0);

  const categoryNames = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categoryNames.map((categoryName, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setActiveCategory(index);
              }}
              className={activeCategoty == index ? "active" : ""}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
