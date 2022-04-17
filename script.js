var database = [
	{
		username: "furkan",
		password: "webmaster",
		friends: ["abdullah", "yeşim"]
	},
	{
		username: "abdullah",
		password: "123",
		friends: ["furkan", "yeşim"]
	},
	{
		username: "yeşim",
		password: "777",
		friends: ["abdullah", "furkan"]
	}
];
var newsFeed = [
	{
		username: "abdullah",
		tweet: "Bilet fiyatları uçtu uçtu!!!"
	},
	{
		username: "yeşim",
		tweet: "şarjım bitti :("
	}
	,
	{
		username: "furkan",
		tweet: "Javascript bir harika"
	}
];
var userNamePrompt = prompt("Kullanıcı Adınızı Giriniz!");
var passwordPrompt = prompt("Şifrenizi Giriniz!");

function isUserValid(user, pass) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === user && database[i].password === pass) {
			return true;
		}
	}
	return false;
}

function getFriends(user) {
	for (var i = 0; i < database.length; i++) {
		if (user === database[i].username) {
			return database[i].friends;
		}
	}
	return false;
}

function getTweets(friend) {
	for (var i = 0; i < newsFeed.length; i++) {
		if (friend === newsFeed[i].username) {
			return newsFeed[i].tweet;
		}
	}
}

function logTweets(friend) {
	console.log(friend,getTweets(friend));
}

function singIn(user, pass) {
	if (isUserValid(user, pass)) {
		getFriends(user).forEach(logTweets);
	} else {
		console.log("sorry wrong username and password");
	}
}
singIn(userNamePrompt, passwordPrompt);