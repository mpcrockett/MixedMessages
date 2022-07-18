const quoteArray = require('/Users/melissacrockett/HardDriveDocs/Projects/MixedMessages/database.js').quoteArray;

const randomIndex = (array) => {
   return Math.floor(Math.random() * array.length);
};

const characters = () => {
    let array = [];
    quoteArray.forEach(entry => { 
        if (!array.includes(entry.character)) {
        array.push(entry.character)
      }
    });
    return array;
  };

const topics = () => {
    let array = [];
    quoteArray.forEach(entry => { 
        if (!array.includes(entry.topic)) {
        array.push(entry.topic)
      }
    });
    return array;
  };

const generateRandomQuote = () => {

   const randomCharacter = characters()[randomIndex(characters())];

   const randomTopic = topics()[randomIndex(topics())];
  
   const matchedQuotes = quoteArray.filter(object => object.character == randomCharacter && object.topic == randomTopic);  
  
   const getRandomQuote = matchedQuotes[randomIndex(matchedQuotes)];
  
   console.log(`${getRandomQuote.quote} - ${getRandomQuote.character}, on the topic of ${getRandomQuote.topic}.`);
};

generateRandomQuote();