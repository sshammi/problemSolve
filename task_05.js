const people = [
    { name: "Shammi", age: 25 },
    { name: "Suraiya", age: 30 },
    { name: "Niloy", age: 22 }
  ];
  
  function updatePersonAge(pArray, pName, newAge) {
    const person = pArray.find(p => p.name === pName);
    if (person) {
      person.age = newAge;
    } else {
      console.log("Person not found.");
    }
  }
  updatePersonAge(people,"Suraiya", 35);
  console.log(people);
  