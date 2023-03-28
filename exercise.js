let myEvent = [
    {
        title: "wedding",
        date: new Date("2023-03-25"),
        location: "Nairobi",
        attendees: new Set(["John", "Kinyua", "Kelvin", "Wambua"])
    },
    {
        title: "birthday",
        date: new Date("2023-03-25"),
        location: "Nairobi",
        attendees: new Set(["Daniel", "Veronicah", "Kelvin", "Anne"])
    },
    {
        title: "party",
        date: new Date("2023-03-25"),
        location: "Nairobi",
        attendees: new Set(["Dan", "Yvonne", "Antony", "Wambui"])
    }
]

// console.log(myEvent);
// console.log(myEvent[1]);
// console.log(myEvent.length);
// console.log(myEvent[1].title);
// console.log(Date());
console.log(myEvent[2].attendees);