console.log("Let's get ready to party with jQuery!");

$("article img").addClass("image-center");

$("article p:last-child").remove();

$("#title").css("font-size", Math.random() * 100);

$("<li>Here is my list item</li>").appendTo("ol");

$("aside").replaceWith("<p>Sorry about that dumb list</p>");

$(".form-control").on("keyup", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();

  $("body").css(
    "background-color",
    "rgb(" + red + "," + green + "," + blue + ")"
  );
});

$("img").on("click", function () {
  $("img").remove();
});
