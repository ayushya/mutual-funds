import React from 'react';

export default class CardItem extends React.PureComponent {
  render () {
    return (
      <div className="card-item">
        <div className="card-item-container">
          <div className="card-item-label">
            {this.props.label}
          </div>
          <div className="card-item-content">
            {this.props.value}
          </div>
        </div>
      </div>
    );
  }
}