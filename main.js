(function(){
  var sel=document.getElementById('cf-topic');
  [].forEach.call(document.querySelectorAll('[data-topic]'),function(a){ a.addEventListener('click',function(){ if(sel){ sel.value=a.getAttribute('data-topic'); } }); });
  var pre=document.body.getAttribute('data-topic'); if(sel && pre && !sel.value){ sel.value=pre; }
})();
try{document.getElementById('year').textContent=new Date().getFullYear();}catch(e){}
(function(){
  var h=document.querySelector('header.nav'), t=document.querySelector('.menu-toggle');
  if(!h||!t) return;
  t.addEventListener('click',function(){ var o=h.classList.toggle('open'); t.setAttribute('aria-expanded', o?'true':'false'); t.textContent=o?'Close':'Menu'; });
  [].forEach.call(document.querySelectorAll('nav.links a'),function(a){ a.addEventListener('click',function(){ h.classList.remove('open'); t.setAttribute('aria-expanded','false'); t.textContent='Menu'; }); });
})();
