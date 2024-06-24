function dotString(string) {
    const result = [];
    let k = string.length - 1;
    const arr = string.split('');
    let buffer = string;
    for(let i in arr) {
        for(let o = 0; o < k; o++) {
            result.push( buffer.slice(0, (o + 1)) + '.' + buffer.slice( o + 1, buffer.length));
        }
        buffer = result[result.length - 1];
        k--;
    }
    
    return result;
}

console.log(dotString('te'));
console.log(dotString('tes'));
console.log(dotString('test'));
console.log(dotString('tests'));
console.log(dotString('testst'));
console.log(dotString('teststs'));
