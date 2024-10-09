function taskCalendar() {
    let day = prompt("Enter a day of the week:").toLowerCase();

    switch (day) {
        case "monday":
            alert("Task for Monday: Chest Day and Triceps Day.");
            break;
        case "tuesday":
            alert("Task for Tuesday: Back Day and Bicep Day.");
            break;
        case "wednesday":
            alert("Task for Wednesday: Leg Day.");
            break;
        case "thursday":
            alert("Task for Thursday: Arms Day and Abs Day.");
            break;
        case "friday":
            alert("Task for Friday: REST DAY.");
            break;
        case "saturday":
            alert("Task for Saturday: Cleaning Day .");
            break;
        case "sunday":
            alert("Task for Sunday: Family Day.");
            break;
        default:
            alert("Invalid day entered, please enter a valid day of the week.");
    }
}