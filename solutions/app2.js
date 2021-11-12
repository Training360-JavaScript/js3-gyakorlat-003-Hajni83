const setCookie = (name, value) => {
  let now = new Date();
  now.setTime(now.getTime() + 15 * 60 * 1000);
  let expires = now.toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}`;
};

setCookie("viewed", "5");
setCookie("uid", "354774631237");
setCookie("ssid", "Bx55OWbHJ0Vt_IGIF");

const cookieHandler = {
  getAll() {
    const keyValuePairs = document.cookie.split('; ');
    const object ={};
    for (let value of keyValuePairs){
      let nameValue = value.split('=');
      object[nameValue[0]] = nameValue[1];
    }
    return object;

  },
  toSessionStorage() {
    let object = this.getAll();
    for (const [key, value] of Object.entries(object)) { 
      sessionStorage.setItem(key, value);
    }
  },
  flush() {
    const cookies = document.cookie.split('; ');

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  },
};

export { cookieHandler };
