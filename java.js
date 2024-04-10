$(function () {
  $('.sun').click(function (e) {
      e.stopPropagation();
      $("html").toggleClass('container-night');
      $(".sky-night").toggleClass('sky-night-fade');
      $("p, h1").toggleClass('text-color');
      $(".ocean-night").toggleClass('ocean-night-fade');
      $(".moon").toggleClass('moon-fade');
      $(".ocean").toggleClass('animation-stop');
      $(".bird").toggleClass('birds-fly');
      $(".boat").toggleClass('boat-sail');
      $(".mountain-top, .mountain-top >*").toggleClass('mountain-top-night');
      $(".mountain-middle, .mountain-middle >*").toggleClass('mountain-middle-night');
      $(".mountain-back, .mountain-back >*").toggleClass('mountain-back-night');
      $(".cloud").delay(2500).fadeToggle(2500);
      $(".stars").toggleClass('stars-fade');
      $(".shooting-star").toggleClass('shooting');

      var angle = ($('.sun-container').data('angle') + 360) || 360;
      $('.sun-container').css({
          'transform': 'rotate(' + angle + 'deg)'
      });
      $('.sun-container').data('angle', angle);

      // Change greeting text with transition and fade delay
      var greeting = $("#greeting").text();
      if (greeting === "Click On the Sun") {
          setTimeout(function () {
              $("#greeting").addClass("fade-out");
              setTimeout(function () {
                  $("#greeting").text("Good Night My BunBun ❤️").removeClass("fade-out").addClass("fade-in");
              }, 500); // Delay for fade-out animation duration
          }, 1500); // Delay before changing the text
      } else {
          $("#greeting").text("Good Morning My BunBun ❤️");
      }
  });
});
