/**
 * Beregner summen af to tal.
 * @param {number} a - Det første tal.
 * @param {number} b - Det andet tal.
 * @returns {number} Summen af de to tal.
 */
export function calculateSum(a, b) {
    // Skriv din kode her:
    return a + b;


}

/**
 * Kontrollerer om et tal er et primtal.
 * @param {number} number - Tallet der skal kontrolleres.
 * @returns {boolean} True hvis tallet er et primtal, ellers false.
 */
export function checkIfPrime(num) {
    // Skriv din kode her:
    if (num <= 1) return false;
    if (num % 2 == 0 && num > 2) return false;
    const s = Math.sqrt(num);
    for (let i = 3; i <= s; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}




/**
 * Finder det største tal i en liste.
 * @param {number[]} array - Listen af tal.
 * @returns {number} Det største tal i listen.
 */
export function findMaximumNumber(array) {
    // Skriv din kode her:
    return Math.max(...array);
}

/**
 * Fjerner dubletter fra en liste.
 * @param {any[]} array - Listen der skal renses for dubletter.
 * @returns {any[]} Listen uden dubletter.
 */
export function removeDuplicateElements(array) {
    // Skriv din kode her:
    return [...new Set(array)]
}