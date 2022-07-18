const quoteArray = require('/Users/melissacrockett/HardDriveDocs/Projects/MixedMessages/database.js').quoteArray;
// helper functions
const randomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

const valueArray = (x) => {
  let array = [];
  quoteArray.forEach(entry => { 
    if (!array.includes(entry[x])) {
     array.push(entry[x])
    }
  });
  return array;
};

const characterArray = valueArray("character");

const topicArray = valueArray("topic");

const getRandomQuote = () => {
  const randomCharacter = characterArray[randomIndex(characterArray)];
  const randomTopic = topicArray[randomIndex(topicArray)]; 
  const matchedQuotes = quoteArray.filter(object => object.character == randomCharacter && object.topic == randomTopic);  
  const randomizedQuote = matchedQuotes[randomIndex(matchedQuotes)];
  console.log(`${randomizedQuote.quote} - ${randomizedQuote.character}, on the topic of ${randomizedQuote.topic}.`);
};

getRandomQuote();