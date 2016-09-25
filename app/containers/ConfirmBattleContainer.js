var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
      return {
        isLoading: false,
        playerInfo: []
      }
    },
    componentDidMount: function () {
      var query = this.props.location.query;
      // Fetch info from Github then update state
      githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
        .then(function (players) {
          this.setState({
            isLoading: false,
            playersInfo: [olayers[0], players[1]]
          })
        }.bind(this))
    },
    render: function(){
    return (
       <ConfirmBattle isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} /> 
        );
  }

});

module.exports = ConfirmBattleContainer;