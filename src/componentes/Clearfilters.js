import React, { useContext } from 'react';
import contextApp from '../context/contextApp';

const ClearFilters = () => {
  const { filters, setFilters } = useContext(contextApp);
  const { filterByNumericValues } = filters;

  // Falta a parte de devolver as colunas do botão "X" clicadas.
  const deleteFilters = (currentColumn) => {
    console.log(currentColumn);
    console.log(filters);
    console.log(filterByNumericValues);
    const removeFilterByNumeric = filterByNumericValues
      .filter(({ column }) => column !== currentColumn);

    setFilters({
      ...filters,
      filterByNumericValues: [removeFilterByNumeric],
    });
  };

  if (filterByNumericValues.length === 0) return null;
  if (filterByNumericValues.length > 0) {
    return (
      <section className="filters">
        <span className="filter-title">Filtros aplicados:</span>
        {
          filterByNumericValues.map((filter, index) => (
            <span
              data-testid="filter"
              key={ index }
            >
              { `${filter.column} | ${filter.comparison} | ${filter.value}` }
              <button
                type="button"
                value={ filter.column }
                onClick={ deleteFilters }
              >
                X
              </button>
            </span>
          ))
        }
      </section>
    );
  }
};
export default ClearFilters;
