const quoteArray = require('/Users/melissacrockett/HardDriveDocs/Projects/MixedMessages/database.js').quoteArray;

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

const generateRandomQuote = () => {

   const randomCharacter = valueArray("character")[randomIndex(valueArray("character"))];

   const randomTopic = valueArray("topic")[randomIndex(valueArray("topic"))];
  
   const matchedQuotes = quoteArray.filter(object => object.character == randomCharacter && object.topic == randomTopic);  
  
   const getRandomQuote = matchedQuotes[randomIndex(matchedQuotes)];
  
   console.log(`${getRandomQuote.quote} - ${getRandomQuote.character}, on the topic of ${getRandomQuote.topic}.`);
};

generateRandomQuote();