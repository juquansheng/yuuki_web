/*图片验证码获取*/
var verifyCodeKey;
function verifyCode () {
	 verifyCodeKey = new Date().getTime();
	 console.log("codekey"+verifyCodeKey)
     var code = $("#verify");
     $(code).attr("src","http://localhost:8927/yuuki/verifyImage?timeStamp="+verifyCodeKey)
   };

verifyCode();
