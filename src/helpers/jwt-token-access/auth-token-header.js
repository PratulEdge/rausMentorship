export default function authHeader() {
  const obj = JSON.parse(sessionStorage.getItem("authUser"))
  console.log(obj.data.token, "token4")
  if (obj && obj.accessToken) {
    return { Authorization: obj.accessToken }
  } else {
    return {}
  }
  
}
