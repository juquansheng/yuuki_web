/*图片验证码获取*/
var verifyCodeKey;
function verifyCode () {
	 verifyCodeKey = new Date().getTime();
	 console.log("codekey"+verifyCodeKey)
     var code = $("#verify");
     $(code).attr("src",window.globalUrl+"/verifyImage?timeStamp="+verifyCodeKey)
   };

verifyCode();
/*发送短信验证码*/
function sendCaptcha(){
	$.ajax({
		type: "GET",
		url: window.globalUrl+"/code/getCode?phone="+$("#phone").val(),
		contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            console.log(data.data);
            if (data.status == 200) {
                
            }
        },
        error: function(jqXHR){
            alert("Error：" + jqXHR.status);
        },
	})
}