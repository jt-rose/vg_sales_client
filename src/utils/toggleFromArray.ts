export const toggleFromArray = <T>(item: T, array: T[]): T[] => {
  const hasItem = array.includes(item);
  if (hasItem) {
    const updatedArray = array.filter((x) => x !== item);
    return updatedArray;
  } else {
    return [...array, item];
  }
};
