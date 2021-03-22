console.log("Donnée à trier")
// Ecrire un tableau à trier avec les chiffres
let A = [3, 9, -7, 1, 6, -2, 8, 4, 5]
let B = [3, 9, -7, 1, 6, -2, 8, 4, 5]
const C = [3, 9, -7, 1, 6, -2, 8, 4, 5]

console.log(A)
console.log(B)
console.log(C)


console.log("---------------------------------------------------------------\n Solution 1 de tri")

// Créer une fonction de tri basé sur les fonctions natives JS
function sortNumber(a, b) {
// Faire la soustraction
    return a - b
}

// Imprimer le résultat
console.log(A.sort(sortNumber))

console.log("---------------------------------------------------------------\n Solution 2 de tri")

//Créer une fonction de tri basé sur des boucles
function tri(tableau) {
    // Regarder la valeur de chaque éléments
    for (let i = 0; i < tableau.length; i++) {
        // console.log(tableau[i])

        // Défini un nouveau tableau
        let tab = tableau[i]
        // Défini un index de la position inférieur à i
        let j = i - 1

        // Comparer les valeurs
        // Déplacer le nombre
        // Un boucle qui vérifie la valeur de J
        while (j >= 0 && tableau[j] > tab) {
            // Si J répond à la condition on défini sa nouvelle position

            tableau[j + 1] = tableau[j]
            j--
        }
        //Insère la valeur temporaire à la position
        //correcte dans la partie triée.
        tableau[j + 1] = tab
    }
    return tableau
}

// Imprimer le résultat en appelant la fonction
console.log(tri(B))

// console.log("---------------------------------------------------------------\n Solution 2.bis de tri")
//
// function permutation(table, i, j) {
//     let tmp = table[i]
//     if (table[i] < table[j]) {
//         table[j] = table[i]
//         table[i] = tmp
//     }
// }
//

console.log("---------------------------------------------------------------\n Solution 3 de tri")

let D = [3, 9, -7, 1, 6, -2, 8, 4, 5]

let changed = true
while (changed) {
    changed = false

    for (let i = 0; i < D.length-1; i++) {

        if (D[i] > D[i + 1]) {
            let tmp = D[i]
            D[i + 1] = D[i]
            D[i] = tmp
            changed = true
        }
    }
}


console.log(D)