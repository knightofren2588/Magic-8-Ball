const userName= '';
const userQuestion = 'Will I win the lottery?';
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = 'It is certain';

if (userName === 'Jane') {
    console.log('Hello Jane');
} else if (userName === '') {
    console.log('Hello!'); }
if (userQuestion === '') {
    console.log('TRY ASKING AGAIN!!');
} else if (userQuestion === 'Will I win the lottery?') {
    console.log('YES!!!'); }
console.log(randomNumber);
if (randomNumber === 0) {
    console.log (`${eightBall}`);
} else if (randomNumber === 1) {
    console.log ('Outlook does not look good!');
}
