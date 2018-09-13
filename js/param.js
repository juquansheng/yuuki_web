var urlData = {};
function getUrl(value) {
    var url = decodeURI(location.search);
    console.log(url);
    if (url.indexOf("?") != -1)//url中存在问号，也就说有参数。  
    {
        var str = url.substr(1);
        var strs = str.split("&");
        
        for (var i = 0; i < strs.length; i++) {
            urlData[strs[i].split("=")[0]] = strs[i].split("=")[1]
        }
    }
    return strs;
}
getUrl();

function getValue(value) {
    var url = decodeURI(location.search);
    console.log(url);
    if (url.indexOf("?") != -1)//url中存在问号，也就说有参数。  
    {
        var str = url.substr(1);
        var strs = str.split("&");
    
        for (var i = 0; i < strs.length; i++) {
            urlData[strs[i].split("=")[0]] = strs[i].split("=")[1]
            var paramValue = strs[i].split("=")[1]
            console.log("paramValue"+paramValue);
        }
    }
    return paramValue;
}
getValue();