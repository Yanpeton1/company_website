

$.ajaxSetup({  
    contentType: "application/json; charset=utf-8"  
});  
var DataDeal = {  
//将从form中通过$('#form').serialize()获取的值转成json  
           formToJson: function (data) {  
               data=data.replace(/&/g,"\",\"");  
               data=data.replace(/=/g,"\":\"");  
               data="{\""+data+"\"}";  
               return data;  
            },  
};  

var str='';
var sex=[];
$("#submit").click(function(){ 	 
    var data = $("#message").serialize();
    data= decodeURIComponent(data,true);//防止中文乱码 
	var param=DataDeal.formToJson(data);
    if ($(".reg")[0].value=='') {
		alert("请至少输入一种联系方式");
		return false;
	} 
	$.ajax({  
	        type: "post",    
	        url: "http://106.15.194.162/api/v1/message/", 
			data: param,
	        success: function(data) { 
	            alert("提交成功")
	        },  
	        error: function() { 
                alert("提交失败")
	        } 
    });
     
}); 


$.ajax({  
        type: "get",    
        url: "http://106.15.194.162/api/v1/message/", 
        dataType: "jsonp",  
        success: function(data) { 
			console.log(data)
			for (var i = 0; i < data.objects.length; i++) {
				if (data.objects[i].gender==0) {
					sex.push('先生');
				} else {
					sex.push('女士');
				}
				str+='<li><h3><span>'+data.objects[i].username+sex[i]+'：</span><span></h3><p>'+data.objects[i].message_content+'<p></li>';
			}
			$('#comments_container').append(str);
			$('#comments').photoMove3(data.objects.length,100)
        },  
        error: function() {  
 
        }
		  
});
