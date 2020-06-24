const sortByField = (field) => (_itemA, _itemB) => {
  const itemA = _itemA[field] && _itemA[field].toUpperCase();
  const itemB = _itemB[field] && _itemB[field].toUpperCase();

  switch (true) {
    case itemA > itemB:
      return 1;
    case itemA < itemB:
      return -1;
    default:
      return 0;
  }
}

export default sortByField;