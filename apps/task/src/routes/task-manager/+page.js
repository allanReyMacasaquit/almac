export const ssr = false;

export function load() {
  return {
    appName: "Praise/Worship",
    board: "Schedule",
    date: getNextSundayAfterCurrent().toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric"
    })
  };
}

function getNextSundayAfterCurrent() {
  const currentDate = new Date();

  const currentDay = currentDate.getDay(); // Get the current day of the week

  // Find the next Sunday
  while (currentDate.getDay() !== 0) {
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // If the current day is already Sunday, we want to find the next Sunday after the current one
  if (currentDay === 0) {
    currentDate.setDate(currentDate.getDate() + 7);
  }

  return currentDate;
}
