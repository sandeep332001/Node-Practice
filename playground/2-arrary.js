const event = {
  name: "Hello",
  guestList: ["Sandeep", "Pradeep", "Sandy"],
  printGuest() {
    console.log(`Your name is ${this.name}`);

    this.guestList.forEach((guest) => {
      console.log(`${this.name} name is ${guest}`);
    });
  },
};

event.printGuest();
