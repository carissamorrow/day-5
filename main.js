let carissa = {
  name: "Carissa",
  age: 30,
  favoriteColor: "green",
  male: false,
  eyes: {
    left: {
      color: "green",
      vision: "20/20"
    },
    right: {
      color: "green",
      vision: "20/20"
    },
    pets: {
      dog1: {
        name: "Tucker"
      },
      dog2: {
        name: "Brody"
      },
    }
  }
}
let chris = {
  name: "Chris",
  age: 32,
  favoriteColor: "blue",
  male: true,
  friends: ["carissa"]
}
let natalie = {
  name: "Natalie",
  age: 62,
  favoriteColor: "pink",
  male: false,
  friends: ["carissa, chris"]
}
let joseph = {
  name: "Joe",
  age: 62,
  favoriteColor: "blue",
  male: true,
  friends: ["carissa, chris, natalie"]
}


//array(aka lists or collections)
let humans = [carissa]

let story1 = `my name is ${carissa.name} and my favorite color is ${carissa.favoriteColor}`
let story2 = `my name is ${chris.name} and my favorite color is ${chris.favoriteColor}`
console.log(story2)
