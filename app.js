import isYes from './is-yes.js';

//Getting DOM elements

const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('quiz-result');

//Event Handlers- Quiz

function quizMe() {
    let correctAnswers = 0;
    let name = '';

    alert('Hello from the artist! Click OK to continue.');

    const confirmed = confirm('Are you ready to take the quiz?');
    if (confirmed === false) {
        return;
    }

    const firstName = prompt('Enter your first name.');
    name = firstName;

    const lastName = prompt('Enter your last name.');
    name = name + '' + lastName;

    const isPainter = prompt('Is this artist a painter (Yes/No)?');

    const isSculptor = prompt('Does this artist sculpt (Yes/No)?');

    const isMetalsmith = prompt('Is this artist a metalsmith (Yes/No)?');

    if (isYes(isPainter, isSculptor, isMetalsmith) === true) {
        correctAnswers++;
    }

    let response = 'Okay ' + name;

    alert('Your quiz is complete.  Click to see your results!');

    if (correctAnswers >= 3) {
        response += ' you know this artist!';
    } else {
        response += ' you should read about the artist again.';
    }

    result.textContent = response;
}

quizButton.addEventListener('click', quizMe);

quizMe();