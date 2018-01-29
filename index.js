
function requestData() {
  var country = "";
  var optionList = document.querySelectorAll("option");
  for(var i = 1; i < optionList.length; i++) {
    if(optionList[i].selected == true) {
      country = optionList[i].value;
    }
  }
  var url ="http://countryapi.gear.host/v1/Country/getCountries?pName=" + country;

  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

}
