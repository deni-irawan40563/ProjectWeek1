//SOAL 4
fetch('https://jsonplaceholder.typicode.com/users')
  .then( Response => { Response.json()
  .then( Result => Result.map(names => console.log(names.name)))
  })