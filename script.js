let words = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie']

let guessesEle = document.querySelector('#guesses')
let play = document.querySelector('#play')
let check = document.querySelector('#check')
let afterplay = document.querySelector('#afterplay')
let unders = document.querySelector('#unders')
let result = document.querySelector('#result')
let userInp = document.querySelector('#userInp')
let kb1Ele = document.querySelector('#kb1')
let kb2Ele = document.querySelector('#kb2')
let kb3Ele = document.querySelector('#kb3')
let keyboard = document.querySelector('#keyboard')
let keyboardBtns;
let usedChrs = []
let randomWord;
let underWordArr;
let guesses;
let kb1 = ['q','w','e','r','t','y','u','i','o','p']
let kb2 = ['a','s','d','f','g','h','j','k','l']
let kb3 = ['z','x','c','v','b','n','m']

function kbrow(arr,usedChrs){
  //let b = '<button>'++'</button>'
  let kbEle = ''
  for(ch of arr){
    if(usedChrs.includes(ch)){
      kbEle = kbEle + `<button disabled>${ch}</button>`
    }
    else{
      kbEle = kbEle + `<button onclick = "checkGuess('${ch}')">${ch}</button>`
    }
  }
  return kbEle
}

function disableKeyboard(){
  for(btn of keyboardBtns){
    btn.disabled = true
    console.log(btn)
  }
}

function checkGuess(ch){
  usedChrs.push(ch)
  createKeyboard()
  let inp = ch
  userInp.value = ''
  let correctGuess = false
  for(i in randomWord){
    if(randomWord[i] === inp){
      underWordArr[i] = inp
      correctGuess = true
    }
  }
  unders.innerHTML = "<span>" + underWordArr.join('</span><span>') + "</span>"
  if(!underWordArr.includes('_')){
    result.style.color = 'green'
    result.innerText = 'You won!'
    check.disabled = true
    disableKeyboard()
  }
  else if(inp === randomWord){
    unders.innerHTML = "<span>" + inp.split('').join('</span><span>') + "</span>"
    result.style.color = 'green'
    result.innerText = 'You won!'
    check.disabled = true
    disableKeyboard()
  }
  else if(guesses === 1){
    result.style.color = 'red'
    result.innerText = 'You lose!'
    check.disabled = true
    disableKeyboard()
    guessesEle.innerText = 'Guesses remaining: 0'
    unders.innerText = 'The correct word is: ' + randomWord.split('').join(' ')
  }
  else if(correctGuess === false){
    guesses = guesses - 1
    guessesEle.innerText = 'Guesses remaining: ' + guesses
  }
}

function createKeyboard(){
  kb1Ele.innerHTML = kbrow(kb1,usedChrs)
  kb2Ele.innerHTML = kbrow(kb2,usedChrs)
  kb3Ele.innerHTML = kbrow(kb3,usedChrs)
}

play.addEventListener('click',()=>{
  underWordArr = [];
  usedChrs = [];
  createKeyboard()
  keyboardBtns = document.querySelectorAll('#keyboard button')
  check.disabled = false
  result.innerText = ''
  afterplay.style.display = 'block'
  randomWord = words[Math.floor(Math.random()*words.length)]
  guesses = randomWord.length + 3
  guessesEle.innerText = 'Guesses remaining: ' + guesses
  for(x of randomWord){
    underWordArr.push('_')
  }
  unders.innerHTML = "<span>" + underWordArr.join('</span><span>') + "</span>"
})

check.addEventListener('click',()=>{
  let inp = userInp.value
  checkGuess(inp)
})