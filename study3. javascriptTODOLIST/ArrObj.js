const monkey = {
  name: "ringo",
  face: 'Funny',
  age: 11,
  food: [
    "banana",
    "apple",
    "strawberry",
  ],
  tail: true,
  location: {
    country: "Congo",
    place: "forest",
    isAfrica: true,
  }
}

const monkeyJSON = JSON.stringify(monkey);

console.log(monkeyJSON);


const monkeyJSONParse = JSON.parse(monkeyJSON);

console.log(monkeyJSONParse);