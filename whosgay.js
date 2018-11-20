$(document).ready(() => {
  $('.result').hide();
  $('button').on('click', () => {
    $('.result').slideDown(600);
  });
});
