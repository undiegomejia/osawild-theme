(function ($) {
  'use strict';
  $(document).ready(function () {
    /* Redes Footer **/
    $('.address-block').append(
      '<li><span class="icon-facebook"></span><a target="_blank" href="https://www.facebook.com/osawildtravel/">Facebook</a></li><li><span class="icon-instagram"></span><a target="_blank" href="https://www.instagram.com/osawild/">Instagram</a></li><li><span class="icon-google-plus"></span><a target="_blank" href="https://plus.google.com/+OsaWildPuertoJim%C3%A9nez">Google Plus</a></li><li><span class="icon-youtube"></span><a target="_blank" href="https://www.youtube.com/channel/UCEH3iAcvR2yVO3zCEcGHV0A">YouTube</a></li>'
    );

    /* Lista Iconos Home */
    $('.feature-block .holder ul li').addClass(function (index) {
      return 'item-' + index;
    });

    // if (window.location.href.indexOf('book-now') > -1) {
    //   alert("booking");
    // }
  });
})(jQuery);

function init() {
  var vidDefer = document.getElementsByTagName('iframe');
  for (var i = 0; i < vidDefer.length; i++) {
    if (vidDefer[i].getAttribute('data-src')) {
      vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
    }
  }
}
window.onload = init;
