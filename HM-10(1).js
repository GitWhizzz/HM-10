// • Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі. 
// Числа Фібоначчі визначаються як послідовність, у якій кожне число дорівнює сумі двох попередніх чисел (наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі). 
// Використовуйте рекурсію для обчислення чисел Фібоначчі.

function fibonacci(n) {
    if (n < 0) {
        throw new Error("Fibonacci number cannot be computed for negative index.");
    }

    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)) // 13
