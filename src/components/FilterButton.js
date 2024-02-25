import React from "react";
import styles from "../styles/FilterButtons.Module.css";

function FilterButtons({ filterTasks }) {
  return (
    <div className={styles.FilterButtons}>
      <div className="filter">
        <div className="space">
          <select onChange={(e)=>filterTasks(e.target.value)}>
            <option value="all">
              All
            </option>
            <option value="completed">
              Completed
            </option>
            <option  value="incomplete">
              Incomplete
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterButtons;
