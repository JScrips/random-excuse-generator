const generateButton = document.querySelector(".generateButton");
const excuseText = document.querySelector(".excuseText");

generateButton.addEventListener("click", generateExcuse);

const excuseIntroArray = [
  "Sorry, I can't come",
  "Please, forgive my absence",
  "This is going to sound crazy, but",
  "Get this:",
  "I can't go because",
  "I know you're going to hate me, but",
  "I was minding my own business and boom!",
  "I feel terrible, but",
  "I regretfully cannot attend,",
  "This is going to sound like an excuse, but",
];

const excuseScapeGoatArray = [
  "my nephew",
  "the ghost of Hitler",
  "the Pope",
  "my ex",
  "a high school marching bad",
  "Dan Rather",
  "a sad clown",
  "the kid from Air Bud",
  "a professional cricket team",
  "my Tinder date",
];

const excuseDelayArray = [
  "just shit the bed",
  "died in front of me",
  "won't stop telling me knock knock jokes",
  "is having a nervous breakdown",
  "gave me syphilis",
  "poured lemonade in my gas tank",
  "stabbed me",
  "found my box of human teeth",
  "stole my bike",
  "posted my nudes on instagram",
];

function randomIndex(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function generateExcuse() {
  let intro = randomIndex(excuseIntroArray);
  let scapegoat = randomIndex(excuseScapeGoatArray);
  let delay = randomIndex(excuseDelayArray);

  excuseText.innerHTML = intro + " " + scapegoat + " " + delay + " " + ".";
}
