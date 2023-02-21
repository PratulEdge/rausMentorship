import axios from "axios";
const event = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0];
var todayDate = new Date(),
  date = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
var today = new Date(),
  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

const headers = {
  "Content-Type": "multipart/form-data",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow- ": "Content-Type",
  "Authorization": `token ${localStorage.getItem("token")}`
}

console.log(headers,"headers ")


export const login = loginObject => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow- ": "Content-Type",
    }
    console.log("in login api email")
    axios
      .post('http://13.127.98.218/mentorship/email-auth/', loginObject, { headers })
      .then(response => {
        console.log(response, "inside api")
        resolve(response)
      })
      .catch(error => reject(error))
  })
}

export const otp_verify = otpObject => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow- ": "Content-Type",
    }
    console.log(otpObject,"in token verfiy api")
    axios
      .post('http://13.127.98.218/mentorship/gen-token/', otpObject, { headers })
      .then(response => {
        console.log(response, "inside api")
        localStorage.setItem("token", response.token)
        localStorage.setItem("user_type", response.user_type)
        resolve(response)
      })
      .catch(error => reject(error))
  })
}

export const phoneLogin = phoneLoginObject => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow- ": "Content-Type",
    }
    console.log("in phone login api")
    axios
      .post('http://13.127.98.218/mentorship/mobile-auth/', phoneLoginObject, { headers })
      .then(response => {
        console.log(response, "inside api")
        resolve(response)
      })
      .catch(error => reject(error))
  })
}

//Mentor API Admin
export const mentorLsit = () => {
  return new Promise((resolve, reject) => {
    console.log("in mentorList api")
    axios
      .get(
        "http://13.127.98.218/mentorship/mentor-profile/", { headers }
      )
      .then(res => {
        resolve(res.detail)
        console.log(res.data.id, "response Data")
      })
      .catch(error => reject(error))
  })
}
export const mentorCreate = mentorCreate => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://13.127.98.218/mentorship/all-mentor/', mentorCreate, { headers })
      .then(response => {
        resolve(response)
        console.log(response, "create reponse data")
      })
      .catch(error => reject(error))
  })
}

export const mentorProfile = (id) => {
  return new Promise((resolve, reject) => {
    console.log(id, "in mentorList api")
    axios
      .get(
        `http://13.127.98.218/mentorship/mentor-profile/${id}/`, { headers }
      )
      .then(res => {
        resolve(res.detail)
        console.log(res.detail, "res data")
      })
      .catch(error => reject(error))
  })
}

export const editMentorProfile = (id, user) => {
  console.log(id, "Edit user id")
  return new Promise((resolve, reject) => {
    console.log(id, "in Edit api")
    axios
      .put(
        `http://13.127.98.218/mentorship/mentor-profile/${id}/`,user, {headers }
      )
      .then(res => {
        resolve(res)
        console.log(res, "Edit res data")
      })
      .catch(error => reject(error))
  })
}

export const deleteMentorProfile = (mentor_id, user) => {
  console.log(mentor_id, "delete user id")
  return new Promise((resolve, reject) => {
    axios
      .put(
        `http://13.127.98.218/mentorship/mentor-profile/${mentor_id}/`,user, {headers }
      )
      .then(res => {
        resolve(res)
        console.log(res, "Edit res data")
      })
      .catch(error => reject(error))
  })
}
export const mentorAvail = user => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://13.127.98.218/mentorship/slot-avail/', user, { headers })
      .then(response => {
        resolve(response)
        console.log(response, "create reponse data")
      })
      .catch(error => reject(error))
  })
}

export const individualMentorAvail = id => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://13.127.98.218/mentorship/slot-avail/?mentor_id=${id}`, { headers })
      .then(response => {
        resolve(response)
        console.log(response, "create reponse data")
      })
      .catch(error => reject(error))
  })
}

export const subjectExpert = () => {
  return new Promise((resolve, reject) => {
    console.log("in mentorList api")
    axios
      .get(
        "http://13.127.98.218/mentorship/subject-expert/", { headers }
      )
      .then(res => {
        resolve(res)
        console.log(res, "Subject Expert response Data")
      })
      .catch(error => reject(error))
  })
}


//student Api Admin
export const studentList = () => {
  return new Promise((resolve, reject) => {
    console.log("in mentorList api")
    axios
      .get(
        "http://13.127.98.218/mentorship/all-students/", { headers }
      )
      .then(res => {
        resolve(res.detail)
        console.log(res, "response Data")
      })
      .catch(error => reject(error))
  })
}

export const studentProfile = (id) => {
  return new Promise((resolve, reject) => {
    console.log("in mentorList api")
    axios
      .get(
        `http://13.127.98.218/mentorship/all-students/${id}/`, { headers }
      )
      .then(res => {
        resolve(res.detail)
        console.log(res, "response Data")
      })
      .catch(error => reject(error))
  })
}


//Session API Admin

export const sessionBook = user => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://13.127.98.218/mentorship/session/', user, { headers })
      .then(response => {
        resolve(response)
        console.log(response, "create reponse data")
      })
      .catch(error => reject(error))
  })
}


export const MentorSessions = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "http://13.127.98.218/mentorship/session/", { headers }
      )
      .then(res => {
        resolve(res.detail)
      })
      .catch(error => reject(error))
  })
}

export const StudentAssignedSessions = (id) => {
  return new Promise((resolve, reject) => {
    console.log(id, "mentor individual sessions 63a590f792fc2ba09ce90663")
    axios
      .get(
        `http://13.127.98.218/mentorship/session/?student_id=${id}`, { headers }
      )
      .then(res => {
        resolve(res.detail)
        console.log(res.id, "response Data")
      })
      .catch(error => reject(error))
  })
}

export const MentorAssignedSessions = (id) => {
  return new Promise((resolve, reject) => {
    console.log(id, "mentor individual sessions 63a590f792fc2ba09ce90663")
    axios
      .get(
        `http://13.127.98.218/mentorship/session/?mentor_id=${id}`, { headers }
      )
      .then(res => {
        resolve(res.detail)
        console.log(res.id, "response Data")
      })
      .catch(error => reject(error))
  })
}


export const SessionsDetail = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://13.127.98.218/mentorship/session/?session_id=${id}`, { headers }
      )
      .then(res => {
        resolve(res.detail)
      })
      .catch(error => reject(error))
  })
}

export const SessionsDelete = (sessionDeleteObj) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `http://13.127.98.218/mentorship/cancel/`,sessionDeleteObj, { headers }
      )
      .then(res => {
        resolve(res)
      })
      .catch(error => reject(error))
  })
}

export const TodaySession = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://13.127.98.218/mentorship/session/?schedule_date_time__date=${date}&schedule_date_time__time__gte=${time}`, { headers }
      )
      .then(res => {
        resolve(res.detail)
        console.log(res.detail)
      })
      .catch(error => reject(error))
  })
}

export const AttendantSession = () => {
  console.log(event, "Attendant Date")
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://13.127.98.218/mentorship/session/?schedule_date_time__lte=${event}`, { headers }
      )
      .then(res => {
        resolve(res.detail)
        console.log(res.detail)
      })
      .catch(error => reject(error))
  })
}

export const UpComingSession = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://13.127.98.218/mentorship/session/?schedule_date_time__gte=${event}`, { headers }
      )
      .then(res => {
        resolve(res.detail)
        console.log(res.detail)
      })
      .catch(error => reject(error))
  })
}
