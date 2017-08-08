var param=window.location.search;
var id=param.substring(param.search(/id=/)+3);
var arr=new Array();
var str='';
var str1=''
$.ajax({  
        type: "get",    
        url: "http://106.15.194.162/api/v1/product/"+id, 
        dataType: "jsonp",  
        success: function(data) { 
	console.log(data)
            arr=data.detail.split('\r\n');
			for (var i = 0; i < arr.length; i++) {
				str+='<li>'+arr[i]+'</li>';
			}
			str1='<div class="detail-top"><div class="left"><img src="http://106.15.194.162'+data.image+'"/></div><div class="left word"><p>商品名称：'+data.name+'<p><p>产品系列：'+data.category+'</p><p>产品简介：'+data.introduction+'</p><p>生产日期：'+data.created_date+'</p></div></div><div class="detail-bottom"><h3>产品详情</h3><ol>'+str+'</ol></div>';
			$('#mainShow').html(str1);
        },  
        error: function() {  
 
        }
		  
});

