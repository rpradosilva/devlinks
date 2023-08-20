function changeTheme() {
  const page = document.body;
  page.classList.toggle("light");
  changePhoto(page.classList);
  changeSwitcher(page.classList);
  changeIcon(page.classList);
}

function changePhoto(themeSelected) {
  const image = document.querySelector(".user img");

  if (themeSelected == "light") {
    image.src = "assets/images/profile-light.jpg";
  } else {
    image.src = "assets/images/profile.jpg";
  }
}

function changeSwitcher(themeSelected) {
  const switcher = document.querySelector(".switch ion-icon");

  if (themeSelected == "light") {
    switcher.style.left = "32px";
  } else {
    switcher.style.left = "-1px";
  }
}

function changeIcon(themeSelected) {
  const icon = document.querySelector(".switch ion-icon");

  if (themeSelected == "light") {
    icon.name = "sunny-outline";
  } else {
    icon.name = "moon-outline";
  }
}
