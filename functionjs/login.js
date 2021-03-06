var verifyCodeKey;
function login(){
        $.ajax({
            url:window.globalUrl+"/passport/login",
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
                    console.log(document.referrer)
                    console.log(document.location)
                    if (document.referrer = "/yuuki/register.html") {

                        window.location.href = "/yuuki/index.html";
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
            url:window.globalUrl+"/passport/logout",
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
                        window.location.href = document.location;
                    }else{
                        window.location.href = document.location;
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
function toregister(){
        window.location.href = "/yuuki/register.html";
    }
function islogin(){
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
                    $(".islogin").append("<button class='login-btn' onclick='tologin()'>登陆</button>");
                    $(".islogin").append("<button class='login-btn' onclick='toregister()'>注册</button>");
                }
            },
            error:function(datas){
                console.log("error")
            }
        })
    }
islogin();

