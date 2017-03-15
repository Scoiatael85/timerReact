var React = require('react');
var Clock = require('Clock');


var Timer = (props) => {
	return (
		<div>
			<Clock totalSeconds={9}/>
		</div>
	)
}

module.exports = Timer;