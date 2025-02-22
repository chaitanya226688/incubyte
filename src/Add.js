const Add = (numbers) => {
    if (numbers == "0") return 0;

    let splitQuote = /,|\n/

    if (numbers.startsWith("//")) {
        const splitQuotesMatches = numbers.match(/^\/\/(\[.*?\])+\n/)
        const items = numbers.split("\n");
        if (splitQuotesMatches) {
            splitQuote = splitQuotesMatches[1].replace("[", "").replace(']', "")
            console.log(splitQuote)
        } else {
            splitQuote = new RegExp(items[0][2])
        }
        numbers = items[1]
    }

    let nums = numbers.split(splitQuote).map(Number).filter(element => element < 1001)

    const negaiveNumbers = nums.filter(element => element < 0)
    if (negaiveNumbers.length > 0) throw new Error('Negatives not allowed: ' + negaiveNumbers.join(", "))

    return nums.reduce((sum, num) => sum + num, 0);
}

export default Add