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
				 "blueprint", "bonnet", "bourbon", "breakfast", "brother", "bubble", "bucket", "buoy", "horn",
				 "burlap", "butler", "butter", "button", "cabbage", "cable", "cactus", "camphor", "candle", 
				 "cannon", "canvas", "captain", "caption", "carrot", "castle", "cattle", "cedar", "cellar", 
				 "channel", "cheddar", "cherry", "chicken", "hair", "cider", "cipher", "circle", "clover", 
				 "cobalt", "cobweb", "cocoa", "coil", "colonel", "column", "compass", "copper", "cotton", "corn",
				 "country", "cracker", "creature", "cycle", "daisy", "danger", "daughter", "denim", "diamond", 
				 "dinner", "doctor", "dollar", "donkey", "dovetail", "dutchess", "eagle", "earthquake", "fossil",
				 "empress", "engine", "family", "father", "faucet", "favor", "feather", "fiddle", "fiddler", "funk",
				 "flower", "fortune", "freckle", "galley", "gannet", "garnet", "gingham", "goblin", "goldfish", "foam",
				 "hammer", "hazel", "heather", "hobby", "holly", "honey", "jackal", "jacket", "jewel", "justice", 
				 "kerning", "lady", "lawyer", "leather", "leopard", "letter", "lettuce", "linen", "lion", "lace",
				 "lobster", "locket", "lumber", "magic", "marble", "market", "marlin", "marrow", "mayor", "meta",
				 "pork", "mitten", "money", "morning", "mortar", "mother", "mountain", "mushroom", "music", "night",
				 "nation", "needle", "nickel", "notebook", "novel", "number", "nutmeg", "oatmeal", "ocean", 
				 "opal", "owl", "oxen", "paintbrush", "painter", "paper", "parcel", "parent", "parsley", "goose",
				 "pebble", "pencil", "penny", "pepper", "pickle", "picture", "pistol", "pocket", "poem", "soak",
				 "poison", "porter", "potter", "pulley", "quicksand", "quiet", "quiver", "rabbit", "railway", "skip",
				 "rainstorm", "riddle", "rifle", "river", "robin", "sailor", "salmon", "sandstone", "satchel", 
				 "satin", "sawdust", "scarecrow", "seashore", "selvage", "serif", "shadow", "sherry", "shipwright", 
				 "shovel", "spider", "spigot", "spindle", "sprocket", "spyglass", "station", "stranger", "sugar", 
				 "summer", "sweater", "table", "tailor", "tanner", "tartan", "temper", "tempest", "temple", "tongue",
				 "tiger", "tinker", "toadstool", "tower", "trilby", "trousers", "tulip", "turkey", "parlor", "udder",
				 "vapor", "vellum", "velvet", "victim", "village", "violet", "viper", "virtue", "vodka", "vault",
				 "voyage", "waistcoat", "water", "weather", "whiskey", "whistle", "windmill", "winter", "wheat",
				 "wishbone", "smitten", "wonder", "woodchuck", "writer", "yarrow", "zebra", "zephyr", "zeppelin",
				 'legion','otter','exile','gaffer','marver','glory','order','orix','minnow','saddle','coffin','jasper','beryl','onyx','ruby'];

var Descriptors = ["artisanal", "artisan", "asymmetrical", "bearded", "trendy", "bespoke", "fixed-gear", "flannel", "ironic", "kitschy", "organic", 
				   "oversized", "home-brewed", "denim", "antique", "vintage", "indie", "vinyl", "ultra-urban", "austere", "lava-lampish", 
				   "recycled", "upcycled", "eccentric", "authentic", "gourmet", "pasionate", "emo", "liberal", "hand-carved", "wooden", 
				   "classic", "rare", "original", "genuine", "historic", "aged", "ancient", "timeworn", "dapper", "micro", "leather",
				   "plaid", "filtered", "tribal", "locally-made", "natural", "traditional", "hand-woven", "vegan", "non-profit", "unique",
				   "sarcastic", "forged", "smoked", "human-powered", "lavender", "creative", "fair-trade", "debonair" , "eco-friendly",
				   "low-impact", "green", "fragrant", "fertile", "holistic", "velvety", "pescatarian", "thick", "paleo", "quixotic", "panoramic",
				   "dessert", "gamy", "discreet", "questionable", "nauseating", "shady", "boring", "imaginative", "trustworthy", "innocent", 
				   "silky", "charming", "nebulous", "buttery", "onerous", "zany", "damaged", "imperfect", "abandoned", "furtive", "dusty",
				   "obsolete", "accessible", "goofy", "savory", "ethereal", "rhetorical", "knotty", "fragile", "dramatic", "rural", "selective",
				   "hallowed", "haunted", "jalapeno", "simple", "kindhearted", "rebellious", "lucky", "alcoholic", "heartbreaking", "disillusioned",
				   "sophisticated", "fermented"  ];

var Products = ["cardigans", "glasses", "tattoos", "cocktails", "fedoras", "bicycles", "kale", "leggings", "mustaches", "whiskey", "beer", 
				"trucker hats", "synthesizers", "bacon", "scooters", "high-top sneakers", "baristas", "urban farming", "grilled cheese sandwiches",
				"spoons", "pot holders", "trivets", "coasters", "priuses", "colanders", "skateboards", "pickles", "jewelry", "scarves",
				"books", "boots", "typewriters", "coffee", "parchment", "vinegar", "cameras", "teas", "satchels", "soybeans", "yarn", 
				"boomboxes", "notebooks", "wine", "kettles" , "oils", "watches", "belts", "towels", "forks", "sporks", "salsa", "undergarments",
				"gloves", "man-buns", "mattresses", "dog collars", "toilet paper", "shoelaces", "suspenders", "top hats", "blenders", "milk",
				"salt", "abacuses", "headphones", "mushrooms", "picture frames", "kimchi", "kombucha", "porridge", "trousers", "scissors", 
				"toothbrushes", "dental floss", "razors", "shaving foam", "rice pudding", "toys", "toothpaste", "envelopes", "eggnog", "umbrellas",
				"ice cubes", "jellies and jams", "pizza", "beef", "mittens", "juice", "smoothies", "breads", "oatmeal", "pencils", "yo-yos",
				"whistles", "soaps", "crackers", "eggs", "popcorn", "cheese", "guitars", "quinoa", "yogurt", "sriracha", "cupcakes", "pistachios",
				"avocados", "chocolate", "nutella", "vodka", "honey", "headbands", "jorts", "overalls", "soups", "stews"   ];

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function newBusiness(){
	var part1 = deck.pick(NameWords).capitalizeFirstLetter();
	var part2 = deck.pick(NameWords).capitalizeFirstLetter();
	var adj1 = deck.pick(Descriptors);
	var adj2 = deck.pick(Descriptors);
	var prod = deck.pick(Products);
	if (part2==part1 || adj2 == adj1) { //start over if words match.
		newBusiness(); 
	} else {
		var msg = "";
		msg = part1 + " & " + part2 + ": " + adj1 + " " + adj2 + " " + prod;
		console.log(msg);
		T.post('statuses/update', { status: msg }, function(err, data, response) {
			console.log(data);
		});
	}
}

newBusiness();