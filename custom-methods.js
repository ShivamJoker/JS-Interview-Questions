const name = "chinti";

String.prototype.capitalize = function () {
  const capArr = [...this].map((c, i) => {
    return i === 0 ? c.toUpperCase() : c;
  });
  return capArr.join("");
};

console.log(name.capitalize());

Array.prototype.isStartingWith = function (char) {
  return this.filter((name) => {
    return name.charAt(0) === char;
  });
};

const family = [
  "chintu",
  "chinki",
  "minti",
  "banku",
  "hathida",
  "hallu",
  "bhallu",
];

console.log(family.isStartingWith("h"));
