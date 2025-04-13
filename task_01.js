const people = [
    { name: "Shammi", age: 25, gender: "female" },
    { name: "Wasif", age: 26, gender: "male" },
    { name: "Niloy", age: 19, gender: "male" },
    { name: "Rimi", age: 27, gender: "female" },
    { name: "Siam", age: 35, gender: "male" }
  ];
  
  function getNames(peoples) {
    return peoples
      .filter(x => x.gender !== "female") 
      .map(x => x.name);
  }
  const result = getNames(people);
  console.log(result);