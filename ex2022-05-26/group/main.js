document.querySelector("#clickMe").addEventListener("click", makeReq);

async function makeReq() {
  const userHobby = document.querySelector("#userHobby").value;
  const res = await fetch(`/api?hobby=${userHobby}`);
  const data = await res.json();

  console.log(data);
  document.querySelector("#personName").textContent = data.name;
  //document.querySelector("#personStatus").textContent = data.studentHobby
  //document.querySelector("#personOccupation").textContent = data.currentOccupation

}
// hobbies = {
//   reading: leon,
//   skating: kaila, 
//   fishing: dan,
//   biking: david,
//   gaming: aubrette
//   running: pobs }

// TODO 1:
// on click, extract matching hobby
// const userHobby = document.querySelector(#userHobby").value
// hobbies[userHobby] will then be the person with that hobby
// 
// TODO 2:
// convert values to lists
// get new user name
// push user to hobby on click, and return the list of all names