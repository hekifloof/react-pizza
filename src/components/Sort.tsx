import { useState } from "react";
interface SortProps {
  activeSort: {
    name: string;
    value: string;
    order: string;
  };
  onClickSort: React.Dispatch<
    React.SetStateAction<{
      name: string;
      value: string;
      order: string;
    }>
  >;
}

const Sort = ({ activeSort, onClickSort }: SortProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const sortOptions = [
    { name: "популярности", value: "rating", order: "desc" },
    { name: "цене", value: "price", order: "desc" },
    { name: "названию", value: "title", order: "asc" },
  ];

  const changeOrder = () => {
    const newOrder = activeSort.order === "desc" ? "asc" : "desc";
    onClickSort({ ...activeSort, order: newOrder });
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          onClick={changeOrder}
          width="35px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {(activeSort.order === "asc" && activeSort.value !== "title") ||
          (activeSort.order === "desc" && activeSort.value === "title") ? (
            <path
              d="m16.707 13.293-4-4a1 1 0 0 0-1.414 0l-4 4A1 1 0 0 0 8 15h8a1 1 0 0 0 .707-1.707z"
              fill="#ff8e31"
              data-name="Up"
            />
          ) : (
            <path
              d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z"
              fill="#ff8e31"
              data-name="Down"
            />
          )}
        </svg>
        <b>Сортировка по:</b>
        <span
          onClick={() => {
            setIsVisible((isVisible) => !isVisible);
          }}
        >
          {activeSort.name}
        </span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {sortOptions.map((sortOption, index) => {
              return (
                <li
                  key={index}
                  className={
                    activeSort.name === sortOption.name ? "active" : ""
                  }
                  onClick={() => {
                    onClickSort(sortOptions[index]);
                    setIsVisible(false);
                  }}
                >
                  {sortOption.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
