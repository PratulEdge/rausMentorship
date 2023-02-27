import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";
import Otp from './auth/otp/reducer'
//Calendar
import Calendar from "./calendar/reducer";
//Chat
import chat from "./chat/reducer";
//Ecommerce
import Ecommerce from "./ecommerce/reducer";

//Project
import Projects from "./projects/reducer";

// Tasks
import Tasks from "./tasks/reducer";
//Form advanced
import changeNumber from "./formAdvanced/reducer";

//Crypto
import Crypto from "./crypto/reducer";

//TicketsList
import Tickets from "./tickets/reducer";
//Crm
import Crm from "./crm/reducer";

//Invoice
import Invoice from "./invoice/reducer";

//Mailbox
import Mailbox from "./mailbox/reducer";

// Dashboard Analytics
import DashboardAnalytics from "./dashboardAnalytics/reducer";

// Dashboard CRM
import DashboardCRM from "./dashboardCRM/reducer";

// Dashboard Ecommerce
import DashboardEcommerce from "./dashboardEcommerce/reducer";

// Dashboard Cryto
import DashboardCrypto from "./dashboardCrypto/reducer";

// Dashboard Cryto
import DashboardProject from "./dashboardProject/reducer";

// Dashboard NFT
import DashboardNFT from "./dashboardNFT/reducer";

// Pages > Team
import Team from "./team/reducer";

// File Manager
import FileManager from "./fileManager/reducer"

// To do
import Todos from "./todos/reducer"

// new import
import PhoneLogin from './auth/phone/reducer'

import UserData from './mentorDetail/reducer'

import mentorCreate from "./mentor/mentorCreate/reducer";
import StudentUserData from "./student/studentList/reducer";
import MentorProfileData from "./mentor/mentorProfile/reducer";
import MentorAssignedSessionData from "./session/FMASession/reducer";
import MentorSessionData from "./session/sessions/reducer";
import StudentProfileData from "./student/studentProfile/reducer";
import DetailSessionData from "./session/SessionDetail/reducer";
import TSessionData from "./session/TodaysSession/reducer";
import ASessionData from "./session/AttendedSession/reducer";
import UCSessionData from "./session/UpComingSession/reducer";
import mentorEdit from "./mentor/editMentorProfile/reducer";
import mentorAvail from "./mentor/mentorAvailability/reducer";
import SubjectExpertData from "./mentor/subject_expert/reducer";
import IndiMentorAvailData from "./mentor/indiMentorAvail/reducer";
import SessionBook from "./session/sessionBook/reducer";
import deleteSessions from "./session/deleteSession/reducer";
import StudentAssignedSessionData from "./session/StudentAssignedSession/reducer";
import mentorDelete from "./mentor/deleteMentor/reducer";
import City from "./commonR/city/reducer";
import State from "./commonR/state/reducer";
import addMentor from "./mentor/mentorDef/reducer";

//mentor side
import MentorDashData from "./mentorSide/mentorDash/reducer";
import MentorSessData from "./mentorSide/mentorSession/reducer";
import Ms_StudentData from "./mentorSide/studentList/reducer";
import StudentData from "./mentorSide/studentData/reducer";
import Ms_StudentProfileData from "./mentorSide/student_Profile/reducer";
import Ms_DetailSessionData from "./mentorSide/sessionDetail/reducer";
import msMentorAvail from "./mentorSide/mentoravail/reducer";
import MntAvailabilityData from "./mentorSide/mentorAvailability/reducer";
import PreTestSeriesData from "./mentorSide/reports/pre_test_series/reducer";


//student side

import StudentDashData from "./studentSide/studentDash/reducer";
import StudentPastSessData from "./studentSide/pastSessions/reducer";
import StuSubjectExpertData from "./studentSide/subject_expert/reducer";
import StuMentorListData from "./studentSide/mentor_list/reducer";
import StuMentorAvailData from "./studentSide/mentor_avail/reducer";
import BookSession from "./studentSide/bookSession/reducer";

const rootReducer = combineReducers({
    // new import
    BookSession,
    PreTestSeriesData,
    StuMentorAvailData,
    StuMentorListData,
    StuSubjectExpertData,
    MntAvailabilityData,
    msMentorAvail,
    StudentPastSessData,
    StudentDashData,
    Ms_DetailSessionData,
    Ms_StudentProfileData,
    StudentData,
    Ms_StudentData,
    MentorSessData,
    MentorDashData,
    addMentor,
    State,
    City,
    mentorDelete,
    StudentAssignedSessionData,
    deleteSessions,
    SessionBook,
    IndiMentorAvailData,
    SubjectExpertData,
    mentorAvail,
    mentorEdit,
    UCSessionData,
    ASessionData,
    TSessionData,
    DetailSessionData,
    StudentProfileData,
    MentorSessionData,
    MentorAssignedSessionData,
    MentorProfileData,
    StudentUserData,
    mentorCreate,
    UserData,
    PhoneLogin,
    Otp,
    Login,
    // public
    Layout,    
    Account,
    ForgetPassword,
    Profile,
    Calendar,
    chat,
    Projects,
    Ecommerce,
    Tasks,
    changeNumber,
    Crypto,
    Tickets,
    Crm,
    Invoice,
    Mailbox,
    DashboardAnalytics,
    DashboardCRM,
    DashboardEcommerce,
    DashboardCrypto,
    DashboardProject,
    DashboardNFT,
    Team,
    FileManager,
    Todos
});

export default rootReducer;