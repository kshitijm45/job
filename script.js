let activeFilters = [];
let fil = document.getElementsByClassName("filters");

function toggleFilter(filter) {
  addclass(fil[0], "showf");
  const index = activeFilters.indexOf(filter);
  if (index !== -1) {
    activeFilters.splice(index, 1);
  } else {
    activeFilters.push(filter);
  }

  filterObjects();

  var filterslist = document.getElementById("filterslist");
  filterslist.innerHTML = "";
  for (let i = 0; i < activeFilters.length; i++) {
    filterslist.innerHTML += `<p class="filterscontent">${activeFilters[i]} <span class="remove" onclick="removeFilter('${activeFilters[i]}')">X</span></p>`;
  }
}

function filterObjects() {
  var x, i;
  x = document.getElementsByClassName("box");

  for (i = 0; i < x.length; i++) {
    var boxSkills = x[i].querySelector(".skills").innerText;
    var allFiltersMatch = activeFilters.every((filter) =>
      boxSkills.includes(filter)
    );

    if (allFiltersMatch) {
      addclass(x[i], "show");
    } else {
      removeclass(x[i], "show");
    }
  }
}

function removeFilter(filter) {
  const index = activeFilters.indexOf(filter);
  if (index !== -1) {
    activeFilters.splice(index, 1);
  }

  filterObjects();

  var filterslist = document.getElementById("filterslist");
  filterslist.innerHTML = "";
  for (let i = 0; i < activeFilters.length; i++) {
    filterslist.innerHTML += `<p class="filterscontent">${activeFilters[i]} <span class="remove" onclick="removeFilter('${activeFilters[i]}')">X</span></p>`;
  }
  if (activeFilters.length == 0) removeclass(fil[0], "showf");
}

function clearFilters() {
  var x, i;
  x = document.getElementsByClassName("box");
  for (i = 0; i < x.length; i++) {
    addclass(x[i], "show");
  }
  activeFilters = [];
  var filterslist = document.getElementById("filterslist");
  filterslist.innerHTML = "";
  removeclass(fil[0], "showf");
}

function addclass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeclass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
