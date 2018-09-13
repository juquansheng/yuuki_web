function articleList() {
    $.ajax({
        type: "GET",
        url: window.globalUrl+"/index/index",
        /*data: {
            pageNum:pageNum,
            categoryId:1,
            orderBy:"update_time-desc"
        },*/
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            if (data.status == 200) {
                //$(".article-loding").removeClass('show-more');
                $.each(data.data,function (i,item) {
                    $(".article-list").append("<div class='row'>"
                        +"<div class='article-list-inner'>"
                        +"<div class='article-header'>"
                        +"<h1 class='article-header-title'><a href='/article.html?articleId="+item.id+"'>"+item.nickName+"</a></h1>"
                        +"<div class='article-meta'>"
                        +"<span class='pull-left mete-content'><i class='fa fa-calendar'></i></span>"
                        +"<span class='pull-left mete-content'><i class='fa fa-folder-open-o'></i>"+item.phone+"</span>"
                        +"<span class='pull-left mete-content'><i class='fa fa-commenting-o'></i>"+item.nickName+"</span>"
                        +"<span class='pull-left mete-content'><i class='fa fa-eye'></i>"+item.phone+"</span>"
                        +"</div>"
                        +"</div>"
                        +"<div class='article-content'>"
                        +"<p>"+item.nickName+"</p>"
                        +"</div>"
                        +"</div>"
                        +"</div>");
                });
            }else {
                console.log(data.status);
            }
        },
        error: function(jqXHR){
            alert("Error：" + jqXHR.status);
        },
    });
}
articleList();