// src/components/Filter.js
import React from 'react';
import { Filters } from '../actions';

const Filter = ({ filter, setFilter }) => (
  <div className="filter">
    <button onClick={() => setFilter(Filters.SHOW_ALL)} disabled={filter === Filters.SHOW_ALL}>
      全部
    </button>
    <button onClick={() => setFilter(Filters.SHOW_ACTIVE)} disabled={filter === Filters.SHOW_ACTIVE}>
      进行中
    </button>
    <button onClick={() => setFilter(Filters.SHOW_COMPLETED)} disabled={filter === Filters.SHOW_COMPLETED}>
      已完成
    </button>
  </div>
);

export default Filter;
