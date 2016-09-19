var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
  render: function(){
    return (
       <ConfirmBattle /> 
        );
  }

});

module.exports = ConfirmBattleContainer;