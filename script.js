// Function to update the current day of the week
function updateDayOfWeek() {
    const currentDayElement = document.getElementById('currentDayOfTheWeek');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const currentDayIndex = now.getDay();
    const currentDayOfWeek = daysOfWeek[currentDayIndex];
    currentDayElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`;
}

// Initial call to display the current day of the week
updateDayOfWeek();

// Function to update the current UTC time in milliseconds
function updateUTCTime() {
    const utcTimeElement = document.getElementById('currentUTCTime');
    const currentUTCTimeInMilliseconds = new Date().getTime();
    utcTimeElement.textContent = `Current UTC Time (Milliseconds): ${currentUTCTimeInMilliseconds}`;
}

// Update the current UTC time every second
setInterval(updateUTCTime, 1000);

// Initial call to display the current UTC time
updateUTCTime();
