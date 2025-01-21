document.getElementById(
  "date"
).innerHTML = `<marquee behavior="" direction="right">${new Date().toLocaleDateString(
  "en-US",
  { weekday: "long", year: "numeric", month: "long", day: "numeric" }
)}</marquee>`;
