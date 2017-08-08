var oNav=document.getElementById('nav');
Slipping(oNav);
function Slipping(obj){
   var oUl=obj.getElementsByTagName('ul')[0];
   var aLi=oUl.getElementsByTagName('li');
   var oBg=aLi[aLi.length-1];
   var i=0;
   for(i=0;i<aLi.length-1;i++)
   {
      aLi[i].onmouseover=function ()
      {
         startMove(oBg, this.offsetLeft);
         oBg.innerHTML=this.innerHTML;
      };
   }
}

var iSpeed=0;
var left=0;

function startMove(obj, iTarget)
{
   // alert(obj+'+'+iTarget)
   clearInterval(obj.timer);
   
   obj.timer=setInterval(function (){
      iSpeed+=(iTarget-obj.offsetLeft)/5;
      iSpeed*=0.7;
      
      left+=iSpeed;
      
      if(Math.abs(iSpeed)<1 && Math.abs(left-iTarget)<1)
      {
         clearInterval(obj.timer);
         
         obj.style.left=iTarget+'px';
         //alert('关了');
      }
      else
      {
         obj.style.left=left+'px';
      }
   }, 30);
}