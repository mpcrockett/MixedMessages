const generateRandomQuote = () => {
	const quotes = [
    // Rachel Quotes
    {   
        character: "Rachel",
        topic: "work",
        quote: "I’m gonna go get one of those job things."
    },
    {
        character: "Rachel",
        topic: "love",
        quote: "And hey, just so you know. It’s not that common. It doesn’t happen to every guy. And it is a big deal!"
    },
    {
        character: "Rachel",
        topic: "friendship",
        quote: "I can be very generous, or very stingy!",
    },
    {
        character: "Rachel",
        topic: "travel",
        quote: "What? I didn't have a good time in Greece. Ross abandoned me."
    },
    {
        character: "Rachel",
        topic: "",
        quote: "What? I didn't have a good time in Greece. Ross abandoned me."
    },
    {
        character: "Rachel",
        topic: "wisdom",
        quote: "You do remember what happened to the little girl who tried too much too fast, don't you? She died, Jill."
    },
    // Monica Quotes
    {   
        character: "Monica",
        topic: "work",
        quote: "Welcome to the real world. It sucks. You’re gonna love it."
    },
    {
        character: "Monica",
        topic: "love",
        quote: "Seven! Seven! Seven! Seven! Seven! Seven! Seven! Seven! Seven!"
    },
    {
        character: "Monica",
        topic: "friendship",
        quote: "I mean, all I'm asking for is a little emotion. Is that too much to ask after six years? I mean, what, are Rachel and I not as close as you guys? I mean, did we not have as much fun? Don't I deserve a few tears?",
    },
    {
        character: "Monica",
        topic: "travel",
        quote: "Guys, hurry up. The flight leaves in four hours. It could take time to get a taxi. There could be traffic. The plane could leave early. When we get to London, there could be a line at customs. Come on."
    },
    {
        character: "Monica",
        topic: "wisdom",
        quote: "I need you to be careful and efficient. And remember: If I am harsh with you, it’s only because you’re doing it wrong."
    },
    // Phoebe Quotes
    {   
        character: "Phoebe",
        topic: "work",
        quote: "My medallion number is: Get out of the cab!"
    },
    {
        character: "Phoebe",
        topic: "love",
        quote: "She’s your lobster. C’mon, you guys. It’s a known fact that lobsters fall in love and mate for life. You can actually see old lobster couples walking around their tank, you know, holding claws"
    },
    {
        character: "Phoebe",
        topic: "friendship",
        quote: "You guys, um, I know that this really doesn't have anything to do with me, but, um, I love you guys too!",
    },
    {
        character: "Phoebe",
        topic: "travel",
        quote: "Of course you can take a couple days off, because this trip includes me."
    },
    {
        character: "Phoebe",
        topic: "wisdom",
        quote: "'Do you have a plan?' 'I don’t even have a pla—'"
    },
    // Joey Quotes
    {   
        character: "Joey",
        topic: "work",
        quote: " I'm his butt double, okay? I play Al Pacino's butt. All right? He goes into the shower, and then... I'm his butt."
    },
    {
        character: "Joey",
        topic: "love",
        quote: "Well, the reason I think Monica and Chandler are so great is because they were friends first. So I asked myself, who are my friends? You and Phoebe. I saw you first, so..."
    },
    {
        character: "Joey",
        topic: "friendship",
        quote: "Is this friendship? I think so. Check it out. We're bracelet buddies!",
    },
    {
        character: "Joey",
        topic: "travel",
        quote: "It's all London, baby! Here we go!"
    },
    {
        character: "Joey",
        topic: "wisdom",
        quote: "A moo point?” “You know, like a cow’s opinion. It doesn’t matter. It’s moo."
    },
    // Ross Quotes
    {   
        character: "Ross",
        topic: "work",
        quote: "Now, I look around this cafeteria, and you know what I see? I see division. Division between people in white coats and people in blue blazers. And I ask myself, 'My God, why?''."
    },
    {
        character: "Ross",
        topic: "love",
        quote: "Ah, love. L-O-V-E, love. L is for life. And what is life without love?"
    },
    {
        character: "Ross",
        topic: "friendship",
        quote: "I thought you were my best friend, this is my sister! My best friend and my sister! I cannot believe this!",
    },
    {
        character: "Ross",
        topic: "travel",
        quote: "I gotta go. There's a deer just outside eating fruit from the orchard!"
    },
    {
        character: "Ross",
        topic: "wisdom",
        quote: "Pivot! Pivot! Pivot!"
    },
    // Chandler Quotes
    {   
        character: "Chandler",
        topic: "work",
        quote: "I just don't want to be one of those guys who's in his office until 1 o'clock at night worrying about the WENUS."
    },
    {
        character: "Chandler",
        topic: "love",
        quote: "I can tell her how much I've been thinking of her. That I haven't stopped thinking about her since the moment we met. That I'm so fantastically over the top, want-to-slit-my-own-throat in love with her that for every minute of every hour of every day I can't believe my own damn bad luck that you met her first!"
    },
    {
        character: "Chandler",
        topic: "friendship",
        quote: "Of Course, we'd have an apartment over the garage where Joey could grow old.",
    },
    {
        character: "Chandler",
        topic: "travel",
        quote: "Well, then I guess I'm going to Yemen. I'm going to Yemen. (to an elderly woman in line) When we get to Yemen, can I stay with you?"
    },
    {
        character: "Chandler",
        topic: "wisdom",
        quote: "Hi, I’m Chandler. I make jokes when I’m uncomfortable."
    },
    
    ];
	
	const char = ["Rachel", "Joey", "Chandler", "Phoebe", "Monica", "Ross"];
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