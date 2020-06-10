$(document).ready(
  function() {

    // dobbiamo far comparire/scomparire il drodown menu quando ci passiamo sopra con il mouse
    // prendiamo il selettore sul quale muovere il mouse
    $('.menu').mouseenter(
      function() {
        $(this).children('ul').addClass('attivo');
      }
    )
    $('.menu').mouseleave(
      function() {
        $(this).children('ul').removeClass('attivo');
      }
    )
    $('.menu').click(
      function() {
        $(this).children('ul').removeClass('attivo');
      }
    )

    $('.lang').mouseenter(
      function() {
        $(this).children('i').toggleClass('attivo');
        $(this).children('ul').addClass('attivo');
      }
    )

    $('.lang').mouseleave(
      function() {
        $(this).children('i').toggleClass('attivo');
        $(this).children('ul').removeClass('attivo');
      }
    )


  }
)
