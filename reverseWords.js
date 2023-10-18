function reverseWordsCharacters(sentence) {
    let reversedSentence = '';
    let word = '';
    let isInsideWord = false;

    //iterating on sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        //condition to check valid index of word
        if (char === ' ' || i === sentence.length - 1) {
            if (isInsideWord) {
                if (i === sentence.length - 1) {
                    word += char;
                }

                //function call to reverse characters of individual word
                const reversedWord = reverseString(word);

                reversedSentence += reversedWord;

                //appending the space at the end of every word after reversing 
                    reversedSentence += ' ';
               

                word = '';
                isInsideWord = false;
            }
        } else {
            word += char;
            isInsideWord = true;
        }
    }

    return reversedSentence.trim();
}

//function to reverse a word
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// sentence to be reverse
const inputSentence = "This is a sunny day";

//function call to reverse characters in every words of sentence
const reversedSentence = reverseWordsCharacters(inputSentence);
console.log(inputSentence+" "+"->"+" "+reversedSentence);