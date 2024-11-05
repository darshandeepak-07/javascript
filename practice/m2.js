let n1 = "deepak"
let n2 = 'deepak'
console.log(n1 == n2)

function multiple(n1,n2)
{
    return n1 * n2;
}

console.log(multiple(2,3))

let q = 5

function getQ() {
    let q = 1
    console.log(q)
}
getQ()

if(true) {
    // instead of var if we use let we get an error as r is not defined
    var r = 4
}
console.log(r)

var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();

function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  console.log(outside()(10)); // 20 (instead of 10)
  
  const pet = function(name) {
    function getName() {
      return name;
    }
    return getName;
  }

  const pet1 = pet("deepak")
  console.log(pet1())
  console.log(typeof null)


  const createAnimal = function(name) {
    let age;
    const animal = {
    setAge(newAge) {
      age = newAge
    },
    getAge() {
      return age;
    }
  }
  return animal
  }

  const a1 = createAnimal("dog")
  a1.setAge(20)
  console.log(a1.getAge())
  