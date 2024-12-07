function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
  }
  
  function countPrimes(array) {
    return array.filter(isPrime).length;
  }
  
  function runJS() {
    const input = document.getElementById("num1").value;
    const size = parseInt(input, 10);
  
    if (isNaN(size) || size <= 0) {
      document.querySelector("#output").innerHTML = "Resultado: Informe um número válido!";
      return;
    }
  
    const randomArray = generateRandomArray(size);
    const primeCount = countPrimes(randomArray);
  
    document.querySelector("#output").innerHTML = `Resultado: O array gerado foi [${randomArray.join(", ")}]. Números primos: ${primeCount}`;
  }
  
  console.log("JS Testing");
  