var deck = require('deck');
var Twit = require('twit');

var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
})

var NameWords = ["amber", "anchor", "awl", "apple", "argyle", "armor", "arrow", "badger", "ballast", "branch",
				 "balsam", "bantam", "barber", "barley", "barrow", "basil", "basin", "basket", "battle", "bowl",
				 "beauty", "bedroom", "beetle", "beggar", "berry", "birdcage", "bishop", "blossom", "bluebird", 
				 "blueprint", "bonnet", "bourbon", "breakfast", "brother", "bubble", "bucket", "buoy", 
				 "burlap", "butler", "butter", "button", "cabbage", "cable", "cactus", "camphor", "candle", 
				 "cannon", "canvas", "captain", "caption", "carrot", "castle", "cattle", "cedar", "cellar", 
				 "channel", "cheddar", "cherry", "chicken", "hair", "cider", "cipher", "circle", "clover", 
				 "cobalt", "cobweb", "cocoa", "coil", "colonel", "column", "compass", "copper", "cotton", 
				 "country", "cracker", "creature", "cycle", "daisy", "danger", "daughter", "denim", "diamond", 
				 "dinner", "doctor", "dollar", "donkey", "dovetail", "dutchess", "eagle", "earthquake", 
				 "empress", "engine", "family", "father", "faucet", "favor", "feather", "fiddle", "fiddler", "funk",
				 "flower", "fortune", "freckle", "galley", "gannet", "garnet", "gingham", "goblin", "goldfish", 
				 "hammer", "hazel", "heather", "hobby", "holly", "honey", "jackal", "jacket", "jewel", "justice", 
				 "kerning", "lady", "lawyer", "leather", "leopard", "letter", "lettuce", "linen", "lion", 
				 "lobster", "locket", "lumber", "magic", "marble", "market", "marlin", "marrow", "mayor", "meta",
				 "pork", "mitten", "money", "morning", "mortar", "mother", "mountain", "mushroom", "music", 
				 "nation", "needle", "nickel", "notebook", "novel", "number", "nutmeg", "oatmeal", "ocean", 
				 "opal", "owl", "oxen", "paintbrush", "painter", "paper", "parcel", "parent", "parsley", 
				 "pebble", "pencil", "penny", "pepper", "pickle", "picture", "pistol", "pocket", "poem", 
				 "poison", "porter", "potter", "pulley", "quicksand", "quiet", "quiver", "rabbit", "railway", 
				 "rainstorm", "riddle", "rifle", "river", "robin", "sailor", "salmon", "sandstone", "satchel", 
				 "satin", "sawdust", "scarecrow", "seashore", "selvage", "serif", "shadow", "sherry", "shipwright", 
				 "shovel", "spider", "spigot", "spindle", "sprocket", "spyglass", "station", "stranger", "sugar", 
				 "summer", "sweater", "table", "tailor", "tanner", "tartan", "temper", "tempest", "temple", 
				 "tiger", "tinker", "toadstool", "tower", "trilby", "trousers", "tulip", "turkey", "parlor", 
				 "vapor", "vellum", "velvet", "victim", "village", "violet", "viper", "virtue", "vodka", 
				 "voyage", "waistcoat", "water", "weather", "whiskey", "whistle", "windmill", "winter", "wheat",
				 "wishbone", "smitten", "wonder", "woodchuck", "writer", "yarrow", "zebra", "zephyr", "zeppelin",
				 'legion','otter','exile','gaffer','marver','glory','order','orix','minnow','saddle','coffin','jasper','beryl','onyx','ruby'];

var Descriptors = ["artisanal", "artisan", "asymmetrical", "bearded", "trendy", "bespoke", "fixed-gear", "flannel", "ironic", "kitschy", "organic", 
				   "oversized", "home-brewed", "denim", "antique", "vintage", "indie", "vinyl", "ultra-urban", "austere", "lava-lampish", 
				   "recycled", "upcycled", "eccentric", "authentic", "gourmet", "pasionate", "emo", "liberal", "hand-carved", "wooden", 
				   "classic", "rare", "original", "genuine", "historic", "aged", "ancient", "timeworn", "dapper", "micro", "leather",
				   "plaid", "filtered", "tribal", "locally-made", "natural", "traditional", "hand-woven", "vegan", "non-profit", "unique",
				   "sarcastic" ];

var Products = ["cardigans", "glasses", "tattoos", "cocktails", "fedoras", "bicycles", "kale", "leggings", "mustaches", "whiskey", "beer", 
				"trucker hats", "synthesizers", "bacon", "scooters", "high-top sneakers", "baristas", "urban farming", "grilled cheese sandwiches",
				"spoons", "pot holders", "trivits", "coasters", "priuses", "colanders", "skateboards", "pickles", "jewelry", "scarves",
				"books", "boots", "typewriters", "coffee", "parchment", "vinegar", "cameras", "teas", "satchels", "soybeans", "yarn", 
				"boomboxes", "notebooks", "wine"  ];

function newBusiness(){
	var part1 = deck.pick(NameWords);
	var part2 = deck.pick(NameWords);
	var adj1 = deck.pick(Descriptors);
	var adj2 = deck.pick(Descriptors);
	var prod = deck.pick(Products);
	if (part2==part1 || adj2 == adj1) { //start over if words match.
		newBusiness(); 
	} else {
		var msg = "";
		console.log(part1);
		console.log(part2);
		console.log(adj1);
		console.log(adj2);
		console.log(prod);
		msg = msg & part1 & ' & ' & part2 & ': ' & adj1 & ' ' & adj2 & ' ' & prod;
		console.log(msg);
		T.post('statuses/update', { status: msg }, function(err, data, response) {
			console.log(data);
		});
	}
}

newBusiness();