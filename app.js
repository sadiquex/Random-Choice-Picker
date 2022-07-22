const tagElement = document.getElementById("tags");
const textArea = document.getElementById("textarea");

// automatically focus on the text area when the page loads
textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  //   when user presses enter,use setTimeout to wait 10 seconds and clear input field after
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});
function createTags(input) {
  // create an array with what user types separated by a comma
  // the split function separates the words into an array according to what it's given, here with ,
  // trim removes white spaces in words
  // map creates an array with the 'trimmed' words
  const words = input
    .split(",")
    .filter((words) => words.trim() !== "")
    .map((words) => words.trim());
  // here, we're saying, can't be an empty string, and also we're going to trim any white space

  // clear tags in html before adding user input
  tagElement.innerHTML = "";

  words.forEach((word) => {
    // create an element for each word typed and give it a class of tag
    const newTag = document.createElement("span");
    newTag.classList.add("tag");
    newTag.innerText = word;
    tagElement.appendChild(newTag);
  });
}

function randomSelect() {
  // number of times to select each tag
  const times = 30;

  const interval = setInterval(() => {
    // cause highlighting and unhighlighting effect on each tag
    const randomTag = pickRandomTag();

    // highlight a random selected tag
    highlightTag(randomTag);

    // in charge of stopping on a random tag and highlighting a random one
    // unhighlight a random selected tag after 100ms
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
