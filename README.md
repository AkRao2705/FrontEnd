 **Guess the Number Game**  

**Overview**
This is a simple number-guessing game built using **JavaScript, HTML, and CSS**. The goal is to guess a randomly generated number between **1 and 20**. The game provides feedback for each guess and keeps track of the player's score and high score.  

**How It Works**
1. Enter a number between **1 and 20** in the input box.  
2. Click the **"Check"** button to submit your guess.  
3. The game provides hints:  
   - If the guess is correct, the background changes, and the game ends.  
   - If the guess is too high or too low, a message is displayed.  
   - The score decreases with each incorrect guess.  
   - If the score reaches **0**, the game ends.  
4. Click the **"Again!"** button to reset the game with a new secret number.  

**Features**
- Random number generation between **1 and 20**  
- Feedback messages for correct, high, and low guesses  
- Score tracking that decreases with incorrect attempts  
- High score tracking across game sessions  
- Ability to restart the game without refreshing the page  

**Project Structure**
```
📂 guess-the-number-game  
 ├── 📄 index.html    # Structure of the game  
 ├── 🎨 style.css     # Styling for the UI  
 ├── ⚙️ script.js     # JavaScript logic  
 ├── 📜 README.md     # Project documentation  
```  

 **Technologies Used**
- **HTML** – Defines the game layout  
- **CSS** – Styles the interface  
- **JavaScript** – Handles game logic and interactivity  

**Future Enhancements**
- Add difficulty levels (easy, medium, hard)  
- Store high scores using **localStorage**  
- Improve the UI for better user experience  
- Add sound effects for feedback  

Author  
**Akash Karthik**  

This project is a fun way to practice DOM manipulation and event handling in JavaScript.
