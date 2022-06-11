const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c', 
  }, 
    {
      question: 'What is the most popular used programming language in 2019?',
      a : 'Java',
      b : 'C',
      c : 'Python',
      d: 'JavaScript',
      correct : 'a'
    }, 
    {
      question: 'Who is the president of US?',
      a: 'Florin Pop',
      b: 'Donald Trump',
      c: 'Ivan Saldano',
      d: 'Mihai Andrei',
      correct: 'b',
    },
    {
      question: 'What does HTML stand for?',
      a: 'Hypertext Marcup Language',
      b: 'Cascading Style Sheet',
      c: 'Jason Object Notation',
      d: 'Helicopters Terminals Motoboats Lamborginis',
      correct: 'a',
    },
    {
      question: 'What year was JavaScript launched?',
      a: '1996',
      b: '1995',
      c: '1994',
      d: 'none of the above',
      correct: 'b',
    }
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');



const a_text = document.getElementById('a_text')
console.log(a_text)
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit_btn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz];
 
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected(){
  let answer = undefined;
  
  answerEls.forEach((answerEl) => {
   if(answerEl.checked){
    answer =  answerEl.id;
   }
  });

 return answer;
}

function deselectAnswers(){
  answerEls.forEach((answerEl)=>{
    answerEl.checked = false;
   });
}

submit_btn.addEventListener('click', ()=>{
  // check to see the answer
  const answer = getSelected();
  console.log(answer);
  
  if(answer){
    if(answer === quizData[currentQuiz]
      .correct){
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length){
      loadQuiz();
    } else {
      //TODO: Show results
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
      <button onClick="location.reload()">Reload</button>`
    }
  }
  

})