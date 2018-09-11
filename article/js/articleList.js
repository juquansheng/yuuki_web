function articleList(){
	$.ajax({
		type: "POST",
		url: "http://localhost:8927/yuuki/article/getlist?page=1&rows=20",
        data: JSON.stringify({
            "userId":null
        }),
		contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            console.log(data.data.pageDatas);
            if (data.status == 200) {
                $.each(data.data.pageDatas, function(i, item) {
                $(".article-list").append("<p class='row'>"
            
                        +"<span class='article-title'><a href='articleDetail.html?id="+item.id+"'>"+item.title+"</a></span>"
                        +"<span class='createTime'>"+"发布时间："+item.createTimeString+"</span>"
                        +"<span class='nickName'>"+""+item.nickName+"</span>"
                        +"</p><br>");
                });
            }else if (data.status == 401) {
                window.location.href = "login.html"
            }else{
                console.log(data.message);
            }
        },
        error: function(jqXHR){
            alert("Error：" + jqXHR.status);
        },
	})
}
articleList();