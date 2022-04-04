import React, { Component } from 'react'
import './Game.css';
import logo from '../logo.svg';
import rock from '../rock.svg';
import paper from '../paper.svg';
import scissors from '../scissors.svg';

var score = 0;
var escore = 0;
var counter = 0;

class Game extends Component {
    
    constructor(props){
        super();

        this.state = {
            name: 'Rock',
        }
    }

    //hace referencia a actualizar lo de adentro nomas una vez
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name: 'Scissors',
            })
        }, 2000);
    }


    handleOnClicks = () => {
        const random = generateRandomNumber(4);
        const enemy = enemyChoice(random);
        const variable = 1;
        const text = calculateWinner(variable, random);
        const winner = winnerWho();
        this.setState({
            enemy: enemy,
            message: text,
            winner: winner, 
        });
    }
    handleOnClickr = () => {
        const random = generateRandomNumber(4);
        const enemy = enemyChoice(random);
        const variable = 2;
        const text = calculateWinner(variable, random);
        const winner = winnerWho();

        this.setState({
            enemy: enemy,
            message: text,
            winner: winner, 
        });
    }
    handleOnClickp = () => {
        const random = generateRandomNumber(4);
        const enemy = enemyChoice(random);
        const variable = 3;
        const text = calculateWinner(variable, random);
        const winner = winnerWho();
        this.setState({
            enemy: enemy,
            message: text,
            winner: winner, 
        });
    }


  render() {
    const{name} = this.state;
    return (
       <div>
           <header className="App-header">
                <a  a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">
                   <img src={logo} className="App-logo" alt="logo" />
                </a>
            </header>
           <h1>{name}</h1>
           <h2>Welcome to Rock Paper Scissors 0.2</h2>
           <h2 className="glow">Score: {score} vs {escore}</h2>
           <h3>Choose your weapon</h3>
           <h2>{this.state.message}</h2>
           <button onClick={this.handleOnClickr} ><img src={rock}  className="choice" alt="rock" /></button>
           <button onClick={this.handleOnClickp} ><img src={paper} className="choice" alt="paper" /></button>
           <button onClick={this.handleOnClicks} ><img src={scissors} className="choice" alt="scissors" /></button>
           <h2 className="glow">{this.state.enemy}</h2>
           <h1 className="glowwinner">{this.state.winner}</h1>
       </div> 


    )
  }
}

export default Game;


function generateRandomNumber(max, min=1) {
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateWinner(player, random){
    console.log(random);
    counter++;
    if(player === random){// its a tie
        return "Its a tie";
    }
    else if(player === 1 && random === 2){ //scissors vs rock
        escore++;
        return "You Lost!";
    }
    else if(player === 1 && random === 3){ //scissors vs paper
        score++;
        return "You Won!";
    }
    else if(player === 2 && random === 1){ //rock vs scissors
        score++;
        return "You Won!";
    }
    else if(player === 2 && random === 3){ //rock vs paper
        escore++;
        return "You Lost!";
    }
    else if(player === 3 && random === 1){ //paper vs scissors
        escore++;
        return "You Lost!";
    }
    else if(player === 3 && random === 2){ //paper vs rock
        score++;
        return "You Won!";
    }
    else{
        return "error";
    }
}

function enemyChoice(random){
    if (random === 1){
        return "Enemy chose Scissors";
    }
    else if (random === 2){
        return "Enemy chose Rock";
    }
    else if (random === 3){
        return "Enemy chose Paper";
    }
    else{
        return "error";
    }


}

function winnerWho(){
    if(score >= 2 && escore < score && counter >= 3){
        return "YOU WON THE 3 ON 3";
    }
    else if(escore >= 2 && score < escore && counter >= 3){
        return "YOU LOST THE 3 ON 3";
    }
    else if(escore > score && counter === 3){
        return "YOU LOST THE 3 ON 3";
    }
    else if(score > escore && counter === 3){
        return "YOU WON THE 3 ON 3";
    }
    else if(score == escore){
        return "it was a tie at the end";
    }
    else{
        return "";
    }
}