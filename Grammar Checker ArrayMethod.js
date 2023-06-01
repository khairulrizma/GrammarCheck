let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.'

let storyWords = story.split(' ')
let unnecessaryWord = 'literally'
let misspelledWord = 'beautifull'
let badWord = 'freaking'
let count = 0

//filter word literally
storyWords = storyWords.filter((word) => {
  return word != unnecessaryWord
})

//Replacing Word
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return 'beautiful'
  } else {
    return word
  }
})

//findIndex()
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord
})
console.log(`Index of badwords located at index ${badWordIndex}`)

//access storywords and replace badword with 'really'
storyWords[78] = 'really'

//count word
storyWords.forEach((word) => {
  word += count++ //got 181 words in string
})
console.log(`The number of sentence are : ${count}`)

//ensure word in story is 10 character or less using .every method
const lengthCheck = storyWords.every((word) => {
  return word.length <= 10
})
console.log(lengthCheck)

//check for word that are length more than 10
const findLongWord = storyWords.filter((word) => {
  return word.length > 10
})
console.log(findLongWord)

const longIndex = storyWords.findIndex((word) => {
  return word === 'breathtaking'
})
console.log(longIndex)

storyWords[111] = 'stunning'

const newlengthCheck = storyWords.every((word) => {
  return word.length <= 10
})
console.log(`This is new length check : ${newlengthCheck}`)

//invoke the join method on storyWords
console.log(storyWords.join(' '))
