/**
 * A reference list of all of the possible websocket events that could be fired
 * and comments that explain the events
 *
 * @type {{}}
 */

var events ={

	/**
	 * Events regarding the connection and negotiation of the username login
	 */
	connect : 'connect', //A connection event that is fired when socket.io is connected, a default
	loginVerified : 'loginVerified', //An event that fires when a login has been succesfully verified
	loginFailure : 'loginFailure', //An event that fires when a login has failed
	loginAttempt : 'loginAttempt', //An event that fires when a login attempt must be verified


	/**
	 * Everything below this line is Adobe Specific
	 */
	beginPoll: 'beginPoll', //An event that tells the Adobe side to start polling extendScript for ES events
	pollForMode:'pollForMode' //An event that instructs the Adobe side to start polling ES for a mode change

	/**
	 * Everything below this line is browser specific
	 */
};

module.exports = events;