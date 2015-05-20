var userJSONPath = "users.json";
var postsJSONPath = "posts.json";

var json = $.getJSON(userJSONPath);
var usersData = eval("(" +json.responseText + ")");
var json = $.getJSON(postsJSONPath);
var postsData = eval("(" +json.responseText + ")");

var loggedUserId = 5;

function showUpdate(){
    $('udpate').show();
}

function loadUserInfo(){

}
function loadPosts(){

}
