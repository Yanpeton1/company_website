
function firstMove(){
	var moveArrOne=["images/banner1.jpg","images/banner2.jpg","images/banner3.jpg","images/banner4.jpg","images/banner5.jpg"];
	$("#banner").photoMove(moveArrOne,{"width":"1516px","height":"500px","color":"orange"},2000);

	
	var moveArrTwo=["images/company1.jpg","images/company2.jpg","images/company3.jpg"];
	$("#companyPic").photoMove(moveArrTwo,{"width":"348px","height":"340px","color":"orange"},1500);

	var moveArrThree=[];
	getImg(moveArrThree);
	// slideMove($('#nav li'),$('.bg'));
}
firstMove();
function getImg(arr){
	$.ajax({  
	        type: "get",    
	        url: "http://106.15.194.162/api/v1/product/?is_recommended=1", 
	        dataType: "jsonp", 
			async: false, 
	        success: function(data) { 		
				for (var i = 0; i < data.objects.length; i++) {
					arr.push('http://106.15.194.162'+data.objects[i].image)
				}
				$("#productsMove").photoMove2(arr,{"width":"200px","height":"200px","color":"orange"},30);

	        },  
	        error: function() {  
	 
	        }  
	});
};








