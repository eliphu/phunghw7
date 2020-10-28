// Character list. Each house has a name and a code
const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  // Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
      case "Stark":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "Lannister":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "Baratheon":
        return ["Robert", "Stannis", "Renly"];
      case "Targaryen":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
};
//populate the dropdown list
const dropList = document.getElementById("house");
for (i = 0; i < houses.length; i++){
    var item = houses[i].name;
    var x = document.createElement("option");
    x.textContent = item;
    x.value = item;
    dropList.appendChild(x);
}
//lists the characters

document.addEventListener("change", e => {
    var select = document.createElement("li");
    select.id = "char"
    //I got to here, but I'm unsure of how to get the value from the droplist
    select.textContent = getCharacters();
    document.getElementById("characters").appendChild(select);
});