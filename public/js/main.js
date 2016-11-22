document.querySelectorAll('.table__button').forEach((button) => {
  let requestType = button.name;
  let requestValue = (button.parentElement.previousElementSibling.textContent).match(/\d+/)[0];
  let requestURL = `/request?type=${requestType}&value=${requestValue}`;
  button.href = requestURL;
});
