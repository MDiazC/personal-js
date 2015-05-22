var userJSONPath = "https://raw.githubusercontent.com/MDiazC/socialnetwork-js-project/master/js/users.json";
var postsJSONPath = "https://raw.githubusercontent.com/MDiazC/socialnetwork-js-project/master/js/posts.json";
var loggedUserId = 5;
var usersData;
var postsData;


function showUpdate(){
    $('udpate').show();
}

function loadUserInfo(){
    var source   = $("#user-template").html();
    var template = Handlebars.compile(source);
    var context = {
        user_image: '../'+usersData[loggedUserId].pic, 
        user_name: usersData[loggedUserId].username, 
        user_text: usersData[loggedUserId].about
    };
    var html    = template(context);
    $('#logged_user').append(html);
}
function loadPosts(){

    var source   = $("#posts-template").html();
    var template = Handlebars.compile(source);

    var context=[];
    var subpost_info;
    var subpost=[];
    var post;
    var posts= []; 
    var userId=0;

    for(var pos in postsData){
        post={};
        userId=postsData[pos].userId
        post.user_image='../'+usersData[userId].pic;
        post.user_text=usersData[userId].about;
        post.user_name=usersData[userId].username;
        post.user_post=postsData[pos].content;
        post.post_id=pos;

        if(postsData[pos].comments.length > 0){
            subpost=[];
            for(var subpos in postsData[pos].comments){
                subpost_info={}
                userId=postsData[pos].comments[subpos].userId;
                subpost_info.user_image='../'+usersData[userId].pic;
                subpost_info.user_text=usersData[userId].about;
                subpost_info.user_name=usersData[userId].username;
                subpost_info.user_post=postsData[pos].comments[subpos].content
                subpost.push(subpost_info);
            }
            post.reply=subpost;
        }
        posts.push(post);
    }
    context.posts=posts;
    var html    = template(context);
    $('#timeline').append(html);
}

function loadData(){

    var url= userJSONPath+"?callback=?";
    $.ajax({
       type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonCallbackUser',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
           usersData=json;
           loadUserInfo();
        },
        error: function(e) {
            alert("Unexpected error when loading info, please reload");
           console.log(e.message);
        }
    });

    url= postsJSONPath+"?callback=?";
    $.ajax({
       type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonCallbackPost',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            postsData=json;
            loadPosts();
        },
        error: function(e) {
            alert("Unexpected error while loading, please reload");
           console.log(e.message);
        }
    });
}






