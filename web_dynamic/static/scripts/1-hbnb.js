let checked = [];
$('document').ready(function () {
  $('.amenities .popover input[type=checkbox]').change(function (){
    if (this.ckecked) {
      checked.push($(this).attr('data-id'));
    } else {
      checked.pop($(this).attr('data-id'));
    }
  });
  for (let x = 0; x < checked.length; x++) {
    $('.amenities h4').text().append(checked[x] + " ");
  }
});
