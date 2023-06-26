export const mergeArrays = (firstArray, secondArray) => {
  const mergedArray = [...firstArray];

  secondArray.forEach((secondObj) => {
    const matchingIndex = mergedArray.findIndex(
      (firstObj) => firstObj.id === secondObj.id
    );

    if (matchingIndex !== -1) {
      mergedArray[matchingIndex] = secondObj;
    } else {
      mergedArray.push(secondObj);
    }
  });

  return mergedArray;
};
