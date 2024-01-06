// • Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, яке читається зліва направо і справа наліво однаково. 
// Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним. 
// Але. Паліндром можна отримати як результат операцій над іншими числами. Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами,
// але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром. 
// Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох. 
// Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці.... 

// Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром, і властивість steps — це число викликів до знаходження паліндрома. 
// Для того, щоб перевірити себе використовуйте число 196. Це так зване Lychrel number — число яке немає поліндрому

function isPalindrome(number) {
    const str = number.toString();
    return str === str.split('').reverse().join('');
}

function findPalindrome(number, maxSteps, currentStep = 0) {
    if (currentStep >= maxSteps) {
        return { result: number, steps: currentStep, isPalindrome: false };
    }

    if (isPalindrome(number)) {
        return { result: number, steps: currentStep, isPalindrome: true };
    }

    const reversedNumber = parseInt(number.toString().split('').reverse().join(''), 10);
    return findPalindrome(number + reversedNumber, maxSteps, currentStep + 1);
}

const maxSteps = 100; // limit 
const result = findPalindrome(96, maxSteps);

console.log(result); // { result: 4884, steps: 4, isPalindrome: true }
