

// // Exercise 1 - simple callback

function greet(callback) {
  console.log("1")
  console.log('Hello!');
  callback();
  console.log("3")
}

greet(function() {
  console.log("2")
  console.log('Goodbye!')
});


// // Exercise 2 - callback executed on DOM event

function alert() {
  console.log(4)
  document.getElementById('click-here').addEventListener('click', function() {
    console.log(12)
    console.log('This is an alert!')
  });
  console.log(5);
}

alert()


// // Exercise 3 - callback executed on DOM event, with a setTimeout

function alert1() {
  console.log(6)
  document.getElementById('click-here').addEventListener('click', function() {
    console.log(13)
    setTimeout(function() {
      console.log(15)
      console.log('This is an alert2!')
    }, 2000)
    console.log(14)
  });
  console.log(7);
}

alert1()

// // Exercise 4 - callback executed after an API call

function getPeople() {
  console.log(8);
  $.get("https://async-workshops-api.herokuapp.com/people", function(response) {
    console.log(10);
    response.forEach(function(person) {
      console.log(person.name)
    });
    console.log(11);
  });
  console.log(9);
}

getPeople()
