// quick fix for Cloud9 warning:
/* global $ myPlaylist*/
var songInput = $("#songInput").val();
var artistInput = $("#artistInput").val();
var mp3Url = $("#mp3-url").val();
var imageUrl = $("#image-url").val();

var mySong = {
	"song":"songInput",
	"aritst":"artistInput",
	"mp3url":"mp3Url",
	"imageURL":"imageURL"
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"imageURL":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"imageURL":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"imageURL":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]

$( document ).ready(function() {
	displayList(myPlayList);
});

function displayList(){
	var title = myPlaylist[0].title;
	var artist = myPlaylist[0].artist;
	var mp3URL = myPlaylist[0].mp3URL;
	var imageURL = myPlaylist[0].imageURL;
	for (var i=0; i < myPlaylist.length; i++) {
		$("body").append(`
			<figure class=”frame”>
				<img src=${imageURL}>
				<figcaption>${title} by ${artist}</figcaption>
			</figure>
		`)
	}
}
	
function clearList(){
  
  
  
}

function addSong(){
	myPlaylist.push("");

}
