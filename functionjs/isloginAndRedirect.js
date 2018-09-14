function isloginAndRedirect(){
        $.ajax({
            url:window.globalUrl+"/passport/islogin",
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
                    $(".islogin").append("<button class='login-out' onclick='logout()'>退出登陆</button>");
                }else{
                    window.location.href = "/yuuki/login.html";
                }
            },
            error:function(datas){
                console.log("error");
            }
        })
    }
isloginAndRedirect();