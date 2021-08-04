import React from 'react';
import Card from './Card';

class Cards extends React.Component {
  render() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
            </div>
        </div>
    )}
}

export default Cards;
