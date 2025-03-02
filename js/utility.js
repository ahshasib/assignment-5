let bdTime = new Date().toLocaleTimeString("en-US", { 
    timeZone: "Asia/Dhaka", 
    hour: "2-digit", 
    minute: "2-digit", 
    hour12: true 
});

const bdDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "Asia/Dhaka", 
    year: "numeric", 
    month: "long", 
    day: "numeric"
});