import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import React from 'react';

var StarsFrame = React.createClass({
  render: function() {
    return (
      <div id="stars-frame">
        <div className="well">
          <span className="glyphicon glyphicon-star"></span>
        </div>
      </div>
    );
  }
});

var ButtonFrame = React.createClass({
  render: function() {
    return (
      <div>ButtonFrame</div>
    );
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    return (
      <div>AnswerFrame</div>
    );
  }
});

var Game = React.createClass({
  render: function() {
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <StarsFrame />
        <ButtonFrame />
        <AnswerFrame />
      </div>
    );
  }
});

React.render(
  <Game />,
  document.getElementById('container')
);
