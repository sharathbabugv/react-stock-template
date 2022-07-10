
export function insertUserData(data) {
  const key = data.email;
  if (localStorage.getItem(key) == null) {
    localStorage.setItem(key, JSON.stringify(data));
    return {
      status: 200,
      payload: "User Successfully Added!",
      jwt: generateRandomJWT(200)
    };
  } else {
    return {
      status: 400,
      payload: "Email ID already exists!",
    };
  }
}

export function insertSessionStorage(jwt) {
  localStorage.setItem('session-key', jwt);
}

function generateRandomJWT(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getUserData(data) {
  const user = JSON.parse(localStorage.getItem(data.email));
  if (user === null) {
    return {
      status: 400,
      payload: "Email ID doesnot exist!",
    };
  } else {
    if (user.password === data.password) {
      return {
        status: 200,
        jwt: generateRandomJWT(200),
      };
    } else {
      return {
        status: 400,
        payload: "Invalid password!",
      };
    }
  }
}
