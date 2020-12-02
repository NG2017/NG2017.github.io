# Multi Color Buttons

## Story

Everybody knows that scouts collect badges.
The more badges you have the more respect you earn.
Now you want to have your first (or next if you are already a scout) scout badge.
And that badge is the `DOM manipulator`.
To earn this badge you need to finish this project.

## What are you going to learn?

- Manipulating the DOM
- The basic syntax of Javascript

## Tasks

1. The first row contains a button that will jump if you click it. The jumping part missing from the code so you need to write it. So when someone click the button, it goes from the right to the left and his text change to `Go Left!`.  When we click again it goes to the left and the text changes to `Go Right!`.
    - When the button `Go Right!` is on the left side, the text on it is `Go Right!`
    - When the button is on the left side, when we click it goes to the window's right side
    - When the button is on the right side, the text on it is `Go Left!`
    - When the button is on the right side, when we click it, it goes to the window's left side

2. The next row contains a button that changes his color when clicked.
    - When the button `Change my color!` is clicked, the button background is changing to red
    - When the button is clicked again, the button background changes back to default

3. In the next row you need to change the button `Click the other button` background color  when we click the button `Change my neighbour color!`
    - When we click the button `Change my neighbour color!`, the button `Click the other button` background color changes to a random color

4. The next row contains a button with a number. Whenever you click that button the number will raise on it.
    - If we click the button which has a number on, the number will raise by one on each click

## General requirements

None

## Hints

- Use the `window.onload = function () {}` to write your code.
- You can change the style of an element with JS by changing the style property directly or you change the element's class and you declare a CSS class for that.
- If you add an _eventListener_ to an element, you can use the `element.onclick = function() {}` property or the `element.addEventListener("click", function() {})` method.
- When you want to get an element, you can cache the element in a variable like `let button = document.getElementById("myButton")`.
  After you can change the properties of that element by `button.style.color = "red"`.
  In this situation you tell the `button` variable to cache the reference of the element with the `id` property of `myButton`.

## Starting your project



## Background materials

- <i class="far fa-exclamation"></i> [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- <i class="far fa-exclamation"></i> [Click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
- <i class="far fa-book-open"></i> [What is DOM?](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
