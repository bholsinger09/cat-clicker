var count = 0;
$('#cat-img').click(function(e) {
  let counterBox = $('#counter');

  count += 1;
  console.log(count);
  counterBox.prepend(count); //the element has been clicked... do stuff here
});