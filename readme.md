# Calculator

This utilizes keyboard events, mouse events and event objects.
It takes in the keyboard or mouse events, stores it in an array, uses it for computation and displays it in the input box. 

This calculator is built with Flexbox, Grid, and VanillaJS.

This one is the improved version of the last one. 
`Clear` button was split into 2, which is `AC` and `Backspace`.

**New Features:**
- The `AC` button clears the array and input values
- The `Back Arrow` button deletes the last character in the input value with the use of `slice()` method. It also deletes the last index in the array with the use of `while loop` with the condition of input length less than array length in which it `pops` the last index in the array on each cycle.
This syntax logic is applied to both keyboard events and mouse events
- Error message was changed from "Error, Please Press Clear" to "ERROR."

**Old Features:**
- The Clear button clears the array and input values
- For keyboard events, the window was used to listen to keyboard events. The keys pressed is then pushed to the array and converted to an integer along with the operand. Then upon pressing the `Enter` key, the operation is executed, and the results is shown in the input box. The array is automatically cleared whenever the `Enter` key is pressed to make way for new set of numbers and operands to be used.
- for mouse events, the calculator container was used to listen to mouse click events and event object was used to target which button div was clicked. A string corresponding to the button div class is pushed into the same array as with keyboard events. And again converted to an integer along with its operand. Then upon clicking the `Equals` button, the operation is executed, and the results is shown in the input box. The array is automatically cleared whenever the `Equals` key is pressed to make way for new set of numbers and operands to be used.
- Each button highlights into orange on every click which lasts 170 miliseconds.
- Catches any erroneous operation that will be typed in the input box. Errors are catched after pressing or clicking the `Equals` sign or `Enter`, afterwhich, "Error, Please Press Clear" will be displayed in the input box.