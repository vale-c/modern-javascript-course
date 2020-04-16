// Function DECLARATIONS

function greet(firstName = "Vale", lastName ="Calabrese") {
  ///PRIOR TO ES6
    // if (typeof firstName == 'undefined') {firstName = "Vale"}
    // if (typeof firstName == 'undefined') {lastName = "Calabrese"}
  return 'Hello' + ' ' + firstName + ' ' + lastName;
}
//console.log(greet());


// FUNCTION EXPRESSIONS

const square =  function(x = 3) {
  return x * x;
};

console.log(square());

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

// (function(name) {
//   console.log('Hello ' + name);
// })('Vale');


// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add Todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(24);