import React from 'react';
import GameBoardIA from './gameBoardIA/gameBoardIA';
import GameBoardUser from './gameBoardUser/gameBoardUser';
import GameBoardActions from './gameBoardActions/gameBoardActions';
import MyModal from '../UI elements/modal/myModal'

import './gameBoard.css';

const INITIAL_STATE = {
   minValue: 1,
   maxValue: 10,
   actionValue: null,
   actionValueIA: null,
   actionValueFast: null,
   iaCompletion: null,
   playerCompletion: null,
   playerBug: null,
   modalShow: false,
   resultGame: ''
}

class GameBoard extends React.Component {
   constructor(props) {
      super(props)
      this.state = { ...INITIAL_STATE };
   }

   randomActionValue = () => {
      const { minValue, maxValue } = this.state;
      return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
   }

   codeWell = () => {
      this.setState({ actionValue: this.randomActionValue() });
      this.setState((state) => ({
         actionValueIA: Math.floor(state.actionValue / 1.1)
      }));
      if (this.state.playerCompletion < 100 && this.state.iaCompletion < 100) {
         this.setState((state) => ({
            playerCompletion: state.playerCompletion + state.actionValue > 100 ? 100 : state.playerCompletion + state.actionValue,
            playerBug: state.playerBug + Math.floor(state.actionValue / 5),
            iaCompletion: state.iaCompletion + state.actionValueIA > 100 ? 100 : state.iaCompletion + state.actionValueIA
         }), () => this.winnerCheck());
      }
   }

   codeFast = () => {
      this.setState({ actionValue: this.randomActionValue() });
      this.setState((state) => ({
         actionValueFast: Math.floor(1.5 * state.actionValue),
         actionValueIA: Math.floor(state.actionValue / 1.1)
      }));
      if (this.state.playerCompletion < 100 && this.state.iaCompletion < 100) {
         this.setState((state) => ({
            playerCompletion: state.playerCompletion + state.actionValueFast > 100 ? 100 : state.playerCompletion + state.actionValueFast,
            playerBug: state.playerBug + Math.floor(state.actionValue / 1.15),
            iaCompletion: state.iaCompletion + state.actionValueIA > 100 ? 100 : state.iaCompletion + state.actionValueIA
         }), () => this.winnerCheck());
      }
   }

   codeTest = () => {
      this.setState({ actionValue: this.randomActionValue() });
      this.setState((state) => ({
         actionValueIA: Math.floor(state.actionValue / 1.1)
      }));
      if (this.state.playerBug > 0 && this.state.iaCompletion < 100) {
         this.setState((state) => ({
            playerBug: state.playerBug - state.actionValue < 0 ? 0 : state.playerBug - state.actionValue,
            iaCompletion: state.iaCompletion + state.actionValueIA > 100 ? 100 : state.iaCompletion + state.actionValueIA
         }), () => this.winnerCheck());
      }
   }

   abandonGame = () => {
      this.setState((state) => (state = { ...INITIAL_STATE }));
   }

   winnerCheck = () => {
      const { playerCompletion, playerBug, iaCompletion } = this.state
      if (playerCompletion === 100 && playerBug === 0 && iaCompletion < 100) {
         this.handleModalShow();
         this.setState({ resultGame: 'Vous avez gagné !' });
      }
      if (playerCompletion <= 100 && playerBug !== 0 && iaCompletion === 100) {
         this.handleModalShow();
         this.setState({ resultGame: 'L\'IA a gagné !' });
      }
      if (playerCompletion === 100 && playerBug === 0 && iaCompletion === 100) {
         this.handleModalShow();
         this.setState({ resultGame: 'Égalité !' });
      }
   }

   handleModalShow = () => this.setState({ modalShow: true });
   handleModalClose = () => this.setState({ modalShow: false }, () => this.abandonGame());

   render() {
      const { iaCompletion, playerCompletion, playerBug, resultGame, modalShow } = this.state;
      return (
         <div className="gameboard">
            <h1 className="gameboard-title">Code & Gagne !</h1>
            <MyModal result={resultGame} modalShow={modalShow} iaCompletion={iaCompletion} playerCompletion={playerCompletion} playerBug={playerBug} handleModalClose={this.handleModalClose} />
            <GameBoardIA percentageComplettion={iaCompletion} />
            <GameBoardUser percentageComplettion={playerCompletion} percentageBug={playerBug} />
            <GameBoardActions codeWell={this.codeWell} codeFast={this.codeFast} abandonGame={this.abandonGame} codeTest={this.codeTest} />
         </div>
      )
   }

}

export default GameBoard;