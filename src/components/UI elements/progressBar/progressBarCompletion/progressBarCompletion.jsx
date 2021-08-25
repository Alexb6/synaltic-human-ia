import { ProgressBar } from 'react-bootstrap';

import './progressBarCompletion.css';

function ProgressBarCompletion({ percentageComplettion }) {
   return (
      <div className="progress--bar completion">
         <h6 className="progress--label">Complétion</h6>
         <ProgressBar now={percentageComplettion} label={`${percentageComplettion}%`} />
      </div>
   )
}

export default ProgressBarCompletion;