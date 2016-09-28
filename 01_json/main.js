var leader = {
  name: "Василий Иванович",
  age: 35
};

var JSONstr = JSON.stringify(leader);

console.log(JSONstr);
console.log(leader);

console.log("after===========");

var leader2 = JSON.parse(JSONstr);

console.log(leader2);