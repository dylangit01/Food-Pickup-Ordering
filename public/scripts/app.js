// $("document").ready(() => {
// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users",
//   }).done((users) => {
//     for (user of users.users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });
// });
// })

// Bubbletea class
class Bubbletea {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBubbleTeas() {
    const StoredBubbleTeas = [
      {
        name: "Milk Tea",
        description: "The original best milk tea",
        cost: 5.99,
      },
      {
        name: "Matcha Milk Tea",
        description: "Green yummy goodness",
        cost: 6.99,
      },
    ];
    const bubbleTeas = StoredBubbleTeas;
    console.log(bubbleTeas);

    bubbleTeas.forEach((bubtea) => UI.addBubbleTeaToList(bubtea));
  }

  static addBubbleTeaToList(bubbleTea) {
    const list = document.querySelector("#order-list");

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${bubbleTea.name}</td>
    <td>${bubbleTea.description}</td>
    <td>${bubbleTea.cost}</td>
    <td><a href="#" class="btn btn-primary btn-sm update">Update</a></td>
    `;
    list && list.appendChild(row)
  }
}

// Store Class: Handle Storage

// Event: Display BubbleTea
document.addEventListener('DOMContentLoaded', UI.displayBubbleTeas)

// Event: Add a bubbleTea:
document.querySelector("#bubble-form").addEventListener('submit', e => {

  e.preventDefault();

  const asd = localStorage.getItem('bubbleteaInfo')
  const 

  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const cost = document.querySelector('#cost').value;

  // Instantiate new BubbleTea
  const bubbleTea = new Bubbletea(name, description, cost);
  console.log(bubbleTea);
  // Add bubbletea to UI
  UI.addBubbleTeaToList(bubbleTea)

});

