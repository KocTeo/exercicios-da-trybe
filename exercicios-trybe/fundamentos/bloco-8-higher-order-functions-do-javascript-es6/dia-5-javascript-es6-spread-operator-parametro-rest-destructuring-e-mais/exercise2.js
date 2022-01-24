const sum = (...numbers) => numbers.reduce((acc, curr) => acc += curr);

console.log(sum(1, 5, 8, 4)); // 18