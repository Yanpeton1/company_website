// $.ajax({  
//         type: "get",    
//         url: "http://106.15.194.162/api/v1/product/", 
//         dataType: "jsonp",  
//         jsonpCallback: "receive", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据    
//         success: function(data) { 
//             
// 			var str='';
// 			var $ul= $('#mainShow').children(0);
// 			for (var i = 0; i < data.objects.length; i++) {
// 				console.log(typeof(data.objects[i].image))
// 				str+='<li><a href="productDetails.html#/detail?detail='+data.objects[i].id+'"><img src="http://106.15.194.162/api/v1/product"+data.objects[i].image /><a><h3><a>'+data.objects[i].name+'</a></h3><p>型号:<span>'+data.objects[i].created_date+'</span></p></li>'
// 			}
// 			$('#container').append(str)
//         },  
//         error: function() {  
//  
//         }  
// });
// $('#test').attr('href','index.html'+data.objects[i].id)
$.ajax({
   url: "js/product.json",//json文件位置
   type: "GET",//请求方式为get
   dataType: "json", //返回数据格式为json
   success: function(data) {//请求成功完成后要执行的方法 
       //each循环 使用$.each方法遍历返回的数据date
       // $.each(data.first, function(i, item) {
       //      var str = '<div>姓名:' + item.name + '性别：' + item.sex + '</div>';
       //      document.write(str);
       // })
       console.log(data)
   }
})