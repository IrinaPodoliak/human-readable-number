module.exports = function toReadable (num) {
    let ones = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine');
    let teens = new Array('ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    let tens = new Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
    let result = '';
    var hundred = 'hundred';
    var numString = num.toString();
    if (num == 0) {
        return 'zero';
    }
    if (num < 10) {
        result = ones[num];
        return result;
    }
    if ((num>9) && (num<20)) {
        result = teens[num-10];
        return result;
    }
    if ((numString.length == 2) && (num % 10 == 0) && (num>19)) {
        result = tens[num/10];
        return result;
    }
    if ((numString.length == 2) && (num>20)) {
        result = tens[Math.floor(num / 10)] + ' ' + ones[num % 10];
        return result;
    }
    if (numString.length == 3 && numString[2] == 0 && numString[1] == 0) {
        result = ones[parseInt(numString.charAt(0))] + ' ' + hundred;
        return result;
    }
    if (numString.length == 3 && numString[1] == 1) {
        result = ones[parseInt(numString.charAt(0))] + ' ' + hundred +  ' ' + teens[parseInt(numString.charAt(2))];
        return result;
    }
    if (numString.length == 3 && numString[2] == 0) {
        result = ones[parseInt(numString.charAt(0))] + ' ' + hundred +  ' ' + tens[parseInt(numString.charAt(1))];
        return result;
    }
    if (numString.length == 3 && numString[1] == 0) {
        result = ones[parseInt(numString.charAt(0))] + ' ' + hundred + ' ' + ones[parseInt(numString.charAt(2))];
        return result;
    }
    if (numString.length == 3) {
        result = ones[parseInt(numString.charAt(0))] + ' ' + hundred + ' ' + tens[parseInt(numString.charAt(1))] + ' ' + ones[parseInt(numString.charAt(2))];
        return result;
    }
    
    
}   