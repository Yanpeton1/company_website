var cache=new Array(); // 缓存变量，当数据被访问过之后放置在缓存中，加快访问速度
var str='';
var str1='';
var str2='';
var str3='';
var next;
var prev;
var lastpage;
var category
category();
function category(){
    $.ajax({
        url: "http://106.15.194.162/api/v1/category/",
        type: "GET",
        dataType: "jsonp", 
        jsonpCallback: "receive",
        success: function(data) { 
            changePage(data.objects[0].category_list[0],0); 
            setPage(data.objects[0].category_list[0]);
            for (var i = 0; i < data.objects[0].category_list.length; i++) {
               str3+='<li><a onclick=categoryShow(this.text)>'+data.objects[0].category_list[i]+'</a></li>'
            }
            $('#mainNav').append(str3)

        }
     }) 
}
function categoryShow(cate){
   setPage(cate);
   changePage(cate,0)
}
function setPage(a){
   $.ajax({  
           type: "get",    
           url: "http://106.15.194.162/api/v1/product/?offset=0&limit=9&category="+a,
           async: false, 
           dataType: "jsonp",  
   //         jsonpCallback: "receive", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据    
           success: function(data) { 
               if (data.meta.total_count==0) {
                  return
               } else {
                  page=Math.ceil(data.meta.total_count/data.meta.limit);           
                  for (var i = 1; i<=page; i++) {
                     str1+='<option value="'+i+'"">'+i+'</option>';
                  }
                  str='<span id="sy"><a onclick=changePage(category,0)>首页</a></span><span><a onclick=changePage(category,prev)>上一页</a></span><span><a onclick=changePage(category,next)>下一页</a></span><span><a onclick=changePage(category,lastpage)>尾页</a></span><span>共'+page+'页</span><span>每页显示'+data.meta.limit+'条</span><span>转到第<select name="page" onchange=changePage(category,this.value)>'+str1+'</select>页</span>';
                  $('#pagination').html(str);
                  str1='';
               }
               
               
           },
               
   });
}

function changePage(c,num) {
   if (num==null) {
      return;
   } else {
     $.ajax({
        url: "http://106.15.194.162/api/v1/product/?offset="+num+"&limit=9&category="+c,
        type: "GET",
        dataType: "jsonp", 
        // jsonpCallback: "receive",
        success: function(data) { 
            page=Math.ceil(data.meta.total_count/data.meta.limit);
            if (page>=1) {
               lastpage=(page-1)*data.meta.limit; 
            } else {
               lastpage=null
            }
            pagenum=data.meta.offset;
            if (pagenum-9>=0) {
               prev=pagenum-9;
            } else {
               prev=null;
            }
            if (pagenum+9<=data.meta.total_count) {
               next=pagenum+9;
            } else {
               next=null;
            }
            category=data.objects[0].category ;
           for (var i = 0; i < data.objects.length; i++) {
                 str2+='<li><a href="productDetails.html?id='+data.objects[i].id+'"><img src="http://106.15.194.162'+data.objects[i].image+'"></a><p><a href="productDetails.html?id='+data.objects[i].id+'">'+data.objects[i].name+'</a></p></li>'
           }
           $('#mainShow').html(str2);
           str2='';
        }
     }) 
   }     
}

























