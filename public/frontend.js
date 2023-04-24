const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchColours();
});

const fetchColours = () => {
  const userPrompt = form.elements.userPrompt.value;
  fetch("/palette", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      userPrompt: userPrompt,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // Extract "colors" array from the response
      const colors = data.colors;
      // Get the "container" div
      const container = document.querySelector(".container");
      // Call the createColours function to create the color divs
      createColours(colors, container);
    });
};

const createColours = (colors, container) => {
  //Empty container for each new request
  container.innerHTML = "";
  // Loop through all the returned colors, create a div for each one, and append it to the "container" div
  for (const color of colors) {
    // Make a new empty div for each color element returned
    const div = document.createElement("div");
    // Sets the height of each color div to the height of the "container" div (100vh)
    div.classList.add("color");
    // Set the background color of each newly created color div to the color returned
    div.style.backgroundColor = color;
    // Set the width of each color div to an equal percentage of the container div
    div.style.width = `calc(100%/${colors.length})`;

    // Copy the color to the clipboard when the div is clicked
    div.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
    });

    // Insert name of color in each div
    const span = document.createElement("span");
    span.innerText = color;
    div.appendChild(span);
    container.appendChild(div);
  }
};
