function articleList(){
	$.ajax({
		type: "POST",
		url: window.globalUrl+"article/getlist?page=1&rows=20",
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
                $(".article-list").append("<p class='row-article'>"
            
                        +"<span class='article-title'><a href='/yuuki/article/html/articleDetail.html?id="+item.id+"'>"+item.title+"</a>&ensp;&ensp;&ensp;</span>"
                        +"<span class='createTime'>"+"发布时间："+item.createTimeString+"&ensp;&ensp;&ensp;</span>"
                        +"<span class='nickName'>"+"作者："+item.nickName+"</span>"
                        +"</p>");
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