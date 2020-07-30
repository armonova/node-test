console.log('Hello World');
console.log(sum(1, 2));

const people = [
    {
        name: 'arthur',
        cpf: 123
    },
    {
        name: 'jose',
        cpf: 321
    }
];
console.log(cpfReturn(people));

const words = ['É', 'bom', 'ter', 'atenção', 'que', 'o', 'código', 'que', 'o', 'Node.JS', 'arthur', 'está', 'executando', 'não', 'é', 'atualizado', 'jose', 'automaticamente' ];
console.log(searchWords(people, words));

function sum(num1, num2) {
    return num1 + num2;
}

function cpfReturn(people) {
    return people.map(p => p.cpf);
}

function searchWords(people, words) {
    const names = people.map(p => p.name);
    const indexes = [];
    names.forEach(word => {
        indexes.push( words.findIndex(w => word === w) );
    });
    return indexes;
}