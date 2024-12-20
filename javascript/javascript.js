// Function to open the sliding nav
function openDetails(id) {
  const element = document.getElementById(id);
  element.style.top = "0"; // Slide down
}

// Function to close the sliding nav
function closeDetails(id) {
  const element = document.getElementById(id);
  element.style.top = "-100%"; // Slide back up
}