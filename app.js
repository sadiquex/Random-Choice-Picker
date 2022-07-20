const tags = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
})
function createTags(input) {
    // create an array with what user types separated by a comma
    // the split function separates the words into an array according to what it's given, here with ,
    // trim removes white spaces in words
    // map creates an array with the 'trimmed' words
    const words = input.split(',')
    .filter(words => words.trim() !== '')
    .map(words => words.trim())
    // here, we're saying, can't be an empty string, and also we're going to trim any white space

    // clear tags in html before adding user input
    tags.innerHTML = '';

    words.forEach(word => {
        // create an element for each word typed and give it a class of tag
        const newTag = document.createElement('span')
        newTag.classList.add('tag')
        newTag.innerText = word;
        tags.appendChild(newTag)
    })
}
