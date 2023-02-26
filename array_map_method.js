
    //const arrayOfNumbers = [1, 5, 6, 2, 15];
    //const arrayOfMultipliedNumbers = [];
    //arrayOfNumbers.forEach((currentNumber) => arrayOfMultipliedNumbers.push(currentNumber * 2));

    //console.log(arrayOfMultipliedNumbers);
/**Map: we do not need to make and emplty array */
    const arrayOfNumbers = [1, 5, 6, 2, 15];
    const arrayOfMultipliedNumbers = arrayOfNumbers.map((currentNumber) => currentNumber * 2);

    console.log(arrayOfMultipliedNumbers);