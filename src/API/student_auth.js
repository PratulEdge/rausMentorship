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

  export const student_Subject_expert = () => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          "http://13.127.98.218/mentorship/subject-expert/", { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }

  export const student_Mentor_List = () => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          "http://13.127.98.218/mentorship/student/mentor-list/", { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }

  export const student_Mentor_avail = (id) => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          `http://13.127.98.218/mentorship/student/slot-avail/?is_booked=False&mentor_id=${id}`, { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }

  export const student_Book_Session = (id, user) => {
    return new Promise((resolve, reject) => {
      console.log(id,"in book session api")
      axios
        .patch(
          `http://13.127.98.218/mentorship/student/book-mentor/${id}/`, user,{ headers }
        )
        .then(res => {
          resolve(res)
          console.log(res.data.id, " book session response Data")
        })
        .catch(error => reject(error))
    })
  }