var React = require('react');
var PropTypes = React.propTypes;
var styles = require('../styles');

/*function puke (object) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}*/

function ConfirmBattle (props) {
	return props.isLoading === true
		? <p> LOADING </p>
		//: <div> CONFIRM BATTLE: {puke(props)} </div>
		: <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
         <div className='col-sm-6'>
          <p className='lead'>Player 1</p>
          Player 1 Info
         </div>
         <div className='col-sm-6'>
          <p className='lead'>Player 2</p>
          Player 2 Info
         </div>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
            	Initiate Battle!
            </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
             LINK TO /PLAYERONE 3.50
            </Link>
          </div>
        </div>
      </div>
}

ConfirmBattle.propTypes = {
	isLoading: propTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired

}

module.exports = ConfirmBattle;