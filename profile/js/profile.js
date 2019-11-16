var setTotalCount = 0;
var settotalPages = 1;
var setpage = 1;
var setrows = 10;

var userId = getUrl("id");//id=3
var userIdValue = getValue("id");//3
 console.log("userIdValue:"+userIdValue)
 console.log("userId:"+userId)


function profile(){
	$.ajax({
        type: "POST",
        
        url: window.globalUrl+"profile/user?page="+setpage+"&rows="+setrows,
        data: JSON.stringify({
            "id":userIdValue
        }),
		contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){

            console.log('data'+data);
            

            if (data.status == 200) {
                $(".article-list").html("");
                $(".user-profile").html("");
                console.log(data.data.pageBean.pageDatas);
                settotalPages = data.data.pageBean.totalPages;
                setTotalCount = data.data.pageBean.total;

                $(".user-profile").append("<div>"
                        +"<h1 class=''><b>昵称：</b><a href='/yuuki/profile/index.html?id="+data.data.id+">"+data.data.nickName+"</a></h1>"
                        +"<div class=''>"
                        +"<h1 class=''>账号:"+data.data.userName+"</h1>"
                        +"</div>"
                        +"<div class=''>"
                        +"<p>"+"注册时间:"+data.data.createTime+"</p>"                      
                        +"</div>"
                        +"</div>");

                console.log("settotalPages1="+settotalPages);
                $.each(data.data.pageBean.pageDatas, function(i, item) {
                $(".article-list").append("<p class='row-article'>"
            
                        +"<span class='article-title'><a href='/yuuki/article/html/articleDetail.html?id="+item.id+"'>"+item.title+"</a>&ensp;&ensp;&ensp;</span>"
                        +"<span class='createTime'>"+"发布时间："+item.createTimeString+"&ensp;&ensp;&ensp;</span>"
                        +"<span class='nickName'><a href='/yuuki/profile/index.html?id="+item.userId+"'>"+"作者："+item.nickName+"</a></span>"
                        +"</p>");
                });
                console.log("pageDatasparam:"+data.data.id)
                pageDatas(data.data.id);
                
            }else if (data.status == 401) {
                window.location.href = "/yuuki/login.html"
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

function pageDatas(userIdParam){
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
                console.log("pageDatasparam1:"+userIdParam);
                setpage = page;
                
                updateProfile(userIdParam);
 
            }

        })
    })
}


function updateProfile(userIdParam){
    console.log("pageDatasparam2:"+userIdParam);
	$.ajax({
        type: "POST",
        
        url: window.globalUrl+"profile/user?page="+setpage+"&rows="+setrows,
        data: JSON.stringify({
            "id":userIdParam
        }),
		contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){

            if (data.status == 200) {
                $(".article-list").html("");
                $(".user-profile").html("");
                console.log(data.data.pageBean.pageDatas);
                settotalPages = data.data.pageBean.totalPages;
                setTotalCount = data.data.pageBean.total;
                
               $(".user-profile").append("<div>"
                        +"<h1 class=''><b>昵称：</b><a href='/yuuki/profile/index.html?id="+data.data.id+">"+data.data.nickName+"</a></h1>"
                        +"<div class=''>"
                        +"<h1 class=''>账号:"+data.data.userName+"</h1>"
                        +"</div>"
                        +"<div class=''>"
                        +"<p>"+"注册时间:"+data.data.createTime+"</p>"                      
                        +"</div>"
                        +"</div>");

                console.log("settotalPages1="+settotalPages);
                $.each(data.data.pageBean.pageDatas, function(i, item) {
                $(".article-list").append("<p class='row-article'>"
            
                        +"<span class='article-title'><a href='/yuuki/article/html/articleDetail.html?id="+item.id+"'>"+item.title+"</a>&ensp;&ensp;&ensp;</span>"
                        +"<span class='createTime'>"+"发布时间："+item.createTimeString+"&ensp;&ensp;&ensp;</span>"
                        +"<span class='nickName'><a href='/yuuki/profile/index.html?id="+item.userId+"'>"+"作者："+item.nickName+"</a></span>"
                        +"</p>");
                });
            }else if (data.status == 401) {
                window.location.href = "/yuuki/login.html"
            }else{
                console.log(data.status);
            }
        },
        error: function(jqXHR){
            alert("Error：" + jqXHR.status);
        },
	})
}