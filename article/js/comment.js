var articleId = getUrl("id");
var idValue = getValue("id");

var setTotalCount = 0;
var settotalPages = 1;
var setpage = 1;
var setrows = 10;
//评论列表
function commentList(){
    $.ajax({
        type: "GET",
        url: window.globalUrl+"comment/getlist?"+articleId+"&page="+setpage+"&rows="+setrows,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            console.log(data);
            $(".commentList").html("");
            console.log(data.data.pageDatas);
            settotalPages = data.data.totalPages;
            setTotalCount = data.data.total;
            if (data.status == 200) {

                

                console.log("settotalPages1="+settotalPages);
                $.each(data.data.pageDatas, function(i, item) {
                $(".commentList").append("<p class='row-comment'>"
            
                        +"<span class='comment-nickName'><a href='/yuuki/article/html/articleDetail.html?id="+item.userId+"'>"+item.nickName+":"+"</a>&ensp;&ensp;&ensp;</span>"
                        +"<span class='createTime'>"+"评论时间："+item.createTimeString+"&ensp;&ensp;&ensp;</span>"
                        +"<span class='contentString'>"+""+item.contentString+"</span>"
                        +"</p>");
                });
                pageDatas();
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
commentList();
function pageDatas(){
    console.log("settotalPages2="+settotalPages);
    $(document).ready(function(){
        $('#box').paging({
            initPageNo: 1, // 初始页码
            totalPages: settotalPages, //总页数

            totalCount: '合计' + setTotalCount + '条数据', // 条目总数
            slideSpeed: 600, // 缓动速度。单位毫秒
            jump: true, //是否支持跳转
            callback: function(page) { // 回调函数
                console.log("page="+page);
                setpage = page;
                
              updateCommentList();
 
            }

        })
    })
}

function updateCommentList(){
    $.ajax({
        type: "GET",
        url: window.globalUrl+"comment/getlist?"+articleId+"&page="+setpage+"&rows="+setrows,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            console.log(data);
            $(".commentList").html("");
            console.log(data.data.pageDatas);
            settotalPages = data.data.totalPages;
            setTotalCount = data.data.total;
            if (data.status == 200) {
                editor.clean.tables();
                console.log("settotalPages1="+settotalPages);
                $.each(data.data.pageDatas, function(i, item) {
                $(".commentList").append("<p class='row-comment'>"          
                        +"<span class='comment-nickName'><a href='/yuuki/article/html/articleDetail.html?id="+item.userId+"'>"+item.nickName+":"+"</a>&ensp;&ensp;&ensp;</span>"
                        +"<span class='createTime'>"+""+item.createTimeString+"<br></span>"
                        +"<span class='contentString'>"+""+item.contentString+"</span><br>"
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

//发表评论
function addComment(){
        $.ajax({
            url:window.globalUrl+"comment/insert",
            type:"post", 
            dataType:"json",
            contentType:"application/json",
            headers: {  
            'Accept': 'application/json',  
            'Content-Type': 'application/json'  
            },  


            data:JSON.stringify({"articleId":idValue,
                "contentString":editor.html.get()}),
            xhrFields: {
            withCredentials: true
            },
            crossDomain: true,
            success:function(datas){
                if (datas.status == 200) {
                    console.log("评论内容:"+editor.html.get());
                    updateCommentList();
                } else if(datas.status == 401){
                    window.location.href = "/yuuki/login.html";
                }else {
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
