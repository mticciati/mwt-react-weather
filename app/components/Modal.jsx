var React = require('react');

var Modal = React.createClass({

  getDefaultProps: function() {
    return {
      title: 'Hey!'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#modal'));
    modal.open();
  },

  render: function() {
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
});

module.exports = Modal;