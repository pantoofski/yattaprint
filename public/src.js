function formatTime(e){var t="",l="";return l=(e=Math.floor(e/1e3))%60,e=Math.floor(e/60),t=":"+("0"+l).split("").slice(-2).join(""),l=e%60,e=Math.floor(e/60),t=("0"+l).split("").slice(-2).join("")+t,e>0&&(t=e+":"+t),t}function fillTextRight(e,t,l,o){e.fillText(t,l-e.measureText(t).width,o)}var w=600,sy=450,stepY=50,sx=300,stepX=20,tagId="",logo=document.getElementById("logo"),canvas=document.getElementById("canvas");$(function(){$("#canvas"),$("html body").on("keyup",function(e){13!=e.keyCode?1==e.key.length&&(tagId+=e.key):(console.log(tagId),$.get("/result/"+tagId,function(e){var t=canvas.getContext("2d");e.bibNo=e.bibNo.trim(),console.log(e),t.beginPath(),t.rect(0,0,800,800),t.fillStyle="white",t.fill(),t.drawImage(logo,150,-35,300,300),t.fillStyle="black";var l=40;for(t.font=l+"px Tahoma";t.measureText(e.name).width>w;)l--,t.font=l+"px Tahoma";t.fillText(e.name,(w-t.measureText(e.name).width)/2,350),t.font="55px Tahoma",t.fillText(e.bibNo,(w-t.measureText(e.bibNo).width)/2,290),t.font="30px Tahoma",fillTextRight(t,"Gun Time  :",sx,sy+0*stepY),fillTextRight(t,"Chip Time  :",sx,sy+1*stepY),fillTextRight(t,"Cat Place  :",sx,sy+2*stepY),fillTextRight(t,"Gender Place  :",sx,sy+3*stepY),t.fillText(formatTime(e.gunTime),sx+stepX,sy+0*stepY),t.fillText(formatTime(e.gunTime),sx+stepX,sy+1*stepY),t.fillText(e.catPlace,sx+stepX,sy+2*stepY),t.fillText(e.genderPlace,sx+stepX,sy+3*stepY);var o=canvas.toDataURL("image/png");$.post("/print",{img:o},function(e){console.log(e)})}),tagId=""),console.log("down!")})});