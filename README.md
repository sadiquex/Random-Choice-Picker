# Random-Choice-Picker
This app select a random choice from a list of choices user inputs,separating them with a comma.

https://sadiquex.github.io/Random-Choice-Picker/
1. a focus() method is called on the text area to automatically select it when the page reloads
2. an event is called on the text area, which contains a function to get the user input. If Enter key is pressed, the input field is cleared after 10ms, and another function, randomSelect is invoked.
3. the random select function uses setTimeout to switch between the highlighted tags
4. the pickRandomTag is then invoked in the random select function where it chooses a random tag from the array/collection.(user input)
5. the tag which is selected is given highlight class which changes its colour and vice versa.


