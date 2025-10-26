// i. Factorial of a number
function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers.";
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return `Factorial of ${n} = ${fact}`;
}

// ii. Fibonacci series up to n
function fibonacci(n) {
  if (n <= 0) return "Enter a positive number.";
  let series = [0, 1];
  for (let i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return `Fibonacci series up to ${n}: ${series.slice(0, n).join(", ")}`;
}

// iii. Prime numbers up to n
function primesUpTo(n) {
  if (n < 2) return "No prime numbers.";
  let primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return `Prime numbers up to ${n}: ${primes.join(", ")}`;
}

// iv. Check palindrome
function isPalindrome(num) {
  let str = num.toString();
  let reversed = str.split("").reverse().join("");
  return str === reversed
    ? `${num} is a Palindrome.`
    : `${num} is not a Palindrome.`;
}
