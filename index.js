fetch("company.json")
  .then(function (r) { return r.json(); })
  .then(function (data) {
    // fills every element that has a data-json="key"
    document.querySelectorAll("[data-json]").forEach(function (el) {
      if (data[el.dataset.json]) el.textContent = data[el.dataset.json];
    });
    // builds the team cards
    document.getElementById("teamGrid").innerHTML = data.team.map(function (m) {
      return '<div class="card member">' +
        '<img class="avatar" src="' + m.image + '" alt="' + m.name + '">' +
        '<h3>' + m.name + '</h3>' +
        '<p class="role">' + m.role + '</p>' +
        '<a href="mailto:' + m.email + '">' + m.email + '</a>' +
        '</div>';
    }).join("");
  })
  .catch(function (e) { console.error("Could not load company.json", e); });