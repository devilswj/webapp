let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//得到html的Dom元素

let htmlDom = document.getElementsByTagName('html')[0];
//设置根元素字体大小
if(htmlWidth>750)htmlWidth=750;
htmlDom.style.fontSize= htmlWidth/20 + 'px';

$(document).ready(function(){

  $('.assure').on('click',function(){
    $('#layer').css('display','none')
  })

  $('.instructions-btn').on('click',function(){
    $('#layer').css('display','flex')
  })
})

$(window).resize(function(){ 
  htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if(htmlWidth>750)htmlWidth=750;
  htmlDom.style.fontSize= htmlWidth/20 + 'px';
 
})

