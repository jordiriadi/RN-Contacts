const sortByField = (field) => (_itemA, _itemB) => {
  const itemA = _itemA[field];
  const itemB = _itemB[field];

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