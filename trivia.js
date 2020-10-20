class Trivia{

    constructor(quiz){
        this.quiz = quiz;
        this.isOk = false; 
        this.selectedQuiz = [];
        this.winner = null;
        this.rounds = 3
        this.points = 0
    }

    generateRandomNumber(length){ 
        
        return Math.floor(Math.random() * length)
    }

    get oneQuiz(){ 
         
        const random  = this.generateRandomNumber(this.quiz.length)
        return this.quiz[random]
    }

    choiceQuiz(){
        
        for(var i=0; i < 3; i++){ 
            const pais = this.oneQuiz
            this.selectedQuiz.push(quiz)
        }
        return this.selectedQuiz;
    }

    get choiceWinner(){
       
        const random  = this.generateRandomNumber(this.selectedQuiz.length)
        return this.selectedQuiz[random]
    }

    buildQuiz(info,cb) {
        //info  es la informacion de la trivia
        
        const img = document.createElement('img');
        img.setAttribute('src',info.flag)
        img.setAttribute('id',info.name)
        img.addEventListener('click',cb)
        return img;
    }

    start(){
        this.choiceQuiz();
        this.winner = this.choiceWinner;
        // se va encargar de carga todo el juego
        const category = document.querySelector('category')
        const type = document.getElementById('type');
        const difficulty = document.getElementById('difficulty');
        const question = document.getElementById('question');
        const correct_answer = document.getElementById('correct_answer');
        const incorrect_answer = document.getElementById('incorrect_answer');
        category.innerHTML = "";
        type.innerHTML = "";
        difficulty.innerHTML = "";
        question.innerHTML = "";
        correct_answer.innerHTML = "";
        incorrect_answer.innerHTML = "";
        
        const clickAnswer = (event) =>{
            
            if(this.winner.name === event.target.id){
                
                respuesta.innerHTML = "¡Correcto!"
                incorrect_answer.innerHTML = "Answer: "+this.winner.correct_answer
                capital.innerHTML = "Capital: "+this.winner.question

            }else{
                respuesta.innerHTML = "¡Incorrecto!"
                incorrect_answer.innerHTML = "Answer: "+ this.winner.correct_answer
            }

        }

        this.selectedQuiz.forEach(quiz =>{
            const quiz = this.buildQuiz(question,clickAnswer)
            category.appendChild(quiz)
        })



    }

}

export default Trivia;