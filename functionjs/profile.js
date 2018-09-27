function profile(){
	$.ajax({
		type: "GET",
		url: window.globalUrl+"profile/user",
		contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            if (data.status == 200) {
                $(".user-profile").append("<div class='row'>"
                        +"<div class='article-list-inner'>"
                        +"<div class='article-header'>"
                        +"<h1 class='article-header-title'><b>昵称：</b><a href='profile.html'>"+data.data.nickName+"</a></h1>"
                        +"<div class='article-meta'>"
                        +"<span class='pull-left mete-content'><i class='fa fa-calendar'></i></span>"
                        +"<span class='pull-left mete-content'><i class='fa fa-folder-open-o'></i>"+"账号:"+data.data.userName+"</span>"
                        +"</div>"
                        +"</div>"
                        +"<div class='article-content'>"
                        +"<p>"+"注册时间:"+data.data.createTime+"</p>"
                        +"</div>"
                        +"</div>"
                        +"</div>");
            }else if (data.status == 401) {
                window.location.href = "login.html"
            }else{
                console.log(data.status);
            }
        },
        error: function(jqXHR){
            alert("Error：" + jqXHR.status);
        },
	})
}
profile();