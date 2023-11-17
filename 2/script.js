let words = ["apple", "pear", "peach", "apricot", "plum"];

function makeRandomArr(a, b) {
    return Math.random() - 0.5;
}

function displayRndImg(wordArray, imagesCount) {
    let shuffledWords = words.sort(makeRandomArr)
    for (let i = 0; i < shuffledWords.length; i++) {
        document.write('<img id="' + shuffledWords[i] + '" src="images/' + shuffledWords[i] + '-1.png" onclick="checkWord(this)">');
    }
}

function checkWord(imageElement) {
    let word = imageElement.id;
    alert("Значение слова: " + word);
}

displayRndImg(words, words.length);

