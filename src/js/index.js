function clickScript(clickedId) {
  document.getElementById('link1').style.textDecoration = 'none';
  document.getElementById('link2').style.textDecoration = 'none';
  document.getElementById('link3').style.textDecoration = 'none';
  document.getElementById(clickedId).style.textDecoration = 'underline';
}
