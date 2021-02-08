// find elements causing horizontal scrollbar
var elWidth = document.documentElement.offsetWidth;
var allDocElem = document.querySelectorAll('*');

allDocElem.forEach(function (el) {
  if (el.offsetWidth > elWidth) {
    console.log(el);
  }
});
