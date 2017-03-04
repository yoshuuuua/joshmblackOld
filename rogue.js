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
