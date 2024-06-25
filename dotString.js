// function dotString(string) {
//     const result = [];
//     let k = string.length - 1;
//     const arr = string.split('');
//     let buffer = string;
//     for(let i in arr) {
//         for(let o = 0; o < k; o++) {
//             result.push( buffer.slice(0, (o + 1)) + '.' + buffer.slice( o + 1, buffer.length));
//         }
//         buffer = result[result.length - 1];
//         k--;
//     }
    
//     return result;
// }

// let str = ''


function dotString(string) {
    function generateCombinations(current, remain) {
        if (remain.length === 0) {
            result.push(current);
            return undefined;
        }

        generateCombinations(current + remain[0], remain.slice(1));
        
        if (remain.length > 1) {
            generateCombinations(current + remain[0] + '.', remain.slice(1));
        }
    }

    let result = [];
    generateCombinations('', string);
    return result;
}