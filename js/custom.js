function responsiveNav() {
  if (window.innerWidth > 919) {
    displayNavItems(true);
    displayMenu(false);
  } else {
    displayNavItems(false);
    displayMenu(true);
  }
}

function displayNavItems(mode) {
    var mode = (mode === true) ? true : false;
    var items = [];
    items = document.querySelectorAll(".nav").forEach(item => {
      item.style.display = (mode) ? "block" : "none";
    });            
}

function displayMenu(mode) {
    var mode = (mode === true) ? true : false;
    document.getElementById("menu").style.display = (mode) ? "block" : "none";
}

document.getElementById("menu").addEventListener("click", function(e){
  // Open menu dropdown
  if (window.innerWidth < 920) {
    displayNavItems(true);
    displayMenu(false);
    e.stopPropagation();// Stops propagation of this event to upper level and is required!        
  }
});
document.body.addEventListener("click", function(e2) {
  // Close menu dropdown
  if (window.innerWidth < 920) {
    var items = [];
    displayNavItems(false);
    displayMenu(true);
    e2.stopPropagation();// Stops propagation of this event to upper level and is required!
  }
});  

// Add footer year
var year = document.getElementById("year");
var date = new Date();
year.innerHTML = date.getFullYear();

