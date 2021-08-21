const userInput = require('readline-sync');

console.log("Welcome to the Quiz-Cricket...! \n");

const userName = userInput.question("Please Enter your name \n");

const questionsList=[
    {
      question:"Who scored the most international runs for India in 2020? (847 runs)? \n",
      answer:'KL-Rahul',
      options: ['KL-Rahul','Rohit Sharma','Dhoni', 'Virat-Kohli'],
      message:"You've got it correct. \n"
      },
    {
      question:"Who was the highest wicket-taker for India in the year? (27 wickets)? \n",
      answer:'Jasprit Bumrah',
      options: ['Mohammad Shami','Jasprit Bumrah','Dhoni', 'Ashok dinda'],
      message:'Good going.. \n'
      },
      {
      question:"While four batsmen scored a century each for India in 2020, who was the player with the most fifties? (8) \n",
      answer:'KL-Rahul',
      options: ['KL-Rahul','Virat Kohli','MS Dhoni', 'Shreyash Iyer'],
      message:'Keep going.. \n'
      },
      {
      question:"Who hit the most fours for India in 2020? (68) \n",
      answer:'Rohit Sharma',
      options: ['Suresh Raina','Virat Kohli','Rohit Sharma', 'Ashok dinda'],
      message:'Hureee good job .. \n'
      },
      {
      question:"While Bumrah was the top India wicket-taker in 2020, who finished second behind him with 22 wickets? \n",
      answer:'Shardul thakur',
      options: ['Mohammad Shami','Shardul Thakur','Yuzvendra Chahal', 'Ashok dinda'],
      message:'Good going.. \n'
      },
      {
      question:"Who is the coolest captain ? \n",
      answer:'MS Dhoni',
      options: ['Kapil Dev','Virat Kohli','MS Dhoni', 'Rohit Sahrma'],
      message:'You have got it all correct .. \n'
      }
]

let score =0;
questionsList.forEach(questions=>{
   console.log(`${questions.question}`)
    let index = (userInput.keyInSelect(questions.options,'Which options?'));
  
  // console.log(index);
 // console.log(`${questions.options[index].toLowerCase()} selected and ${questions.answer.toLowerCase()}`)
  
  if(index >=0){
      if(questions.options[index].toLowerCase() === questions.answer.toLowerCase()){
        score +=1;
      }else{
        console.log("oops wrong answer \n")
        score -=1;
      }
    }
})

console.log(`hey  ${userName} your  score is  = ${score}`)