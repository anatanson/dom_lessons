function lengthConverter(valNum) {
  function convertMeters(valNum){
    document.getElementById("outputMeters").innerHTML=valNum/0.0022046;
  }

  function convertInches(valNum) {
    document.getElementById("outputInches").innerHTML=valNum*12;
  }

  function convertCm(valNum){
    document.getElementById("outputcm").innerHTML=valNum/0.032808;
  }

  convertMeters(valNum);
  convertInches(valNum);
  convertCm(valNum);
}
