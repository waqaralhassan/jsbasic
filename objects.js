let object = {
  firstName: "Maryam",
  lastName: "Nawaz",

  fullName: function () {
    console.log("this:", this);

    return this.firstName + " " + this.lastName;
  },

  changeName: function () {
    return (this.lastName = "Safdar");
  },
};

//console.log(object.fullName());
const object2 = {
  ...object,
};
object2.lastName = "Safdar";
console.log(
  "previous name:",
  object.lastName,
  "current name:",
  object2.lastName
);
const yourLeader = object2.fullName();
console.log("your leader is ->:", yourLeader);
