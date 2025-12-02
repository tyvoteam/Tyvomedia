(function(){
  const btn = document.getElementById('modeToggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('tyvo_mode') || 'dark';
  function apply(mode){ if(mode === 'dark'){ root.setAttribute('data-theme','dark'); btn.textContent='Light'; } else { root.setAttribute('data-theme','light'); btn.textContent='Dark'; } localStorage.setItem('tyvo_mode', mode); }
  if(btn){ btn.addEventListener('click', ()=>{ const cur = root.getAttribute('data-theme') || 'dark'; apply(cur === 'dark' ? 'light' : 'dark'); }); }
  apply(stored);
})();
