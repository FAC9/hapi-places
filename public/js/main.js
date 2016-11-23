(function () {
  document.querySelectorAll('.table__button').forEach((button) => {
    let requestType = button.name;
    // regexp to filter out  numbers from E.g Ł 1,000.23.
    // The match only matches the number (which has commas as thousands separators and it can have a decimal point to).
    //  Replace gets rid of the pound sign and the comma.
    let requestValue = (button.parentElement.previousElementSibling.textContent).match(/\d+(\.?,?\d+){0,1}/
  )[0].replace(',', '');

    let requestURL = `/request?type=${requestType}&value=${requestValue}`;
    button.href = requestURL;
  });

  var header = document.querySelector('.header');
  var ticking = false;

  window.addEventListener('scroll', function (e) {
    var elementPosition = header.offsetTop; // top position from document
    var scrollPosition = window.scrollY;
    var difference = scrollPosition - elementPosition;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        var pos = -(difference * 0.1) + 50;
        pos += '%';
        header.style.cssText = header.style.cssText.replace(/(.*\d{1,3}(\.\d*)?%\s)(-*\d{1,3}(\.\d*)?%)(.*)/, function (match, p1, p2, p3, p4, p5) {
          return p1 + pos + p5;
        });
        ticking = false;
      });
    }
    ticking = true;
  });
})();
