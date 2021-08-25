import { ProgressBar } from 'react-bootstrap';

import './progressBarBug.css';

function ProgressBarBug({ percentageBug }) {
   return (
      <div className="progress--bar bug">
         <h6 className="progress--label">Bug</h6>
         <ProgressBar now={percentageBug} label={`${percentageBug}%`} />
      </div>
   )
}

export default ProgressBarBug;