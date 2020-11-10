
const movies = [
    'Donnie Darko',
    'Clube da Luta',
    'Laranja Mecânica',
    'A História Sem Fim',
    '2001 - Uma Odisséia no Espaço',    
    'Árvore da Vida',
]

console.log(
    movies.sort(Intl.Collator().compare)    
    //movies.sort()
)