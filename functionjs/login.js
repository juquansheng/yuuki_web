var verifyCodeKey;
function login(){
        $.ajax({
            url:"http://localhost:8927/yuuki/passport/login",
            type:"post", 
            dataType:"json",
            contentType:"application/json",
            headers: {  
            'Accept': 'application/json',  
            'Content-Type': 'application/json'  
            },  
            data:JSON.stringify({"userName":$("#userName").val(),"password":$("#password").val(),
                "verifyCode":$("#verifyCode").val(),"verifyCodeKey":verifyCodeKey,"rememberMe":$("#rememberMe[type='checkbox']").is(':checked')}),
            xhrFields: {
            withCredentials: true
            },
            crossDomain: true,
            success:function(datas){
                if (datas.status == 200) {
                    if (document.referrer = document.location) {
                        window.location.href = "/yuuki/index.html"
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

function logout(){
        $.ajax({
            url:"http://localhost:8927/yuuki/passport/logout",
            type:"get", 
            dataType:"text",
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
                console.log("success")
                    if (document.referrer = document.location) {
                        window.location.href = "index.html"
                    }else{
                        window.location.href = document.referrer;
                    }    
               
            },
            error:function(datas){
                console.log("error")
            }
        })
    }

function tologin(){
        window.location.href = "/yuuki/login.html";
    }

function islogin(){
        $.ajax({
            url:"http://localhost:8927/yuuki/passport/islogin",
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
                    $(".islogin").append("<button class='login-btn' onclick='tologin()'>登陆</button>");
                }
            },
            error:function(datas){
                console.log("error")
            }
        })
    }
islogin();