function square(num) {
    return num * num;
  }
  
  function double(num) {
    return num * 2;
  }
  
  function addFive(num) {
    return num + 5;
  }
  function composed(num) {
    const squared = square(num);
    const doubled = double(squared);
    const result = addFive(doubled);
    return result;
  }
  
  const result = composed(5); 
  console.log("Result:",result);
  