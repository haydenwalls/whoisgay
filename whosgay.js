$(document).ready(() => {
  $('.result').hide();
  $('.images').hide();
  $('button').on('click', () => {
    $('.result').slideDown(600);
    $('.images').fadeIn(300);
    $('.form').hide();
  });
});
