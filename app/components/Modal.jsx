import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

export default class Modal extends React.Component {

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    var {title, message} = this.props;
    let modalMarkup = (
      <div className="reveal tiny text-center" id="modal" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <button className="button hollow" data-close="">
          Okay
        </button>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#modal'));
    modal.open();
  }

  render() {
    
    return (
      <div>
      </div>
    );
  }
};

Modal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};