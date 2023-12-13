let question=document.getElementById('questionText');
let allAnswers=document.getElementsByClassName('answers')[0];
let questionNO=document.getElementById('questionNo');
let optionButton=document.getElementsByClassName('answer');
// Fetch Data From quizData.json use https request
let questionsList=[]// initializing a empty variable for the fetch operation
const fetchQuestion=()=>{
    fetch ('./quizData.json')
    .then(Response=>Response.json())
    .then(data=>{
        questionsList=data;
        startQuiz(questionsList);
    })
    .catch(Error=>console.log('Error Occured during fetching of data'));
}

const startQuiz=(questionsList)=>{
    question.innerHTML=questionsList[0].question;
    console.log(questionsList[0].options)
    questionsList[0].options.forEach(Element=>{
        let option=document.createElement('button')
        option.className='answer'
        option.value=Element
        option.textContent=Element

        allAnswers.appendChild(option)
    })
}

optionButton.addEventListener('click',()=>console.log('hi'))

fetchQuestion();//Calling the fetch operation to fetch all the question data

