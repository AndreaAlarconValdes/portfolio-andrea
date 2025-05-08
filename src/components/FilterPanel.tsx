import React, { useState, ReactNode } from "react";
import "./FilterPanel.css";
import Box from "./Box";
type FilterItem = {
  id: string;
  label: string;
};

type FilterPanelProps = {
  filters: FilterItem[];
  contentMap: { [key: string]: ReactNode };
  defaultFilterId?: string;
  onClose: () => void;
};

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  contentMap,
  defaultFilterId,
  onClose,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(
    defaultFilterId || filters[0]?.id
  );

  return (
    <Box onClose={onClose}>
      <div className="filter-panel-container">
        <div className="all-filters">
          {filters.map((filter) => (
            <div
              key={filter.id}
              style={{
                cursor: "pointer",
                backgroundColor:
                  activeFilter === filter.id ? "#fafafa" : "transparent",
                border:
                  activeFilter === filter.id ? "2px solid black" : "none",
              }}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </div>
          ))}
        </div>

        <div className="filters-content-map">{contentMap[activeFilter]}</div>
      </div>
    </Box>
  );
};
