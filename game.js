const letters = 
[
    ['C','M','O','C','H','I','L','A','K'],
    ['Â','I','V','S','W','U','L','Y','E'],
    ['T','J','N','U','J','A','Ó','X','M'],
    ['A','A','R','T','M','Ó','L','Ê','Q'],
    ['M','Q','T','I','O','F','G','C','À'],
    ['A','U','P','A','R','T','H','U','R'],
    ['N','E','N','S','I','H','A','T','T'],
    ['C','T','P','M','L','Â','Ó','I','O'],
    ['O','A','Ô','F','T','C','Ô','B','A']
];

const words = ['TAMANCO', 'UTI', 'ARTHUR']
// const words = ['SAIA', 'MALA', 'KILT', 'TAMANCO', 'CINTO']
// ordenando o vetor
words.sort(function(a, b){
    return a.length - b.length;
  });

let findWords = []
searchLines(letters, words)
searchCollums(letters, words)
console.log(findWords)




function searchLines(letters, words) {
    for (let c = 0; c < letters[0].length; c++) { // iterando colunas
        for (let l = 0; l < letters.length; l++) { // iterando linhas
            let wordFind = undefined
            for (let w = 0; w < words.length; w++) { // iterando palavras
                if (words[w][0] === letters[l][c]) {
                    findWords.push({
                        word: words[w],
                        start: {collum: c, line: l},
                        end: {}
                    })          
                    for (let i = 0; i < words[w].length; i++) {
                        if (letters.length - 1 >= (l + i)) {
                            if (words[w][i] !== letters[l + i][c]) {
                                const index = findWords.findIndex((fw) => fw.word === words[w])
                                findWords.splice(index, 1);
                                break;
                            }
                            if (i === words[w].length - 1) { // achou toda a palavra
                                const index = findWords.findIndex((fw) => fw.word === words[w])
                                findWords[index].end = { collum: c, line: l + i }
                                wordFind = words[w];
                            }
                        } else {
                            const index = findWords.findIndex((fw) => fw.word === words[w])
                            findWords.splice(index, 1);
                            break;
                        }
                    }
                }
            }
            if (wordFind) {
                const index = words.findIndex(w => w === wordFind)
                words.splice(index, 1);
            }

        }
    }
}

function searchCollums(letters, words) {
    for (let l = 0; l < letters.length; l++) { // iterando colunas
        for (let c = 0; c < letters[l].length; c++) { // iterando linhas
            let wordFind = undefined
            for (let w = 0; w < words.length; w++) { // iterando palavras
                if (words[w][0] === letters[l][c]) {
                    findWords.push({
                        word: words[w],
                        start: {collum: c, line: l},
                        end: {}
                    })          
                    for (let i = 0; i < words[w].length; i++) {
                        if (letters[l].length - 1 >= (c + i)) {
                            if (words[w][i] !== letters[l][c + i]) {
                                const index = findWords.findIndex((fw) => fw.word === words[w])
                                findWords.splice(index, 1);
                                break;
                            }
                            if (i === words[w].length - 1) { // achou toda a palavra
                                const index = findWords.findIndex((fw) => fw.word === words[w])
                                findWords[index].end = { collum: c + i, line: l }
                                wordFind = words[w];
                            }
                        } else {
                            const index = findWords.findIndex((fw) => fw.word === words[w])
                            findWords.splice(index, 1);
                            break;
                        }
                    }
                }
            }
            if (wordFind) {
                const index = words.findIndex(w => w === wordFind)
                words.splice(index, 1);
            }

        }
    }
}