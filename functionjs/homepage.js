var setTotalCount = 0;
var settotalPages = 0;
var setpage = 1;
var setrows = 15;

var userId = getUrl("id");
var userIdValue = getValue("id");
 console.log("userIdValue"+userIdValue);

function articleList(){
	$.ajax({
		type: "POST",
		url: window.globalUrl+"article/getlist?page="+setpage+"&rows="+setrows,
        data: JSON.stringify({
            "userId":userIdValue
        }),
		contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            console.log(data);
            $(".article-list").html("");
            console.log(data.data.pageDatas);
            settotalPages = data.data.totalPages;
            setTotalCount = data.data.total;
            if (data.status == 200) {

                

                console.log("settotalPages1="+settotalPages);
                $.each(data.data.pageDatas, function(i, item) {
                $(".article-list").append("<p class='row-article'>"
            
                        +"<span class='article-title'><a href='/yuuki/article/html/articleDetail.html?id="+item.id+"'>"+item.title+"</a>&ensp;&ensp;&ensp;</span>"
                        +"<span class='createTime'>"+"发布时间："+item.createTimeString+"&ensp;&ensp;&ensp;</span>"
                        +"<span class='nickName'>"+"作者："+item.nickName+"</span>"
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
articleList();

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
                
              updateArticleList();
 
            }

        })
    })
}

function updateArticleList(){
    $.ajax({
        type: "POST",
        url: window.globalUrl+"article/getlist?page="+setpage+"&rows="+setrows,
        data: JSON.stringify({
            "userId":userIdValue
        }),
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            console.log(data);
            $(".article-list").html("");
            console.log(data.data.pageDatas);
            settotalPages = data.data.totalPages;
            setTotalCount = data.data.total;
            if (data.status == 200) {

                

                console.log("settotalPages1="+settotalPages);
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