let events = [
    {
        title: "wedding",
        date: new Date("2023-03-30T16:00:00"),
        location: "Nairobi",
        attendees: new Set(["John", "Kinyua", "Kelvin", "Wambua"])
    },
    {
        title: "birthday",
        date: new Date("2023-03-29T11:00:00Z"),
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

const today = new Date();
const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
const upComingEvents = events.filter((event) => {
    return event.date >= today && event.date <= nextWeek;
}).map((event) => {
    return `${event.title} - ${event.date.toLocaleString()} - ${event.location}`
})

console.log(upComingEvents);

// console.log(myEvent);
// console.log(myEvent[1]);
// console.log(myEvent.length);
// console.log(myEvent[1].title);
// console.log(Date());
// console.log(myEvent[2].attendees);