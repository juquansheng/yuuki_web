var token = "default";
var url = "";
var editor = new FroalaEditor('div#froala-editor', {
  // Set the image upload parameter.
  imageUploadParam: 'file',

  // Set the image upload URL.
  imageUploadURL: 'https://upload.qiniup.com',

  // Additional upload params.
  imageUploadParams: {
      "updateToken":updateToken(1),
      "token": token,
      "x:url":url,
},

  // Set request type.
  imageUploadMethod: 'POST',

  // Set max image size to 5MB.
  imageMaxSize: 5 * 1024 * 1024,

  // Allow to upload PNG and JPG.
  imageAllowedTypes: ['jpeg', 'jpg', 'png'],




   // Set the video upload parameter.
   videoUploadParam: 'file',

   // Set the video upload URL.
   videoUploadURL: 'https://upload.qiniup.com',

   // Additional upload params.
   videoUploadParams: {
      "updateToken":updateToken(2),
      "token": token,
      "x:url":url,
     
    },

   // Set request type.
   videoUploadMethod: 'POST',

   // Set max video size to 50MB.
   videoMaxSize: 50 * 1024 * 1024,

   // Allow to upload MP4, WEBM and OGG
   videoAllowedTypes: ['webm', 'jpg','mp4','ogg'],



  events: {
    'image.beforeUpload': function (images) {
      // Return false if you want to stop the image upload.     
    },
    'image.uploaded': function (response) {
      // Image was uploaded to the server.
    },
    'image.inserted': function ($img, response) {
      // Image was inserted in the editor.
    },
    'image.replaced': function ($img, response) {
      // Image was replaced in the editor.
    },
    'image.error': function (error, response) {
      // Bad link.
      if (error.code == 1) {  }

      // No link in upload response.
      else if (error.code == 2) {  }

      // Error during image upload.
      else if (error.code == 3) {  }

      // Parsing response failed.
      else if (error.code == 4) {  }

      // Image too text-large.
      else if (error.code == 5) {  }

      // Invalid image type.
      else if (error.code == 6) {  }

      // Image can be uploaded only to same domain in IE 8 and IE 9.
      else if (error.code == 7) {  }

      // Response contains the original server response to the request if available.
    },



    'video.beforeUpload': function (videos) {
      // Return false if you want to stop the video upload.
    },
    'video.uploaded': function (response) {
      // Video was uploaded to the server.
    },
    'video.inserted': function ($img, response) {
      // Video was inserted in the editor.
    },
    'video.replaced': function ($img, response) {
      // Video was replaced in the editor.
    },
    'video.error': function (error, response) {
      // Bad link.
      if (error.code == 1) {  }

      // No link in upload response.
      else if (error.code == 2) {  }

      // Error during video upload.
      else if (error.code == 3) {  }

      // Parsing response failed.
      else if (error.code == 4) {  }

      // Video too text-large.
      else if (error.code == 5) {  }

      // Invalid video type.
      else if (error.code == 6) { }

      // Video can be uploaded only to same domain in IE 8 and IE 9.
      else if (error.code == 7) {  }

      // Response contains the original server response to the request if available.
    }
  }

})

// Destroy action.
document.querySelector('').addEventListener('click', function (e) {
  e.preventDefault();

  if (editor) {
    editor.destroy()
  }
});

// Initialize action.
document.querySelector('').addEventListener('click', function (e) {
  e.preventDefault();

  if (!editor) {
    editor = new FroalaEditor('div#froala-editor')
  }
})

function updateToken(type){
    $.ajax({
        async:false,
        type: "GET",
        url: window.globalUrl+"file/gettoken?type="+type,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        success: function(data){
            console.log('data'+data);
            if (data.status == 200) {
                token = data.data.token;
                url = data.data.imgUrl;
                console.log('更新成功，token值为:'+ token+",url为:" + url);
            }else if (data.status == 401) {
                window.location.href = "login.html"
            }else{
                console.log(data.status);
            }
        },
        error: function(jqXHR){
        alert("Error：" + jqXHR.status);
        },
    })
}