module.exports = function toReadable(number) {
    let ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let res = "";
    if (number == 0) {
        return ones[0];
    }

    if (number >= 100) {
        let i = Math.floor(number / 100);
        res += ones[i] + " hundred";
        number = number % 100;
    }
    if (number != 20 && Math.floor(number / 10) > 1) {
        if (res.length != 0) {
            res += " ";
        }
        let i = Math.floor(number / 10);
        res += tens[i - 2];
        number = number % 10;
    }

    if (number == 0) {
        return res;
    }

    if (res.length != 0) {
        res += " ";
    }
    res += ones[number];
    return res;
};
