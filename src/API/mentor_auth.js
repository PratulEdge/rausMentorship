import axios from "axios";
const headers = {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow- ": "Content-Type",
    "Authorization": `token ${localStorage.getItem("token")}`
  }

  export const mentorDash = () => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          "http://13.127.98.218/mentorship/mentor/dashboard", { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }
  export const mentorSession = () => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          "http://13.127.98.218/mentorship/mentor/sessions/", { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }

  export const studentData = () => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          "http://13.127.98.218/mentorship/mentor/student-data/", { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }

  export const Ms_studentProfile = (id) => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          `http://13.127.98.218/mentorship/mentor/student-data/?student_id=${id}`, { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res, "response Data")
        })
        .catch(error => reject(error))
    })
  }

  export const Ms_SessionsDetail = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://13.127.98.218/mentorship/mentor/sessions/?session_id=${id}`, { headers }
        )
        .then(res => {
          resolve(res.detail)
        })
        .catch(error => reject(error))
    })
  }


  export const Ms_MentorAvial = avilaObject => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `http://13.127.98.218/mentorship/mentor/slot-avail/`, avilaObject, { headers }
        )
        .then(res => {
          resolve(res)
        })
        .catch(error => reject(error))
    })
  }

  export const Ms_Availability = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://13.127.98.218/mentorship/mentor/slot-avail/`, { headers }
        )
        .then(res => {
          resolve(res.detail)
        })
        .catch(error => reject(error))
    })
  }


  export const Prelims_series = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://prep.edgecanvas.com/api/v1/mentorship-test-series/?series_type=prelims&email=ecv1@yopmail.com`, { 
            "Content-Type": "multipart/form-data",
            // "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow- ": "Content-Type",
            "Authorization": `token ${localStorage.getItem("token")}`
          } 
        )
        .then(res => {
          resolve(res.data)
        })
        .catch(error => reject(error))
    })
  }
