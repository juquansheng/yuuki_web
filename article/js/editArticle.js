var articleId = getUrl("id");
var idValue = getValue("id");


function articleDetail(){
	$.ajax({
		type: "GET",
		url: window.globalUrl+"article/getdetail?"+articleId,
		contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            console.log(data);
            if (data.status == 200) {

                $("#edit-form").append("<input type='hidden' name='id' id='article-id' value="+idValue+">"
                    +"<p>文章标题：<input class='title' id='article-title' type='text' name='title' value="+data.data.title+">"
                    +"</p><!-- 加载编辑器的容器 --><script id='container' name='contentString' type='text/plain'>"+data.data.contentString
                    +"</script><p><input type='button' onclick='articleEdit()' value='发布'></p>");
                
            
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
if (articleId) {
    articleDetail();
}



function articleEdit(){
        $.ajax({
            url:window.globalUrl+"article/edit",
            type:"post", 
            dataType:"json",
            contentType:"application/json",
            headers: {  
            'Accept': 'application/json',  
            'Content-Type': 'application/json'  
            },  


            data:JSON.stringify({"id":idValue,"title":$("#article-title").val(),
                "contentString":UE.getEditor('container').getContent()}),
            xhrFields: {
            withCredentials: true
            },
            crossDomain: true,
            success:function(datas){
                if (datas.status == 200) {
                    console.log(datas);
                  
                    if (document.referrer = document.location) {
                        window.location.href = "/yuuki/article/html/articleDetail.html?id="+datas.data.id;
                    }else{
                        window.location.href = document.referrer;
                    }
                    
                } else {
                    console.log(datas.message)
                    alert(datas.message)
                }
                //location="http://localhost:8080/yuuki/index.html"
            },
            error:function(){
                alert("错误")
            }
        })
    }


function articleAdd(){
        $.ajax({
            url:window.globalUrl+"article/edit",
            type:"post", 
            dataType:"json",
            contentType:"application/json",
            headers: {  
            'Accept': 'application/json',  
            'Content-Type': 'application/json'  
            },  


            data:JSON.stringify({"title":$("#article-title").val(),
                "contentString":UE.getEditor('container').getContent()}),
            xhrFields: {
            withCredentials: true
            },
            crossDomain: true,
            success:function(datas){
                if (datas.status == 200) {
                    console.log(datas);
                  
                    if (document.referrer = document.location) {

                        window.location.href = document.referrer;
                    }else{
                        window.location.href = document.referrer;
                    }
                    
                } else {
                    console.log(datas.message)
                    alert(datas.message)
                }
                //location="http://localhost:8080/yuuki/index.html"
            },
            error:function(){
                alert("错误")
            }
        })
    }