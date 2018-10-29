let carissa = {
  name: "Carissa",
  age: 30,
  favoriteColor: "green",
  male: false,
  // eyes: {
  //   left: {
  //     color: "green",
  //     vision: "20/20"
  //   },
  //   right: {
  //     color: "green",
  //     vision: "20/20"
  //   },
  //   pets: {
  //     dog1: {
  //       name: "Tucker"
  //     },
  //     dog2: {
  //       name: "Brody"
  //     },
  //   }
  // },
  friends: []
}
let chris = {
  name: "Chris",
  age: 32,
  favoriteColor: "blue",
  male: true,
  friends: [carissa]
}
let natalie = {
  name: "Natalie",
  age: 62,
  favoriteColor: "pink",
  male: false,
  friends: [carissa, chris]
}
let joseph = {
  name: "Joe",
  age: 62,
  favoriteColor: "blue",
  male: true,
  friends: [carissa, chris, natalie]
}
let humans = [carissa, chris, natalie, joseph]

natalie.friends.push(joseph)
chris.friends.push(joseph)


let story1 = `my name is ${carissa.name} and my favorite color is ${carissa.favoriteColor}`
console.log(story1)

let story2 = `my name is ${chris.name} an my favorite age is ${chris.age}`
console.log(story2)