import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CreateDiagnostic from "../diagnosticCenter/createDiagnostic/CreateDiagnostic";
// import DiagnosticList from "../adminProfile/diagnosticCenter/DiagnosticList";
import AddSchedule from "../doctorSchedule/addDoctor/AddSchedule";
import Spinner from "../spinner/Spinner";
import UserPermission from "../userPermission/UserPermission";

const DashboardMain = React.lazy(() =>
  import("../dashboardMain/DashboardMain")
);
const Patient = React.lazy(() => import("../patient/Patient"));
const BlockedDoctor = React.lazy(() =>
  import("../doctors/blockedDoctor/BlockedDoctor")
);
const AddDoctorToClinic = React.lazy(() =>
  import("../clinics/AddDoctorToClinic")
);

const Clinic = React.lazy(() => import("../clinics/Clinics"));
const UnApprovedClinic = React.lazy(() =>
  import("../clinics/unApprovedClinic/unApprovedClinic")
);
const BlockedClinic = React.lazy(() =>
  import("../clinics/blockedClinic/BlockedClinic")
);
const CreateClinic = React.lazy(() =>
  import("../clinics/createClinic/CreateClinic")
);

const Diagnostic = React.lazy(() => import("../diagnosticCenter/Diagnostic"));
const DiagnosticList = React.lazy(() =>
  import("../diagnosticCenter/DiagnosticList")
);

const Doctor = React.lazy(() => import("../doctors/Doctors"));
const ClinicSchedule = React.lazy(() =>
  import("../clinics/schedule/ClinicSchedule")
);
const DoctorSchedule = React.lazy(() => import("../doctors/DoctorSchedule"));
const Department = React.lazy(() => import("../department/Department"));
const CreateDepartment = React.lazy(() =>
  import("../department/createDepartment/CreateDepartment")
);
// const Fees = React.lazy(() => import("../appointment/Fees"));
// const Appointment = React.lazy(() => import("../appointment/Appointment"));
// const AddAppointment = React.lazy(() =>
//   import("../appointment/AddAppointment")
// );
const Report = React.lazy(() => import("../report/Report"));
const UnApprovedDoctor = React.lazy(() =>
  import("../doctors/unApprovedDoctor/UnApprovedDoctor")
);

const CreateSpecialist = React.lazy(() =>
  import("../specialist/createSpecialist/CreateSpecialist")
);

const Specialist = React.lazy(() => import("../specialist/Specialist"));

const Payments = React.lazy(() => import("../payments/Payments"));
const Commission = React.lazy(() => import("../commission/Commission"));
const AdminProfile = React.lazy(() => import("../adminProfile/AdminProfile"));
const Appointment = React.lazy(() => import("../appointment/Appointment"));
const AddPayment = React.lazy(() => import("../payments/AddPayment"));
const CreateDoctor = React.lazy(() =>
  import("../doctors/createDoctor/CreateDoctor")
);
// const DoctorSchedule = React.lazy(() =>
//   import("../doctors/DoctorSchedule")
// );
const AddDoctor = React.lazy(() =>
  import("../doctorSchedule/addDoctor/AddDoctor")
);

const Middle = () => {
  const params = useParams();
  return (
    <React.Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardMain />} />
        <Route path="/patient" element={<Patient />}></Route>
        <Route
          path="/clinics"
          element={<Navigate replace to="/clinics/clinic-list" />}
        ></Route>
        <Route path="/clinics/clinic-list" element={<Clinic />}></Route>
        <Route path="/clinics/diagnostic-center" element={<Clinic />}></Route>
        <Route
          path="/clinics/add-doctor-to-clinic"
          element={<AddDoctorToClinic />}
        ></Route>

        <Route
          path="/clinics/clinic-schedule"
          element={<ClinicSchedule />}
        ></Route>

        <Route
          path="/clinics/blocked-clinic"
          element={<BlockedClinic />}
        ></Route>
        <Route
          path="/clinics/unapproved-clinic-list"
          element={<UnApprovedClinic />}
        ></Route>
        <Route path="/clinics/create-clinic" element={<CreateClinic />}></Route>

        <Route
          path="/doctors"
          element={<Navigate replace to="/doctors/doctor-list" />}
        ></Route>
        <Route path="/doctors/doctor-list" element={<Doctor />}></Route>
        <Route path="/doctors/create-doctor" element={<CreateDoctor />}></Route>
        <Route
          path="/doctors/blocked-doctor-list"
          element={<BlockedDoctor />}
        ></Route>
        <Route
          path="/doctors/unapproved-doctor-list"
          element={<UnApprovedDoctor />}
        ></Route>
        <Route
          path="/doctors/doctor-schedule"
          element={<DoctorSchedule />}
        ></Route>
        <Route path="/doctors/add-schedule" element={<AddDoctor />}></Route>

        <Route
          path="/diagnostic"
          element={<Navigate replace to="/diagnostic/diagnostic-list" />}
        ></Route>
        <Route
          path="/diagnostic/diagnostic-list"
          element={<Diagnostic />}
        ></Route>
        <Route
          path="diagnostic/create-diagnostic"
          element={<CreateDiagnostic />}
        ></Route>

        <Route
          path="/diagnostic/blocked-diagnostic"
          element={<Doctor />}
        ></Route>
        <Route
          path="/diagnostic/unapproved-diagnostic-list"
          element={<CreateDoctor />}
        ></Route>
        <Route
          path="/diagnostic/diagnostic-schedule"
          element={<BlockedDoctor />}
        ></Route>

        <Route
          path="/department"
          element={<Navigate replace to="/department/department-list" />}
        ></Route>

        <Route
          path="/department/department-list"
          element={<Department />}
        ></Route>
        <Route
          path="/department/create-department"
          element={<CreateDepartment />}
        ></Route>
        <Route
          path="/specialist"
          element={<Navigate replace to="/specialist/specialist-list" />}
        ></Route>
        <Route
          path="/specialist/specialist-list"
          element={<Specialist />}
        ></Route>
        <Route
          path="/specialist/create-specialist"
          element={<CreateSpecialist />}
        ></Route>

        <Route
          path="/appointment"
          element={<Navigate replace to="/appointment/appointment-list" />}
        ></Route>
        <Route
          path="/appointment/appointment-list"
          element={<Appointment />}
        ></Route>

        <Route
          path="/doctor-schedule/add-schedule"
          element={<AddDoctor />}
        ></Route>
        {/* <Route path="/appointment" element={<Appointment />}></Route> */}
        {/* <Route path="/fees" element={<Fees />}></Route>
        <Route path="/fees/clinic" element={<FeeClinic />}></Route> */}
        <Route path="/payments" element={<Payments />}></Route>
        <Route path="/payments/add" element={<AddPayment />}></Route>
        <Route path="/commission" element={<Commission />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/admin-profile" element={<AdminProfile />}></Route>
        <Route path="/user-permission" element={<UserPermission />}></Route>
      </Routes>
    </React.Suspense>
  );
};

export default Middle;
