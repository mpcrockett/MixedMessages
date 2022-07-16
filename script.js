const quotes = require(quotes.js);

const generateRandomQuote = () => {
	
	const characters = ["Rachel", "Joey", "Chandler", "Phoebe", "Monica", "Ross"];
    const topics = ["friendship", "love", "travel", "work", "wisdom"];

	const randomIndex = (array) => {
  	return Math.floor(Math.random() * array.length);
  };
  
    const randomChar = char[randomIndex(char)];

    const randomTopic = topics[randomIndex(topics)];
  
    const matchedQuotes = quotes.filter(object => object.character == randomChar && object.topic == randomTopic);  
  
    const getRandomQuote = matchedQuotes[randomIndex(matchedQuotes)];
  
    console.log(`${getRandomQuote.quote} - ${getRandomQuote.character}, on the topic of ${getRandomQuote.topic}.`);
};

generateRandomQuote();