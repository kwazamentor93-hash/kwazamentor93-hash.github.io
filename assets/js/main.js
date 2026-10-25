// Screenshot lightbox and video slots.
(function () {
  var box = document.getElementById('lightbox');
  var img = box.querySelector('img');

  document.querySelectorAll('a.zoom').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      img.src = link.getAttribute('href');
      img.alt = link.querySelector('img').alt;
      box.hidden = false;
    });
  });
  function close() { box.hidden = true; img.removeAttribute('src'); }
  box.addEventListener('click', function (e) { if (e.target !== img) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) close(); });

  // <div class="video-slot" data-youtube="VIDEO_ID"> — put a YouTube id there to embed the video
  document.querySelectorAll('.video-slot[data-youtube]').forEach(function (slot) {
    var id = slot.getAttribute('data-youtube').trim();
    if (!id) return;
    var frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id);
    frame.title = slot.getAttribute('data-title') || 'Video';
    frame.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture';
    frame.allowFullscreen = true;
    frame.loading = 'lazy';
    slot.innerHTML = '';
    slot.appendChild(frame);
    slot.classList.add('has-video');
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
