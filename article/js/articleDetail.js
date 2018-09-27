var articleId = getUrl("id");



console.log("id:"+articleId);
//获取文章详情
function articleDetail(){
	$.ajax({
		type: "GET",
		url: globalUrl+"article/getdetail?"+articleId,
		contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            console.log(data.data.title);
            if (data.status == 200) {
                $(".article-title").append("<p class='row'>"
                        +"<span class='article-title'>"+data.data.title+"</a></span>"
                        +"</p><br>");

                $(".article-content").append("<p class='row'>"
                        +"<span class='article-content'>"+data.data.contentString+"</a></span>"
                        +"</p><br>");

                $(".article-user").append("<p class='row'>"
                        +"<span class='nickName'><a href='/yuuki/homepage.html?id="+data.data.userId+"'>"+"作者："+data.data.nickName+"</a></span>"
                        +"</p><br>");

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
articleDetail();
//编辑文章
function toeEdit(){
        window.location.href = "/yuuki/article/html/editArticle.html?"+articleId;
    }
//用户是否可以编辑文章
function isbelong(){
        $.ajax({
            url:window.globalUrl+"article/isbelong?"+articleId,
            type:"get", 
            dataType:"json",
            contentType:"application/json",
            headers: {  
            'Accept': 'application/json',  
            'Content-Type': 'application/json'  
            },  
            xhrFields: {
            withCredentials: true
            },
            crossDomain: true,
            success:function(datas){
                console.log(datas.message);
                if (datas.status == 200) {
                    $(".isbelong").append("<button class='edit' onclick='toeEdit()'>编辑</button>");
                }else{
                    
                }
            },
            error:function(datas){
                console.log("error")
            }
        })
    }
isbelong();
