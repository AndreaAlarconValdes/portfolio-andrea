import React, { useState } from "react";
import "./FilterableList.css";

export type Item = {
  name?: string;
  icon?: string;
  description?: string;
  category: string;
};

export type Filter = {
  name: string;
  icon?: string;
};

export type FilterableListProps = {
  items: Item[];
  itemsTitle?: string;
  filters: Filter[];
  filterTitle?: string;
};

const FilterableList: React.FC<FilterableListProps> = ({
  items,
  itemsTitle,
  filters,
  filterTitle,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <div className="filter-container">
      <div className="filters-nav">
        <div className="deco-btns">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h4>{filterTitle}</h4>
        {filters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => setActiveFilter(filter.name)}
            style={{
              backgroundColor:
                activeFilter === filter.name ? "#f46f0f" : "transparent",
              border: activeFilter === filter.name ? "2px solid black" : "none",
            }}
          >
            <i className={filter.icon}></i>
            {filter.name}
          </button>
        ))}
      </div>
      <div className="items-container">
        <div className="item-title">
          <p>{itemsTitle}</p>
        </div>
        <div className="filtered-items">
          <ul>
            {filteredItems.map((item) => (
              <li key={item.name}>
                {item.icon && 
                <img src={`./${item.icon}.png`} alt={item.name} />
                }
                {item.name &&
                <h5>{item.name}</h5>
                }
                {item.description &&
                <p>{item.description}</p>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterableList;
