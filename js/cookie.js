/*const cookieStorage = {
  getItem: (item) => {
      const cookies = document.cookie
          .split(';')
          .map(cookie => cookie.split('='))
          .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      return cookies[item];
  },
  setItem: (item, value, expiryDate) => {
      document.cookie = `${item}=${value};`
      var expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      document.cookie = item + '=cookie; expires=' + expiryDate.toGMTString();
      
  }
}

const storageType = cookieStorage;
const consentPropertyName = 'cookie';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {

  const acceptFn = event => {
      saveToStorage(storageType);
      addGoogleTag();
      consentPopup.classList.add('hidden');
  }
  const consentPopup = document.getElementById('consent-popup');
  const acceptBtn = document.getElementById('btnAccept');
  const denyBtn = document.getElementById('btnDeny');

  $('#btnAccept').click(function(){
    acceptFn();
  })
  $('#btnDeny').click(function(){
    saveToStorage(saveToStorage);
    consentPopup.classList.add('hidden')
  })

  if (shouldShowPopup(storageType)) {
      setTimeout(() => {
          consentPopup.classList.remove('hidden');
      }, 2000);
  }

};
*/

(function () {
  ("use strict");

  var cookieAlert = document.querySelector(".cookiealert");
  var acceptCookies = document.querySelector(".acceptcookies");
  var denyCookies = document.querySelector(".denycookies");

  if (!cookieAlert) {
    return;
  }

  cookieAlert.offsetHeight;

  // Show the alert if we cant find the "acceptCookies" cookie
  if (!getCookie("acceptCookies")) {
    cookieAlert.classList.add("show");
  }

  // When clicking on the agree button, create a 1 month
  // cookie to remember user's choice and close the banner
  acceptCookies.addEventListener("click", function () {
    setCookie("acceptCookies", true, 90);
    addGoogleTag();
    cookieAlert.classList.remove("show");

    // dispatch the accept event
    window.dispatchEvent(new Event("cookieAlertAccept"));
  });

  denyCookies.addEventListener("click", function () {
    setCookie("acceptCookies", true, 90);
    cookieAlert.classList.remove("show");

    // dispatch the accept event
    window.dispatchEvent(new Event("cookieAlertAccept"));
  });

  // Cookie functions
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
})();
