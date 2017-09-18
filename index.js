// Create a trie and load words from word array into it
let words = getWords();
let dictionary = new Dictionary("abcdefghijklmnopqrstuvwxyz'");
let count = 0;

for (word in words) {
    dictionary.put(words[word], count++);
}

// takes user input and generates all possible 
// permutations of all possible combinations.
function countdown(letters) {
    let combinations = combine(letters);
    let permutations = [];

    combinations.map(function (combination) {
        let perms = new Permutations(combination).generate();
        premutations = perms.reduce(function (coll, item) {
            coll.push(item);
            return coll;
        }, permutations);
    });

    printToScreen(permutations);
}

// check if word is in dictionary and print out if true
function printToScreen(array) {
    array.forEach(function (element) {
        if (dictionary.contains(element)) {
            console.log(element)
        }
    });
}