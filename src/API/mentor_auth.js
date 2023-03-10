import axios from "axios";

const currentDateTime = new Date().toLocaleTimeString('en-US')
const event = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0];

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

  export const Ms_Mentor_Profile = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://13.127.98.218/mentorship/mentor/update-profile/`, { headers }
        )
        .then(res => {
          resolve(res.detail)
        })
        .catch(error => reject(error))
    })
  }


  export const Prelims_series = (email, examType) => {
    console.log(email, examType," series email hitted")
    // console(series, "payload data")
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://prep.edgecanvas.com/api/v1/mentorship-test-series/?series_type=${examType}&email=${email}`, { 
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

  export const Prelims_Test_List = (email, examType, series_id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://prep.edgecanvas.com/api/v1/mentorship-test/?series_type=${examType}&email=${email}&test_series_id=${series_id}`, { 
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


  export const Prelims_Test_Report = (id,email,examType) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://prep.edgecanvas.com/api/v1/mentorship-test-report/?series_type=${examType}&email=${email}&attempt_id=${id}`, { 
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


  export const Mentor_Session_Report = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://13.127.98.218/mentorship/mentor/sessions?schedule_date_time__lte=${event}`, { headers }
        )
        .then(res => {
          resolve(res.detail)
        })
        .catch(error => reject(error))
    })
  }


  export const Student_Past_Session_data = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://13.127.98.218/mentorship/mentor/student_sessions/?student_id=${id}&status=5`, { headers }
        )
        .then(res => {
          resolve(res.detail)
        })
        .catch(error => reject(error))
    })
  }

  export const Mains_series = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://prep.edgecanvas.com/api/v1/mentorship-test-series/?series_type=mains&email=ecv1@yopmail.com`, { 
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

  export const Ms_Edit_Mentor_Profile_value = (id, user) => {
    console.log(id, "Edit user id")
    return new Promise((resolve, reject) => {
      console.log(id, "in Edit api")
      axios
        .patch(
          `http://13.127.98.218/mentorship/mentor/update-profile/${id}/`,user, {headers }
        )
        .then(res => {
          resolve(res)
          console.log(res, "Edit res data")
        })
        .catch(error => reject(error))
    })
  }