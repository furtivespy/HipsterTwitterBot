var deck = require('deck');
var Twit = require('twit');

var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...'
})

function newBusiness(){
	T.post('statuses/update', { status: 'Hello World!' }, function(err, data, response) {
		console.log(data);
	});
}