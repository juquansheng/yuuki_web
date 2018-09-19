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
var clock = '';
 var nums = 10;
 var btn;
function sendCaptcha(thisBtn){

    btn = thisBtn;
    btn.disabled = true; //将按钮置为不可点击
    btn.value = nums+'秒后可重新获取';
    clock = setInterval(doLoop, 1000);
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

function doLoop()
 {
 nums--;
 if(nums > 0){
  btn.value = nums+'秒后可重新获取';
 }else{
  clearInterval(clock); //清除js定时器
  btn.disabled = false;
  btn.value = '点击发送验证码';
  nums = 10; //重置时间
 }
 }