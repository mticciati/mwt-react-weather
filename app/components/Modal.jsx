import React from 'react';
import PropTypes from 'prop-types';

export default class Modal extends React.Component {

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    var modal = new Foundation.Reveal($('#modal'));
    modal.open();
  }

  render() {
    var {title, message} = this.props;
    return (
      <div className="reveal tiny text-center" id="modal" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <button className="button hollow" data-close="">
          Okay
        </button>
      </div>
    );
  }
};

Modal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};