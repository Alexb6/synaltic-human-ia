import { Button } from 'react-bootstrap';

import './gameBoardActions.css';

function GameBoardActions({ codeWell, codeFast, abandonGame, codeTest }) {
   // console.log('codeWell---------------', codeWell);
   return (
      <div className="gameboard-actions">
         <div className="button--set coding--actions">
            <Button variant="primary" onClick={codeWell}>Coder Bien</Button>
            <Button variant="primary" onClick={codeFast}>Coder Vite</Button>
         </div>
         <div className="button--set other--actions">
            <Button variant="warning" onClick={codeTest}>Tester</Button>
            <Button variant="danger" onClick={abandonGame}>Abandonner</Button>
         </div>
      </div>
   )
}

export default GameBoardActions;