const sentences = [
"As the rental car rolled to a stop on the dark road, her fear increased by the moment.",
"He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.",
"He found a leprechaun in his walnut shell.",
"The ice-cream trucks bring back bad memories for all of us.",
"Today is the day I'll finally know what brick tastes like.",
"I love eating toasted cheese and tuna sandwiches.",
"He was the type of guy who liked Christmas lights on his house in the middle of July.",
"The hummingbird's wings blurred while it eagerly sipped the sugar water from the feeder.",
"They got there early, and they got really good seats.",
"The Guinea fowl flies through the air with all the grace of a turtle.",
"Today I dressed my unicorn in preparation for the race.",
"We will not allow you to bring your pet armadillo along.",
"Poison ivy grew through the fence they said was impenetrable.",
"She borrowed the book from him many years ago and hasn't yet returned it.",
"Facing his greatest fear, he ate his first marshmallow.",
"Twin 4-month-olds slept in the shade of the palm tree while the mother tanned in the sun.",
"As he looked out the window, he saw a clown walk by.",
"The anaconda was the greatest criminal mastermind in this part of the neighborhood.",
"The tumbleweed refused to tumble but was more than willing to prance.",
"Most shark attacks occur about 10 feet from the beach since that's where the people are.",
"He turned in the research paper on Friday; otherwise, he would have not passed the class.",
"Buried deep in the snow, he hoped his batteries were fresh in his avalanche beacon.",
"She tilted her head back and let whip cream stream into her mouth while taking a bath.",
"When she didn’t like a guy who was trying to pick her up, she started using sign language.",
"The trick to getting kids to eat anything is to put catchup on it.",
"Red is greener than purple, for sure.",
"He found the end of the rainbow and was surprised at what he found there.",
"The thick foliage and intertwined vines made the hike nearly impossible.",
"She found his complete dullness interesting.",
"As the asteroid hurtled toward earth, Becky was upset her dentist appointment had been canceled.",
"He loved eating his bananas in hot dog buns.",
"There's an art to getting your way, and spitting olive pits across the table isn't it.",
"It must be easy to commit crimes as a snake because you don't have to worry about leaving fingerprints.",
"He found his art never progressed when he literally used his sweat and tears.",
"I'd rather be a bird than a fish.",
"Dan took the deep dive down the rabbit hole.",
"I thought red would have felt warmer in summer but I didn't think about the equator.",
"The external scars tell only part of the story.",
"Edith could decide if she should paint her teeth or brush her nails.",
"He fumbled in the darkness looking for the light switch, but when he finally found it there was someone already there.",
"The father died during childbirth.",
"He walked into the basement with the horror movie from the night before playing in his head.",
"He was willing to find the depths of the rabbit hole in order to be with her.",
"He had reached the point where he was paranoid about being paranoid.",
"Blue sounded too cold at the time and yet it seemed to work for gin.",
"It didn't take long for Gary to detect the robbers were amateurs.",
"It took him a month to finish the meal.",
"He created a pig burger out of beef.",
"They looked up at the sky and saw a million stars.",
"I purchased a baby clown from the Russian terrorist black market.",
"I purchased a baby clown from the Russian terrorist black market." , 
"Short stories are a great way to get a quick dose of entertainment.",
"Mini skirts are perfect for those who prefer short lengths.",  
"Short haircuts can be low-maintenance and stylish.",  
"Short films often pack a powerful punch in a small amount of time.", 
"Short vacations can be just as refreshing as long ones.", 
"Short phone calls can be just as meaningful as long conversations.", 
"Short poems can convey deep emotions in just a few lines.",  
"Short trips to nearby places can be a quick escape from daily routine.", 
"Short bursts of exercise throughout the day can be beneficial for your health.", 
"Short work meetings can be more productive than long, drawn-out ones.", 
"The sun is shining brightly in the sky.", 
"I love listening to music while going for a walk.",
"My favorite color is blue because it reminds me of the ocean.",
"Cats are such fascinating creatures with their playful antics.", 
"I enjoy cooking and trying out new recipes in the kitchen.", 
"I can't wait to go on vacation and explore new destinations.",  
"Reading a good book is a great way to relax after a long day.",  
"Spending time with family and friends brings me so much joy.",  
"I feel refreshed after a good night's sleep.",  
"Taking a leisurely bike ride is a fun way to exercise.",  
"The sound of rain tapping on the window is very soothing.",  
"I like to watch the sunset and admire the beautiful colors in the sky.",  
"Learning new things keeps life interesting and exciting.",  
"Taking a deep breath of fresh air is invigorating.",  
"I feel grateful for all the blessings in my life.", 
"Planting flowers in the garden is therapeutic for me.",  
"Watching a funny movie always makes me laugh.",  
"Listening to the birds chirping in the morning is a peaceful way to start the day.", 
"Writing in a journal helps me process my thoughts and emotions.",  
"I enjoy going for a hike and immersing myself in nature." , 
"I find solace in practicing meditation and mindfulness.",  
"Playing a musical instrument is a great way to express creativity." , 
"Appreciating the little things in life brings me happiness.",  
"I love the smell of freshly baked cookies in the oven." , 
"Traveling to new places broadens my perspective on the world.",  
"Exercise is important for maintaining a healthy body and mind."  ,
"Practicing gratitude helps me focus on the positive aspects of life." , 
"Spending time outdoors energizes me and lifts my spirits." , 
"I like to challenge myself with new goals and aspirations." , 
"A hot cup of tea is comforting on a chilly day." , 
"Today is a beautiful day." , 
"I love spending time with my family.",  
"The cat is sleeping peacefully in the sun." , 
"Reading a book is a great way to relax.",  
"I am grateful for all the blessings in my life.",  
"Smiling is contagious.",  
"Please remember to be kind to everyone you meet." , 
"Cooking a delicious meal brings me joy.",  
"Listening to music always puts me in a good mood."  ,
"My favorite color is blue because it reminds me of the ocean.",
"The secret ingredient to his wonderful life was crime.",
"A dead duck doesn't fly backward.",
"He decided water-skiing on a frozen lake wasn’t a good idea.",
"The pigs were insulted that they were named hamburgers.",
"Written warnings in instruction manuals are worthless since rabbits can't read.",
"Pink horses galloped across the sea.",
"He set out for a short walk, but now all he could see were mangroves and water were for miles.",
"He was surprised that his immense laziness was inspirational to others.",
"She was too busy always talking about what she wanted to do to actually do any of it.",
"I only enjoy window shopping when the windows are transparent.",
"He never understood why what, when, and where left out who.",
"Don't step on the broken glass.",
"Blue sounded too cold at the time and yet it seemed to work for gin.",
"The tears of a clown make my lipstick run, but my shower cap is still intact.",
"There is no better feeling than staring at a wall with closed eyes.",
"He had concluded that pigs must be able to fly in Hog Heaven.",
"She used her own hair in the soup to give it more flavor.",
"He hated that he loved what she hated about hate.",
"I’m a living furnace.",
"He learned the hardest lesson of his life and had the scars, both physical and mental, to prove it.",
"Some bathing suits just shouldn’t be worn by some people.",
"The swirled lollipop had issues with the pop rock candy.",
"He didn't heed the warning and it had turned out surprisingly well.",
"After exploring the abandoned building, he started to believe in ghosts.",
"Barking dogs and screaming toddlers have the unique ability to turn friendly neighbors into cranky enemies.",
"The sudden rainstorm washed crocodiles into the ocean.",
"The hawk didn’t understand why the ground squirrels didn’t want to be his friend.",
"There was no ice cream in the freezer, nor did they have money to go to the store.",
"On a scale from one to ten, what's your favorite flavor of random grammar?",
"Her scream silenced the rowdy teenagers.",
"Jason didn’t understand why his parents wouldn’t let him sell his little sister at the garage sale.",
"She was too short to see over the fence.",
"The old rusted farm equipment surrounded the house predicting its demise.",
"Jim liked driving around town with his hazard lights on.",
"I may struggle with geography, but I'm sure I'm somewhere around here.",
"She felt that chill that makes the hairs on the back of your neck when he walked into the room.",
"Mary plays the piano.",
"They looked up at the sky and saw a million stars.",
"The manager of the fruit stand always sat and only sold vegetables.",
"He ended up burning his fingers poking someone else's fire.",
"Doris enjoyed tapping her nails on the table to annoy everyone.",
"I'd rather be a bird than a fish.",
"You'll see the rainbow bridge after it rains cats and dogs.",
"Never underestimate the willingness of the greedy to throw you under the bus.",
"Writing a list of random sentences is harder than I initially thought it would be.",
"Don't piss in my garden and tell me you're trying to help my plants grow.",
"There was coal in his stocking and he was thrilled.",
"A song can make or ruin a person’s day if they let it get to them.",
"I met an interesting turtle while the song on the radio blasted away.",
"Please tell me you don't work in a morgue."
];


let totalSentences = 0; //
let totalWords = 0;
let sessionsSentences = 0;
let sessionsWords = 0;
let currentIndex = 0; //Tracks the index of letter typed.

function typeWriter(elementId, sentence){
    const display = document.getElementById(elementId);
    display.textContent = '';

    let index = 0;

    function type(){
        if(index < sentence.length){
            display.innerHTML += sentence.charAt(index); //adds sentences by one letter at a time
            index++;
            setTimeout(type, 20); //adjust's timeout for letter
        }
    }

    type(); //starts typing effect
}

function getRandomSentence(){
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function displayNewSentence(){
    currentSentence = getRandomSentence();
    document.getElementById('sentence-display').textContent = currentSentence;
    document.getElementById('textArea').value = ''; //clears text area
    currentIndex = 0;
    colorMatch();
    typeWriter("sentence-display", currentSentence); //calls the "typewriter" function
}

//Function for color matching to words typed

function colorMatch(){
    const sentenceDiv = document.getElementById('sentence-display');

    sentenceDiv.innerHTML = ''; //clears previous content before adding new spans.

    const userInput = document.getElementById('textArea').value;

    for(let i = 0; i < currentSentence.length; i++){ //checks the letter in the setnece displyaed
        const char = currentSentence[i];
        const span = document.createElement('span'); //creates span for CSS style

        if(i < userInput.length){ //If the current letter typed matches letter on display, the color class is added.
            if(userInput[i] === char){
                span.className = 'match';
            } else {
                span.className = 'no-match';
            }
            span.textContent = char;
        } else {
            span.textContent = char;
        }
        span.textContent = char;
        sentenceDiv.appendChild(span); // Adds the color-span to the display(sentenceDiv)
    }
}

function calculateResults(){
    console.log("Calculating results...");

    const remainingText = document.getElementById('textArea').value.trim();
    
    if (remainingText) {
        const remainingWords = remainingText.split(/\s+/).filter(Boolean).length; // Count remaining words (problem where words werent being counted until after sentenace was done)
        sessionsWords += remainingWords; // Add remaining words to the session count
    }
    
    totalSentences += sessionsSentences;
    totalWords += sessionsWords;

    document.getElementById('textArea').value = '';
    document.getElementById('results');
    
    results.innerHTML = `You typed <span style="color:#09ff00;">${totalSentences}</span> sentences and <span style="color:#09ff00;">${totalWords}</span> words.`;
    
}

function startGame(){
    const startButton = document.getElementById('startButton');
    this.textContent = '';
    startButton.disabled = true; //disables the button
    startButton.style.cursor = 'not-allowed';
    restart.disabled = true;
    restart.style.display = 'none';

    let countdown;
    let timeLeft = 60; //time on timer.
    
    document.getElementById('countdown').textContent = timeLeft;

    displayNewSentence(); //displays new sentence

    countdown = setInterval(() => { //starts countdown and subtracts number by 1.
        timeLeft--;
        document.getElementById('countdown').textContent = timeLeft;

        if(timeLeft <= 0){ //once the number is less than or equal to 0, the following function happens.
            clearInterval(countdown);
            document.getElementById('countdown').textContent = "Time's up!!!";
            document.getElementById('sentence-display').textContent = '';
            textArea.disabled = true;

            calculateResults();
            document.getElementById('restart').disabled = false;
            restart.style.display = 'inline';
        }
    }, 1000);
}

document.getElementById('startButton').addEventListener('click', startGame);

document.getElementById('restart').addEventListener('click', function(){
    sessionsSentences = 0;
    sessionsWords = 0;
    totalSentences = 0;
    totalWords = 0;
    document.getElementById('textArea').disabled = false; // Enable the text area
    document.getElementById('results').innerHTML = ''; // Clear results
    document.getElementById('countdown').textContent = ''; // Clear countdown display
    document.getElementById('sentence-display').textContent = ''; // Clear sentence display
    document.getElementById('textArea').value = ''; // Clear text area
    this.disabled = true;
    this.style.display = 'inline';

    startGame();
});


document.getElementById('textArea').addEventListener('keyup', function (event){

    const userInput = document.getElementById('textArea').value.trim(); //user input means whatever the user puts into textArea

   if(currentIndex < currentSentence.length){
    if(event.key === currentSentence[currentIndex]){
        console.log('match:', event.key);
    } else{
        console.log('no match:', event.key);
    }
   }

   //Increments the index if the key is a valid character (not Enter or any special keys)
   if(event.key.length === 1){ // length of 1 means its a character key.
    currentIndex++;
   }
   //Statement used to give backspace usability.
   if(event.key === 'Backspace'){
    currentIndex = Math.max(0, currentIndex - 1); // Decrements index, not below 0
   } else if(event.key.length === 1){
    currentIndex++;
   }

   colorMatch();

    if(event.key === 'Enter' || /[!?]$/.test(userInput)){
        event.preventDefault(); //prevents default behavior
            
        
        if(userInput.trim() === currentSentence){
                sessionsSentences++; //increments total sentence count.
                sessionsWords += userInput.split(/\s+/).filter(Boolean).length; // Increments word count
                displayNewSentence(); //generates a new sentence.
                currentIndex = 0; //Resets index for new sentence
        }
    }
});

