const Add = (numbers) => {
    if (numbers == "0") return 0;

    let splitQuote = /,|\n/

    if (numbers.startsWith("//")) {
        const items = numbers.split("\n");
        splitQuote = new RegExp(items[0][2])
        numbers = items[1]
    }

    let nums = numbers.split(splitQuote).map(Number)

    const negaiveNumbers = nums.filter(element => element < 0)
    console.log("negaiveNumbersn", negaiveNumbers)
    if (negaiveNumbers.length > 0) throw new Error('Negatives not allowed: ' + negaiveNumbers.join(", "))

    return nums.reduce((sum, num) => sum + num, 0);
}

export default Add