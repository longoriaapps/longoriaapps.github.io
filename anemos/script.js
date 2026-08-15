const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.feature-card,.screen-slot,.alert-card,.privacy-grid,.closing-card').forEach(el=>{
  el.classList.add('reveal'); reveal.observe(el);
});
