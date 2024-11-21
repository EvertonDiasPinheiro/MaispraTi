/*
objetivo: Calcular a media dos alunos de um professor e verificar se esta acima da media de 
aprovação. Use um loop for in para iterar sobre as propriedades dentro de professor grades
imprima se o professor esta acima da media de aprovação (considerando 3.0 como media).
*/

let professor = {
    name: "Tony Stark",
    subject: "Physics",
    grades: {
        student1: 10.0,
        student2: 6.0,
        student3: 1.0,
    }
}

let sumGrades = 0
let numberOfStundents = 0

for(let student in professor.grades){
    sumGrades += professor.grades[student]
    numberOfStundents++
}

let average = sumGrades / numberOfStundents

console.log(`A nota media da turma é: ${average.toFixed(2)}`)
console.log(average >=6
    ? `${professor.name} esta acima da media.`
    : `${professor.name} esta abaixo da media`
)

/*
   Objetivo: Verificar  e lista livros publicados antes de 2000.
   Use um loop for.... of para itarar sobre o array bibliotaca.
   Imprimi o titulo e o ano dos livros que atendem a essa condiçoes
*/

const library = [
    {title: "O Hobbit", author: "J. R. R. Tolkien", year: 1925},
    {title: "Harry Potter: Prisioneiro de Azkaban", author: "J. K. Rolling", year: 1999},
    {title: "Nárnia", author: "C. S. Lewis", year: 2010},
]

for(let book of library){
    if(book.year < 2000){
        console.log(`O livro ${book.title}, escrito por ${book.author}, foi publicado em ${book.year}`)
    }
}