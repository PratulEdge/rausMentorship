import axios from "axios";
const headers = {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow- ": "Content-Type",
    "Authorization": `token ${localStorage.getItem("token")}`
  }

  export const studentDash = () => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          "http://13.127.98.218/mentorship/student/dashboard/", { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }


  export const studentSessions = () => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          "http://13.127.98.218/mentorship/student/my-sessions/", { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }