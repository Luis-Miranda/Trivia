import axios from 'axios';  
import Trivia from './trivia';
import './styles/main.scss';

function init(){

    axios.get('https://opentdb.com/api.php?amount=10')
        .then((response) => {
            
            console.log(response.status) /
            console.log(response.data) 
            const trivia = new Trivia(response.data)
            trivia.start()
        })
        .catch((error) => {
            
         
        })
}

init();
