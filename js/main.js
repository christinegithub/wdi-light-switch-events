
document.addEventListener('DOMContentLoaded', function() {

  var lightswtich = document.getElementsByTagName('button')[0];

  lightswtich.addEventListener('click', pushSwitch)

  function pushSwitch() {
    var text = document.getElementsByTagName('h1')[0];
    var body = document.getElementsByTagName('body')[0];


    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      text.innerText = "Hey, who turned off the lights?";
      lightswtich.classList.remove("on");
      lightswitch.classList.add("off");

    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      text.innerText = "It's so bright in here!";
      lightswitch.classList.add("on");
      lightswitch.classList.remove("off");
    }
  }
})
