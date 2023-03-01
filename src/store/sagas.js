import { all, fork } from "redux-saga/effects";
//layout
import LayoutSaga from "./layouts/saga";
//Auth
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import OtpSaga from './auth/otp/saga'
import ForgetSaga from "./auth/forgetpwd/saga";
import ProfileSaga from "./auth/profile/saga";

//calendar
import calendarSaga from "./calendar/saga";
//chat
import chatSaga from "./chat/saga";
//ecommerce
import ecommerceSaga from "./ecommerce/saga";

//Project
import projectSaga from "./projects/saga";
// Task
import taskSaga from "./tasks/saga";
// Crypto
import cryptoSaga from "./crypto/saga";
//TicketsList
import ticketsSaga from "./tickets/saga";

//crm
import crmSaga from "./crm/saga";
//invoice
import invoiceSaga from "./invoice/saga";
//mailbox
import mailboxSaga from "./mailbox/saga";

// Dashboard Analytics
import dashboardAnalyticsSaga from "./dashboardAnalytics/saga";

// Dashboard CRM
import dashboardCrmSaga from "./dashboardCRM/saga";

// Dashboard Ecommerce
import dashboardEcommerceSaga from "./dashboardEcommerce/saga";

// Dashboard Crypto
import dashboardCryptoSaga from "./dashboardCrypto/saga";

// Dashboard Project
import dashboardProjectSaga from "./dashboardProject/saga";

// Dashboard NFT
import dashboardNFTSaga from "./dashboardNFT/saga";

// Pages > Team
import teamSaga from "./team/saga";

// File Manager
import fileManager from "./fileManager/saga";

// To do
import todos from "./todos/saga"

// new import
import phoneAuthSaga from "./auth/phone/saga";
import mentorDetailSaga from "./mentorDetail/saga";
import mentorCreateAuthSaga from "./mentor/mentorCreate/saga";
import studentDetailSaga from "./student/studentList/saga";
import mentorProfileSaga from "./mentor/mentorProfile/saga";
import mentorAssignedSessionSaga from "./session/FMASession/saga";
import mentorSessionSaga from "./session/sessions/saga";
import studentProfileSaga from "./student/studentProfile/saga";
import DetailSessionSaga from "./session/SessionDetail/saga";
import T_SessionSaga from "./session/TodaysSession/saga";
import A_SessionSaga from "./session/AttendedSession/saga";
import UC_SessionSaga from "./session/UpComingSession/saga";
import mentorEditAuthSaga from "./mentor/editMentorProfile/saga";
import mentorAvailAuthSaga from "./mentor/mentorAvailability/saga";
import SubjectExpertSaga from "./mentor/subject_expert/saga";
import IndiMentorAvailSaga from "./mentor/indiMentorAvail/saga";
import sessionBookAuthSaga from "./session/sessionBook/saga";
import deleteSessionAuthSaga from "./session/deleteSession/saga";
import studentAssignedSessionSaga from "./session/StudentAssignedSession/saga";
import mentorDeleteAuthSaga from "./mentor/deleteMentor/saga";
import GetCityDetailData from "./commonR/city/saga";
import { GetStateDetailData } from "./commonR/state/saga";
import addMentorAuthSaga from "./mentor/mentorDef/saga";
import OtpResendUserauthSaga from "./auth/resendOtp/saga";

//mentor Side
import { GetMentorDashData } from "./mentorSide/mentorDash/saga";
import { GetMentorSessData } from "./mentorSide/mentorSession/saga";
import { Get_Ms_Student_Data } from "./mentorSide/studentList/saga";
import { GetStudData } from "./mentorSide/studentData/saga";
import { Ms_GetStudentProfileData } from "./mentorSide/student_Profile/saga";
import { Get_Ms_DetailSessionData } from "./mentorSide/sessionDetail/saga";
import msMentorAvailAuthSaga from "./mentorSide/mentoravail/saga";
import { GetMentorAvailabilityData } from "./mentorSide/mentorAvailability/saga";
import { Ms_GetPreTestSeriesData } from "./mentorSide/reports/pre_test_series/saga";
import { Ms_GetPreTestListData } from "./mentorSide/reports/pre_test_list/saga";
import { get_Pre_stud_reportData } from "./mentorSide/reports/pre_stud_report/saga";
import { get_Mnt_Sess_reportData } from "./mentorSide/reports/mentor_session_report/saga";
import { get_student_past_session_detail_Data } from "./mentorSide/reports/student_past_session/saga";

//student Side

import { GetStudentDashData } from "./studentSide/studentDash/saga";
import { GetStudentPastSessData } from "./studentSide/pastSessions/saga";
import { GetStuSubjectExpertData } from "./studentSide/subject_expert/saga"
import { GetStuMentorListData } from "./studentSide/mentor_list/saga";
import { GetStuMentorAvailData } from "./studentSide/mentor_avail/saga";
import book_SessionsAuthSaga from "./studentSide/bookSession/saga";

export default function* rootSaga() {
  yield all([
    // new import
    fork(OtpResendUserauthSaga),
    fork(get_student_past_session_detail_Data),
    fork(get_Mnt_Sess_reportData),
    fork(get_Pre_stud_reportData),
    fork(Ms_GetPreTestListData),
    fork(book_SessionsAuthSaga),
    fork(Ms_GetPreTestSeriesData),
    fork(GetStuMentorAvailData),
    fork(GetStuMentorListData),
    fork(GetStuSubjectExpertData),
    fork(GetMentorAvailabilityData),
    fork(msMentorAvailAuthSaga),
    fork(GetStudentPastSessData),
    fork(GetStudentDashData),
    fork(Get_Ms_DetailSessionData),
    fork(Ms_GetStudentProfileData),
    fork(GetStudData),
    fork(Get_Ms_Student_Data),
    fork(GetMentorSessData),
    fork(GetMentorDashData),
    fork(addMentorAuthSaga),
    fork(GetStateDetailData),
    fork(GetCityDetailData),
    fork(mentorDeleteAuthSaga),
    fork(studentAssignedSessionSaga),
    fork(deleteSessionAuthSaga),
    fork(sessionBookAuthSaga),
    fork(IndiMentorAvailSaga),
    fork(SubjectExpertSaga),
    fork(mentorAvailAuthSaga),
    fork(mentorEditAuthSaga),
    fork(UC_SessionSaga),
    fork(A_SessionSaga),
    fork(T_SessionSaga),
    fork(DetailSessionSaga),
    fork(studentProfileSaga),
    fork(mentorSessionSaga), 
    fork(mentorAssignedSessionSaga),
    fork(mentorProfileSaga),
    fork(studentDetailSaga),
    fork(mentorCreateAuthSaga),
    fork(mentorDetailSaga),
    fork(phoneAuthSaga),
    //public
    fork(OtpSaga),
    fork(LayoutSaga),
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(chatSaga),
    fork(projectSaga),
    fork(taskSaga),
    fork(cryptoSaga),
    fork(ticketsSaga),
    fork(calendarSaga),
    fork(ecommerceSaga),
    fork(crmSaga),
    fork(invoiceSaga),
    fork(mailboxSaga),
    fork(dashboardAnalyticsSaga),
    fork(dashboardCrmSaga),
    fork(dashboardEcommerceSaga),
    fork(dashboardCryptoSaga),
    fork(dashboardProjectSaga),
    fork(dashboardNFTSaga),
    fork(teamSaga),
    fork(fileManager),
    fork(todos),
  ]);
}
