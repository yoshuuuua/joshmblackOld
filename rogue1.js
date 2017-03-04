  
var scrolled = false;
var $sizzle = $('#sizzleReel');
    var counter = 0; //the character number in smolder.
    var action =0; //The action number.
var interval;

$( document ).ready(function() {
    console.log( "ready!" );
    $sizzle = $('#sizzleReel');
    interval = setInterval(logging,50);

});

var logging = function(){

        // do your thing
        updateScroll();
        var char = smolder.charAt(counter);
        if (char=='<')
        {
          var tag = char;
          while (char!='>')
          {
            counter++;            
            tag +=smolder.charAt(counter);
            char = smolder.charAt(counter);
          }
          counter++;
          char = smolder.charAt(counter);
          while (char!='>')
          {
            tag +=smolder.charAt(counter);
            counter++;
            char = smolder.charAt(counter);

          }
          console.log(tag);
          $sizzle.append(tag);
        }

        else if (char=='`')
        {
          $sizzle.append('<br>')
        }
        else if (char=='^')
        {
          $sizzle.append('&nbsp;&nbsp;&nbsp;');
        }
        else if (char=='@')
        {
          
          doAction(action);
        }
        else
        {
          $sizzle.append(char);
        } 

      updateScroll();


      if (action>4)
      {
        addColor();
      }

        counter++;
        if(counter +1 === smolder.length) {
            clearInterval(interval);
        }
    

}

$("#sizzleReelContainer").on('scroll', function(){
    scrolled=true;
    console.log("scrolled");
});

function updateScroll(){
    if(!scrolled){
        var element = document.getElementById('sizzleReelContainer');
        element.scrollTop = element.scrollHeight;
    }
}
function doAction(){
  
  if (action==0)
  {
    clearInterval(interval);
    interval = setInterval(logging,15);
    console.log("change");
$("#sizzleReelContainer").animate({ 
    backgroundColor:'rgb(48, 48, 48)',
    color: 'white',
  }, 1500 ); 
  $('#sizzleReelContainer').css({"border": "0px solid black"}).animate({
        borderWidth: '4px',
        borderColor: '#ccc'
    },500);

   }

   if (action==1)
   {
      clearInterval(interval);
      interval = setInterval(logging,70);
   }

   if(action==2)
   {
      clearInterval(interval);
      interval = setInterval(logging,15);
   }

   if (action==3)
   {
   
      $(".attribute").animate({ 
    color: '#64D5EA'
  }, 1500 );

      $(".class").animate({ 
    color: '#FF007F'
  }, 1500 );
      $(".id").animate({ 
    color: '#A7EC21'
  }, 1500 );
      $(".bash").animate({ 
    color: '#FF0000'
  }, 1500 );
      $(".comment").animate({ 
    color: '#E7DFDD'
  }, 1500 );
      $(".value").animate({ 
    color: '#C48CFF'
  }, 1500 );
   

   }

   if(action==4)
   {
      clearInterval(interval);
      interval = setInterval(logging,80);
   }

   if(action==5)
   {
      clearInterval(interval);
      interval = setInterval(logging,15);
      $("#sizzleReelContainer").addClass("w3-half");
   }
  
   if (action==6)
   {
    console.log("show");
    $("#hidden").css({
        "opacity":"0",
        "display":"block",
    }).show().animate({opacity:1})   
}


  action++;
}



function addColor(){
  $(".attribute").css("color", "#64D5EA");
  $(".class").css("color", "#FF007F");
  $(".id").css("color", "#A7EC21");
  $(".bash").css("color", "#FF0000");
  $(".comment").css("color", "#E7DFDD");
  $(".value").css("color", "#C48CFF");
}



//Page functions


(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);

function classified(){
  alert("That is classified information.");
}
function topSecret(){
  alert("Top secret clearance required.");
}

function shoot(gun){
  content = document.getElementById("main");
  if (gun.getAttribute('id')=="gun1")
  {
    content.innerHTML="<h2>Reach for the Sky!</h2>";
    gun.id ="gun2";
  }
  else if (gun.getAttribute('id')=="gun2")
  {
    content.innerHTML="<h2>That is dangerous, don't touch it again!</h2>";
    gun.id ="gun3";

  }
  else if (gun.getAttribute('id')=="gun3")
  {
    content.innerHTML="<h2>Thats is it! You're going to jail buddy.</h2>";

    setTimeout(function(){ 

    window.location = "https://1.bp.blogspot.com/_1oA6knUJcmc/THSNXt1USLI/AAAAAAAAA68/aakuJmkxPdY/s1600/023.JPG";
    }, 3000); 

  }
}

function magicWord(){
  alert("You didn't say the magic word!");
  document.body.innerHTML="<img src='broken.jpg' alt='broken' width='100%' height='100%'>";
}



function complement(text){
  


    reverseSeq = document.getElementById('complement').value; 

    var complementSeq='';
for (q in reverseSeq){
      var i = reverseSeq[q];
      i = i.toUpperCase();

    if (i =='A')
    {
      complementSeq +='T';
    }
    if (i =='T')
    {
      complementSeq +='A';
    }
    if (i =='G')
    {
      complementSeq +='C';
    }
    if (i =='C')
    {
      complementSeq +='G';
    }
}
  if (complementSeq=="")
  {
    complementSeq="A";
  }

  complementSeq.split("").reverse().join("");
  
  document.getElementById("complement").value=complementSeq;
}

  





