import isYes from './is-yes.js';

const test = QUnit.test;

test('isYes should return true if user says yes', function(assert) {
    const userAnswer = 'yes';

    const userAnswerIsCorrect = isYes(userAnswer);

    assert.equal(userAnswerIsCorrect, true);
});
    
test('isCorrect should return false if user says no', function(assert) {
    const userAnswer = 'no';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, false);
});
