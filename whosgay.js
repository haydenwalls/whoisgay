$(document).ready(() => {
  $('.result').hide();
  $('.images').hide();
  $('button').on('click', () => {
    $('.result').slideDown(250);
    $('.images').fadeIn(500);
    $('.form').hide();
  });
});
