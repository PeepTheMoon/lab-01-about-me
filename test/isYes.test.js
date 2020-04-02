// IMPORT MODULES under test here:
import isYes from '../is-yes.js';
// import example from '../src/example.js';

const test = QUnit.test;
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
test('isYes should return true if user says yes', function(assert) {
    const userAnswer = 'yes';
    const userAnswerIsCorrect = isYes(userAnswer);
    const expected = true;
    
    assert.equal(userAnswerIsCorrect, expected);
});

test('isCorrect should return false if user says no', function(assert) {
    const userAnswer = 'no';
    const userAnswerIsCorrect = isYes(userAnswer);
    const expected = false;

    assert.equal(userAnswerIsCorrect, expected);
});