(function () {
  var preview = document.getElementById('hoverPreview');
  var previewImg = document.getElementById('hoverPreviewImg');
  var catList = document.querySelector('.cat-list');
  if (!catList) return;

  catList.addEventListener('mousemove', function (e) {
    preview.style.left = e.clientX + 'px';
    preview.style.top = (e.clientY - 38) + 'px';
  });

  var blocks = document.querySelectorAll('.cat-block');
  blocks.forEach(function (block) {
    var row = block.querySelector('.cat-row');

    row.addEventListener('mouseenter', function () {
      if (block.classList.contains('open')) return;
      previewImg.src = row.getAttribute('data-img');
      preview.classList.add('show');
    });
    row.addEventListener('mouseleave', function () {
      preview.classList.remove('show');
    });

    row.addEventListener('click', function () {
      var willOpen = !block.classList.contains('open');
      blocks.forEach(function (b) {
        b.classList.remove('open');
        b.querySelector('.cat-row').setAttribute('aria-expanded', 'false');
      });
      preview.classList.remove('show');
      if (willOpen) {
        block.classList.add('open');
        row.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.querySelectorAll('.reel').forEach(function (reel) {
    var rail = reel.parentElement.querySelector('.rail i');

    function updateRail() {
      var max = reel.scrollWidth - reel.clientWidth;
      var pct = max > 0 ? (reel.scrollLeft / max) : 0;
      var w = Math.max((reel.clientWidth / reel.scrollWidth) * 100, 10);
      rail.style.width = w + '%';
      rail.style.left = (pct * (100 - w)) + '%';
    }
    reel.addEventListener('scroll', updateRail);
    window.addEventListener('resize', updateRail);
    updateRail();

    reel.addEventListener('wheel', function (e) {
      var max = reel.scrollWidth - reel.clientWidth;
      var atStart = reel.scrollLeft <= 0;
      var atEnd = reel.scrollLeft >= max - 1;
      var goingDown = e.deltaY > 0;
      if ((goingDown && !atEnd) || (!goingDown && !atStart)) {
        e.preventDefault();
        reel.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    var isDown = false, startX = 0, startScroll = 0;
    reel.addEventListener('pointerdown', function (e) {
      isDown = true;
      reel.classList.add('dragging');
      startX = e.clientX;
      startScroll = reel.scrollLeft;
      reel.setPointerCapture(e.pointerId);
    });
    reel.addEventListener('pointermove', function (e) {
      if (!isDown) return;
      reel.scrollLeft = startScroll - (e.clientX - startX);
    });
    reel.addEventListener('pointerup', function () {
      isDown = false;
      reel.classList.remove('dragging');
    });
    reel.addEventListener('pointercancel', function () {
      isDown = false;
      reel.classList.remove('dragging');
    });
  });
})();
