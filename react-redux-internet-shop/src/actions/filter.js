const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    payload: filter
  };
};

const setSearch = (search) => {
  return {
    type: 'SET_QUERY',
    payload: search
  };
};

export {
  setFilter,
  setSearch
  };
