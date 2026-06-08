const areas = [
  {
    name: "Rocky Pond",
    town: "Boylston",
    drive: 18,
    gradeBand: "V0-V6+",
    styles: ["technical", "overhang"],
    bestFor: "Best first full session",
    summary:
      "The most concentrated nearby circuit: lots of problems, useful warmups, and enough V3-V4 options to make a real outdoor day.",
    source: "https://www.mountainproject.com/area/120242338/rocky-pond",
    map: "https://www.google.com/maps/search/?api=1&query=Rocky+Pond+Boylston+MA",
    problems: [
      { name: "Wormhole", grade: "V1/2", type: "warmup" },
      { name: "Nightcall", grade: "V2", type: "warmup" },
      { name: "Killing of a Giant", grade: "V3", type: "v3" },
      { name: "Cyberknife SDS", grade: "V3+", type: "v3" },
      { name: "Golden Wave", grade: "V4", type: "project" }
    ]
  },
  {
    name: "Tivnan Boulder",
    town: "Worcester",
    drive: 16,
    gradeBand: "V0-V4",
    styles: ["slab", "technical"],
    bestFor: "Closest low-commitment session",
    summary:
      "A small Worcester boulder with approachable grades and several V3-ish lines. Good when you want to touch real rock without driving far.",
    source: "https://www.mountainproject.com/area/121233351/tivnan-boulder",
    map: "https://www.google.com/maps/search/?api=1&query=Tivnan+Boulder+Worcester+MA",
    problems: [
      { name: "The Fix", grade: "V2", type: "warmup" },
      { name: "Chicken Chin", grade: "V3-", type: "v3" },
      { name: "Out and Back", grade: "V3-", type: "v3" },
      { name: "Slabby Seconds", grade: "V3", type: "v3" },
      { name: "Spring Break", grade: "V3-4", type: "v3" }
    ]
  },
  {
    name: "Tatnuck Boulder",
    town: "Worcester",
    drive: 17,
    gradeBand: "V0-V5",
    styles: ["traverse", "technical"],
    bestFor: "After-work granite mileage",
    summary:
      "Another in-town Worcester option with several V3 to V4-leaning problems. Expect compact climbing and old-school outdoor grading.",
    source: "https://www.mountainproject.com/area/119005846/tatnuck-boulder",
    map: "https://www.google.com/maps/search/?api=1&query=Tatnuck+Boulder+Worcester+MA",
    problems: [
      { name: "Thumbs Up", grade: "V3", type: "v3" },
      { name: "I'm Lichen This Traverse", grade: "V3+", type: "v3" },
      { name: "Quarantine Machine", grade: "V3-4", type: "v3" },
      { name: "Impossible", grade: "V3+", type: "v3" },
      { name: "Conundrum", grade: "V4", type: "project" }
    ]
  },
  {
    name: "God's Acre",
    town: "Worcester",
    drive: 20,
    gradeBand: "V0-V6",
    styles: ["overhang", "technical"],
    bestFor: "Short session with harder options",
    summary:
      "A compact Worcester area with a few attractive V3-V4 picks and harder problems nearby if you feel spicy.",
    source: "https://www.mountainproject.com/area/121692794/gods-acre-worcester",
    map: "https://www.google.com/maps/search/?api=1&query=God%27s+Acre+Worcester+MA+bouldering",
    problems: [
      { name: "Hawaiian", grade: "V0+", type: "warmup" },
      { name: "Pole Dancer", grade: "V3", type: "v3" },
      { name: "Razorclaw", grade: "V3-4", type: "v3" },
      { name: "Power Threat", grade: "V4-", type: "project" },
      { name: "Karate Chop", grade: "V5", type: "project" }
    ]
  },
  {
    name: "Douglas State Forest",
    town: "Douglas",
    drive: 38,
    gradeBand: "V0-V10",
    styles: ["overhang", "technical"],
    bestFor: "Big local destination",
    summary:
      "A larger destination south of Worcester. It is better for a planned day than a quick lap, with many more climbs than the in-town boulders.",
    source: "https://www.mountainproject.com/area/119369697/douglas-state-forest",
    map: "https://www.google.com/maps/search/?api=1&query=Douglas+State+Forest+MA+bouldering",
    problems: [
      { name: "Diagon Alley", grade: "V3", type: "v3" },
      { name: "Squirrel Cave", grade: "V3", type: "v3" },
      { name: "Trailside Arete", grade: "V4", type: "project" },
      { name: "The Squeeze", grade: "V4", type: "project" },
      { name: "Harry Potter", grade: "V6", type: "project" }
    ]
  },
  {
    name: "Rock House Reservation",
    town: "West Brookfield",
    drive: 42,
    gradeBand: "V0-V7",
    styles: ["slab", "technical"],
    bestFor: "Scenic moderate mileage",
    summary:
      "A scenic Trustees property with documented bouldering. Treat it as a relaxed exploration day and confirm any property-specific rules first.",
    source: "https://www.mountainproject.com/area/121168841/rock-house-reservation",
    map: "https://www.google.com/maps/search/?api=1&query=Rock+House+Reservation+West+Brookfield+MA",
    problems: [
      { name: "Johnny Appleseed", grade: "V1", type: "warmup" },
      { name: "The Wave", grade: "V2", type: "warmup" },
      { name: "Bubblegum", grade: "V3", type: "v3" },
      { name: "The Scoop", grade: "V3", type: "v3" },
      { name: "Clam Digger", grade: "V4", type: "project" }
    ]
  }
];

const filters = {
  grade: document.querySelector("#grade-filter"),
  distance: document.querySelector("#distance-filter"),
  style: document.querySelector("#style-filter")
};

const grid = document.querySelector("#route-grid");
const resultCount = document.querySelector("#result-count");

function routeMatchesGrade(area, gradeFilter) {
  if (gradeFilter === "all") return true;
  return area.problems.some((problem) => problem.type === gradeFilter);
}

function routeMatchesDistance(area, distanceFilter) {
  if (distanceFilter === "all") return true;
  return area.drive <= Number(distanceFilter);
}

function routeMatchesStyle(area, styleFilter) {
  if (styleFilter === "all") return true;
  return area.styles.includes(styleFilter);
}

function gradeClass(type) {
  if (type === "warmup") return "grade grade--warmup";
  if (type === "project") return "grade grade--project";
  return "grade";
}

function linkIcon() {
  return `
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 1 0 12 20.1l1.1-1.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
}

function mapIcon() {
  return `
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2"/>
    </svg>`;
}

function createCard(area) {
  const shownProblems = area.problems
    .map(
      (problem) => `
        <li>
          <span class="${gradeClass(problem.type)}">${problem.grade}</span>
          <span>${problem.name}</span>
        </li>`
    )
    .join("");

  const stylePills = area.styles
    .map((style) => `<span class="pill">${style}</span>`)
    .join("");

  return `
    <article class="route-card">
      <div class="route-card__top">
        <div>
          <h3>${area.name}</h3>
          <p>${area.town}</p>
        </div>
        <div class="drive">${area.drive} min</div>
      </div>
      <div class="meta">
        <span class="pill">${area.gradeBand}</span>
        <span class="pill">${area.bestFor}</span>
        ${stylePills}
      </div>
      <p>${area.summary}</p>
      <ul class="problems">${shownProblems}</ul>
      <div class="card-actions">
        <a class="button" href="${area.source}" target="_blank" rel="noreferrer">${linkIcon()} Beta</a>
        <a class="button button--light" href="${area.map}" target="_blank" rel="noreferrer">${mapIcon()} Map</a>
      </div>
    </article>`;
}

function render() {
  const filtered = areas.filter(
    (area) =>
      routeMatchesGrade(area, filters.grade.value) &&
      routeMatchesDistance(area, filters.distance.value) &&
      routeMatchesStyle(area, filters.style.value)
  );

  resultCount.textContent = `${filtered.length} area${filtered.length === 1 ? "" : "s"} shown`;

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">No matches. Loosen one filter and the rocks reappear.</div>';
    return;
  }

  grid.innerHTML = filtered.map(createCard).join("");
}

Object.values(filters).forEach((filter) => filter.addEventListener("change", render));
render();
