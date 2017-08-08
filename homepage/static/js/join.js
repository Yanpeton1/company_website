var arr=new Array();
var arr1=new Array();
$.ajax({
   type: "get",    
   url: "http://106.15.194.162/api/v1/position/", 
   dataType: "jsonp",  
   jsonpCallback: "receive", 
   success: function(data) {
   		var str='';
   		var str1='岗位职责：<ol>';
   		var str2='任职要求：<ol>';
   		var str3='公司福利；<ol>';
   		var arr=[];
   		var arr1=[];
   		for (var i = 0; i < data.objects.length; i++) {
   		  str+='<div>招聘：<span>'+data.objects[i].name+'</span><br>';
   		  arr=data.objects[i].duty.split('\r\n');
   		  arr1=data.objects[i].requirements.split('\r\n')
   		  for (var j = 0; j < arr.length; j++) {
   		    str1+='<li>'+arr[j]+'</li>';
   		    console.log(str1)
   		  }
   		  str1+='</ol>';
   		  for (var j = 0; j < arr1.length; j++) {
   		    str2+='<li>'+arr1[j]+'</li>';
   		    console.log(str2)
   		  }

   		  str2+='</ol>';
   		  str+=str1;
   		  str+=str2;
   		  str+='</div>';
   		  console.log(str);
   		  str1='岗位职责：<ol>';
   		  str2='任职要求：<ol>';
   		}
   		// for (var i = 0; i < data.welfare.length; i++) {
   		//   str3+='<li>'+data.welfare[i]+'</li>';
   		// }
   		// str3+='</ol>'
   		$('#join').append(str);
   		// $('#join').append(str3);
   }
})