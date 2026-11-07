(function(){
  var btn=document.getElementById('copy'), num=document.getElementById('phone');
  if(!btn||!num) return;
  var timer;
  function say(t){
    btn.textContent=t;
    clearTimeout(timer);
    timer=setTimeout(function(){btn.textContent='Copy number'},2400);
  }
  function select(){
    try{
      var r=document.createRange(); r.selectNodeContents(num);
      var s=window.getSelection(); s.removeAllRanges(); s.addRange(r);
    }catch(e){}
    say('Number selected');
  }
  btn.addEventListener('click',function(){
    try{
      if(navigator.clipboard&&navigator.clipboard.writeText){
        navigator.clipboard.writeText('207-449-2868').then(function(){say('Copied')},select);
      }else{select();}
    }catch(e){select();}
  });
})();
