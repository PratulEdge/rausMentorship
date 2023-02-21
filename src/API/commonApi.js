import axios from "axios";

const headers = {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow- ": "Content-Type",
    "Authorization": `token ${localStorage.getItem("token")}`
  }

  export const selectCity = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://13.127.98.218/city/?state_id=${id}&format=json`, { headers }
        )
        .then(res => {
          resolve(res)
        //   console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }

  export const selectState = () => {
    return new Promise((resolve, reject) => {
      console.log("in Subject_expert api")
      axios
        .get(
          "http://13.127.98.218/state/?country_id=101&format=json", { headers }
        )
        .then(res => {
          resolve(res)
        //   console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }