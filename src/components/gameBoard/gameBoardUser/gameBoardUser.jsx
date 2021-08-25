import ProgressBarCompletion from '../../UI elements/progressBar/progressBarCompletion/progressBarCompletion';
import ProgressBarBug from '../../UI elements/progressBar/progressBarBug/progressBarBug'

import './gameBoardUser.css';

function GameBoardUser(props) {
   return (
      <div className="gameboard-user">
         <h3 className="gameboard--title">Joueur</h3>
         <ProgressBarCompletion {...props} />
         <ProgressBarBug {...props} />
      </div>
   )
}

export default GameBoardUser;

