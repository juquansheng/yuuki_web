
function register(){
        $.ajax({
            url:window.globalUrl+"/passport/register",
            type:"post", 
            dataType:"json",
            contentType:"application/json",
            headers: {  
            'Accept': 'application/json',  
            'Content-Type': 'application/json'  
            },  
            data:JSON.stringify({"userName":$("#userName").val(),
                "password":$("#password").val(),
                "nickName":$("#nickName").val(),
                "phone":$("#phone").val(),
                "captcha":$("#captcha").val()}),
            xhrFields: {
            withCredentials: true
            },
            crossDomain: true,
            success:function(datas){
                if (datas.status == 200) {
                    console.log(document.referrer)
                    console.log(document.location)
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