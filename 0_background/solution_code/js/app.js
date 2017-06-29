function doMagic()
{
  var phrase = "Abra Kadabra Alakazam"
  document.getElementById("magic").innerHTML = phrase;
}

function disappear()
{
  var clear = "";
  document.getElementById("magic").innerHTML = clear;

}
document.getElementById('magicButton').onclick = doMagic;
document.getElementById('disappearButton').onclick = disappear;
