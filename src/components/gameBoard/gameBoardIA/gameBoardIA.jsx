import ProgressBarCompletion from '../../UI elements/progressBar/progressBarCompletion/progressBarCompletion';

import './gameBoardIA.css';

function GameBoardIA(props) {
   return (
      <div className="gameboard--ia">
         <h3 className="gameboard--title">IA</h3>
         <ProgressBarCompletion {...props} />
      </div>
   )
}

export default GameBoardIA;