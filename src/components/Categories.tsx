interface CategoriesProps {
  activeCategory: number;
  onClickCategory: React.Dispatch<React.SetStateAction<number>>;
}

const Categories = ({ activeCategory, onClickCategory }: CategoriesProps) => {
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
                onClickCategory(index);
              }}
              className={activeCategory === index ? "active" : ""}
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
