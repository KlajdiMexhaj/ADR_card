function toggleDropdown() {
  // Get the dropdown content element
  var dropdownContent = document.querySelector('.dropdown-content');
  
  // Toggle the 'show' class to show or hide the dropdown
  dropdownContent.classList.toggle('show');
}

// Close the dropdown if clicked anywhere outside of it
window.onclick = function(event) {
  var dropdownContent = document.querySelector('.dropdown-content');
  var dropdownBtn = document.querySelector('.dropdown-btn');
  
  // Ensure dropdown closes if clicking outside the dropdown button and content
  if (!dropdownContent.contains(event.target) && !dropdownBtn.contains(event.target)) {
      dropdownContent.classList.remove('show');
  }
};