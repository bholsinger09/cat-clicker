function Cat1() {}

var count;
count = 0;
Cat1.prototype.imageListener = function() {
  $("#cat-img").click(function() {
    let counterBox = $("#counter1");
    count += 1;
    console.log(count);
    counterBox.prepend(count + " , ");
  });
};

var kitten = new Cat1();

kitten.imageListener();





function Cat2() {}

var count2;
count2 = 0;
Cat2.prototype.imageListener = function() {
  $("#cat-img2").click(function() {
    let counterBox = $("#counter2");
    count2 += 1;
    console.log(count2);
    counterBox.prepend(count2 + " , ");
  });
};

var kitten2 = new Cat2();

kitten2.imageListener();