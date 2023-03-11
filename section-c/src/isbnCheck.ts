// Converts a given 'number string' into a number
const covertStrToNum = (str: string) => {
    return str.split('').map(char => parseInt(char));
}

// Calculates the product sum of the ISBN-13 number
const getIsbn13Sum = (isbn: string) => {
    let isbnNum: Array<number> = covertStrToNum(isbn);

    return isbnNum.reduce((a, b, i)=>{
        return a += b * (i % 2 === 0 ? 1 : 3);
    }, 0) 
}

// Calculates the product sum of the ISBN-10 number
const getIsbn10Sum = (isbn: string) => {

    let isbnNum: Array<number> = covertStrToNum(isbn);

    return isbnNum.reduce((a, b, i)=>{
        return a += b * (isbn.length - i);
    },0) 
}

// Validates the given ISBN number
export const isbn13 = (isbn: string) => {
    let isbnProductSum: number;
    let strLength: number = isbn.length

    /** If the string is of length == 13
     * then it finds the product sum of the ISBN-13 number
     * Checks if isbnProductSum is divisible by 10
     * If yes, returns 'Valid'
     * If no, returns 'Invalid'
     * */
    if(strLength === 13){

        isbnProductSum = getIsbn13Sum(isbn);

        return isbnProductSum % 10 === 0 ? 'Valid' : 'Invalid';

    }
    /** If the string is of length == 10
     * then it finds the product sum (isbn13ProductSum) of the ISBN-10 number using only the first 9 digits
     * Then using isbn13ProductSum we subtract the remainder of isbn13ProductSum % 10 from 10 to get the check digit
     * Creating a new isbn of length 13 on line 56 using the check digit we calculated.
     * Then check if it is a valid ISBN-13
     * If yes, returns the new ISBN-13
     * If no, returns 'Invalid'
     * */
    else if(strLength === 10) {
        isbnProductSum = getIsbn10Sum(isbn);

        if(isbnProductSum % 11 === 0) {
            let isbn13ProductSum: number = getIsbn13Sum(`978${isbn.substring(0,9)}`);
            let checkDigit: number = 10 - (isbn13ProductSum%10);
            let newIsbn: string = `978${isbn.substring(0,9)}${checkDigit}`;
            let isValid: string = isbn13(newIsbn) === 'Valid' ? newIsbn : 'Invalid';

            return isValid;
        }else{
            return 'Invalid'
        }
    }

    return 'Invalid';

}

// console.log(isbn13("9780316066525"));
// console.log(isbn13("0330301824"));
// console.log(isbn13("0316066524"));
