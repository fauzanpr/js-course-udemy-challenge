"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const favLang = Number(prompt(`${this.question} ${this.options}`));
    if (!(favLang >= 0 && favLang < 4)) {
        alert('this input is not valid');
    } else {
        this.answers[favLang] = this.answers[favLang]+1
        this.displayResult('string');
    }
  },
  displayResult(type) {
    if (type !== 'string' && type !== 'array') console.log('error of type');
    if (type === 'string') {
        console.log(`Poll results are ${this.answers}`);
    } else {
        console.log(this.answers);
    }
  }
};

const btn = document.getElementById('btn');
btn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// bonus
// const testData = {
//     testData1: [5,2,3],
//     testData2: [1,5,3,9,6,1]
// };

// poll.displayResult.call({ answers: testData.testData1 }, 'string');
// poll.displayResult.call({ answers: testData.testData2 }, 'string');