// • Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву. 
// Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний масив [1, 2, 3], 
// функція має повернути масив, що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2] і [3, 2, 1].

function generatePermutations(array) {
    let result = [];

    if (array.length <= 1) {
        return [array];
    }

    for (let i = 0; i < array.length; i++) {

        const startElement = array[i];
        const remainingElements = array.slice(0, i).concat(array.slice(i + 1));
        const remainingPermutations = generatePermutations(remainingElements);

        for (let permutation of remainingPermutations) {
            result.push([startElement].concat(permutation));
        }
    }

    return result;
}

const inputArray = [1, 2, 3];
const permutations = generatePermutations(inputArray);
console.log(permutations);
