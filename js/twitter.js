var userJSONPath = "https://raw.githubusercontent.com/MDiazC/socialnetwork-js-project/master/js/users.json";
var postsJSONPath = "https://raw.githubusercontent.com/MDiazC/socialnetwork-js-project/blob/master/js/posts.json";
var loggedUserId = 5;


function showUpdate(){
    $('udpate').show();
}

function loadUserInfo(){
var source   = $("#user-template").html();
var template = Handlebars.compile(source);
var context = {title: "My New Post", body: "This is my first post!"};
var html    = template(context);
$('#logged_user').append(html);
}
function loadPosts(){
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);
var context = {title: "My New Post", body: "This is my first post!"};
var html    = template(context);
$('#logged_user').append(html);
}

function loadData(){

$.ajax({
url: "https://raw.githubusercontent.com/MDiazC/socialnetwork-js-project/master/js/users.json",

	type: "GET",
	dataType: "jsonp",
	success: function(respuesta){
console.log("Recibes: ", respuesta);
	}
});
$.getJSON( "https://raw.githubusercontent.com/MDiazC/socialnetwork-js-project/master/js/users.json", function( json ) {
  console.log( "JSON Data: " + json );
 });
var json = $.getJSON(userJSONPath);
var usersData = eval("(" +json.responseText + ")");
var json = $.getJSON(postsJSONPath);
var postsData = eval("(" +json.responseText + ")");

}

