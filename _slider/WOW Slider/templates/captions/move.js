// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by $AppName$ $AppVersion$
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_caption_move(b,a,h,e){var c=jQuery;var d=[{left1:"100%",top2:"100%"},{left1:"80%",left2:"-50%"},{top1:"-100%",top2:"100%",distance:0.7,easing:"easeOutBack"},{top1:"-80%",top2:"-80%",distance:0.3,easing:"easeOutBack"},{top1:"-80%",left2:"80%"},{left1:"80%",left2:"80%"}];d=d[Math.floor(Math.random()*d.length)];var g=0.5;var f="easeOutElastic1";a.stop(1,1).fadeOut(b.captionDuration/3,function(){a.html(e);var k=a.find(">span,>div").get();c(k).css({position:"relative",visibility:"hidden"});a.show();for(var l in d){if(/\%/.test(d[l])){d[l]=parseInt(d[l])/100;var m=a.offset()[/left/.test(l)?"left":"top"];var j=/left/.test(l)?"width":"height";if(d[l]<0){d[l]*=m}else{d[l]*=b.$this[j]()-a[j]()-m}}}c(k[0]).css({left:(d.left1||0)+"px",top:(d.top1||0)+"px"});c(k[1]).css({left:(d.left2||0)+"px",top:(d.top2||0)+"px"});function i(n){var o=c(k[n]).css("opacity");c(k[n]).css({visibility:"visible"}).css({opacity:0}).animate({opacity:o},b.captionDuration,"easeOutCirc").animate({top:0,left:0},{duration:b.captionDuration,easing:(d.easing||f),queue:false})}i(0);setTimeout(function(){i(1)},b.captionDuration*(d.distance||g))})};