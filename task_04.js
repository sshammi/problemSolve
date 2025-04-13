const cars = [
    { make: "Toyota", model: "Corolla", year: 2020 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Focus", year: 2022 },
    { make: "Chevrolet", model: "Malibu", year: 2019 }
  ];
  function sortCar(carArray) {
    return carArray.sort((a, b) => a.year - b.year);
  }
  const result = sortCar(cars);
  console.log(result);
  