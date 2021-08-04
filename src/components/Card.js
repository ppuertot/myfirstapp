import React from 'react';

import image1 from '../assets/image1.jpg';

class Card extends React.Component {
  render() {
    return (
    <div className="card text-center bg-dark">
        <img src={image1} alt=""></img>
        <div className="card-body text-light">
            <h4 className="card-title">My title</h4>
            <p className="card-text text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non nulla blandit, sollicitudin elit sed, sagittis leo. Nulla sollicitudin elit eu arcu sollicitudin dapibus. Maecenas bibendum magna sed ex vulputate semper.
            </p>
            <a href="#!" className="btn btn-outline-secondary rounded-0">Go to this website</a>
        </div>
    </div>
    )}
}

export default Card;
