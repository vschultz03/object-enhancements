//same keys and values

function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
}

//computed property names
var favoriteNumber = 42

var fav = {
    firstName: "Colt",
    [favoriteNumber]: 'That is my favorite!'
}


//object methods

var instructor = {
    firstName: 'colt',
    sayHi() {return 'Hi!'},
    sayBye() {return this.firstName + ' says bye!'}
}


//create animal function

const createAnimal = function(species, verb, noise){
    return{
        species,
        [verb]: noise
    }
}