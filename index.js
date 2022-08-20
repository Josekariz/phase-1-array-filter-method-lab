// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, str) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === str.toLowerCase();
  });
}
// console.log(findMatching(drivers, "Bobby")

function fuzzyMatch(drivers, str) {
  return drivers.filter(function (getDriver) {
    return (
      getDriver.toLowerCase().substring(0, str.length) === str.toLowerCase()
    );
  });
}
// console.log(fuzzyMatch(drivers, "a"));

// const drivers = [
//   {
//     name: "Bobby",
//     hometown: "Pittsburgh",
//   },
//   {
//     name: "Sammy",
//     hometown: "New York",
//   },
//   {
//     name: "Sally",
//     hometown: "Cleveland",
//   },
//   {
//     name: "Annette",
//     hometown: "Los Angeles",
//   },
//   {
//     name: "Bobby",
//     hometown: "Tampa Bay",
//   },
// ];

function matchName(drivers, str) {
  return drivers.filter(function (driverProp) {
    return driverProp.name === str;
  });
}
//console.log(matchName(drivers, "Bobby"));
