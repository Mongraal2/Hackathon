const Appointment = require("../../models/patient/appointmentModel");
const Doctor = require("../../models/clinic/doctorModel");
const Clinic = require("../../models/clinic/clinicModel");
const Patient = require("../../models/patient/patientModel");

const addDaysInCurrentDate = (days) => {
  Date.prototype.addDays = function (d) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + d);
    return date;
  };
  var date = new Date();
  const today = date.addDays(days);
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

exports.createAppointment = async (req, res) => {
  try {
    const { doctorId, patientId, clinicId, bookingSift, bookingDate } =
      req.body;
    const doctor = await Doctor.findById(doctorId);
    const clinic = await Clinic.findById(clinicId);
    const patient = await Patient.findById(patientId);

    data = [];

    // to verify slot

    for (let i = 0; i < doctor.clinic.length; i++) {
      const doctorElement = doctor.clinic[i];
      if (clinic._id.equals(doctorElement.clinic)) {
        if (doctorElement.asPer === "weekly") {
          for (let i = 0; i < doctorElement.availabilityBefore; i++) {
            const addedDate = new Date(addDaysInCurrentDate(i));
            const weekDate = addedDate.getDay();
            const indexDate = addDaysInCurrentDate(i);
            const bookedAppointmentOfMorning = await Appointment.find({
              doctor: doctor._id,
              bookingDate: indexDate,
              status: "booked",
              bookingSift: "morning",
            });
            const bookedAppointmentOfEvening = await Appointment.find({
              doctor: doctor._id,
              bookingDate: indexDate,
              status: "booked",
              bookingSift: "evening",
            });
            if (weekDate === 0) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.sun.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.sun.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.sun.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.sun.morningTime.from,
                  endTime: doctorElement.asPerWeekly.sun.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.sun.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.sun.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.sun.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.sun.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.sun.eveningTime.till,
                },
              });
            } else if (weekDate === 1) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.mon.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.mon.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.mon.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.mon.morningTime.from,
                  endTime: doctorElement.asPerWeekly.mon.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.mon.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.mon.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.mon.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.mon.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.mon.eveningTime.till,
                },
              });
            } else if (weekDate === 2) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.tue.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.tue.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.tue.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.tue.morningTime.from,
                  endTime: doctorElement.asPerWeekly.tue.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.tue.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.tue.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.tue.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.tue.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.tue.eveningTime.till,
                },
              });
            } else if (weekDate === 3) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.wed.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.wed.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.wed.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.wed.morningTime.from,
                  endTime: doctorElement.asPerWeekly.wed.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.wed.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.wed.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.wed.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.wed.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.wed.eveningTime.till,
                },
              });
            } else if (weekDate === 4) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.thr.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.thr.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.thr.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.thr.morningTime.from,
                  endTime: doctorElement.asPerWeekly.thr.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.thr.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.thr.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.thr.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.thr.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.thr.eveningTime.till,
                },
              });
            } else if (weekDate === 5) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.fri.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.fri.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.fri.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.fri.morningTime.from,
                  endTime: doctorElement.asPerWeekly.fri.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.fri.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.fri.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.fri.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.fri.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.fri.eveningTime.till,
                },
              });
            } else if (weekDate === 6) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.sat.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.sat.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.sat.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.sat.morningTime.from,
                  endTime: doctorElement.asPerWeekly.sat.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.sat.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.sat.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.sat.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.sat.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.sat.eveningTime.till,
                },
              });
            }
          }
        } else {
          // with date format
          for (let i = 0; i < doctorElement.availabilityBefore; i++) {
            const indexDate = addDaysInCurrentDate(i);
            const bookedAppointmentOfMorning = await Appointment.find({
              doctor: doctor._id,
              bookingDate: indexDate,
              status: "booked",
              bookingSift: "morning",
            });
            const bookedAppointmentOfEvening = await Appointment.find({
              doctor: doctor._id,
              bookingDate: indexDate,
              status: "booked",
              bookingSift: "evening",
            });

            doctorElement.asPerDate.some((el) => {
              if (el.date.date === indexDate) {
                data.push({
                  date: el.date.date,
                  morning: {
                    close: el.date.morningTime.close,
                    availableSlots:
                      el.date.morningTime.slot -
                      bookedAppointmentOfMorning.length,
                    totalSlots: el.date.morningTime.slot,
                    startTime: el.date.morningTime.from,
                    endTime: el.date.morningTime.till,
                  },
                  evening: {
                    close: el.date.eveningTime.close,
                    availableSlots:
                      el.date.eveningTime.slot -
                      bookedAppointmentOfEvening.length,
                    totalSlots: el.date.eveningTime.slot,
                    startTime: el.date.eveningTime.from,
                    endTime: el.date.eveningTime.till,
                  },
                });
              } else {
              }
            });
          }
        }
      }

      // for (let i = 0; i < doctor.clinic.length; i++) {
      //   const doctorElement = doctor.clinic[i];
      //   if (clinicId.equals(doctorElement.clinic)) {
      //   }
      // }
    }

    // create slot
    let singleData = {};
    data.some((el) => {
      if (el.date === bookingDate) singleData = el;
    });
    console.log(singleData);

    const appointmentId = await Appointment.count();

    if (!(singleData === {}) && (singleData.morning || singleData.evening)) {
      if (bookingSift === "morning") {
        if (
          singleData.morning.availableSlots > 0 &&
          !singleData.morning.close
        ) {
          const startTime = singleData.morning.startTime * 60;
          const endTime = singleData.morning.endTime * 60;
          const slot = singleData.morning.totalSlots;
          const availableSlots = singleData.morning.availableSlots;
          const minutes = endTime - startTime;
          const minDiff = (minutes / slot) * (slot - availableSlots);

          const diffInMim = startTime + minDiff;
          const meetHours = Math.trunc(diffInMim / 60);
          const meetMinutes = Math.trunc(diffInMim % 60);

          const appointment = await Appointment.create({
            doctor: doctor._id,
            patient: patient._id,
            clinic: clinic._id,
            bookingDate: bookingDate,
            appointmentId: appointmentId + 1,
            bookingSift,
            meetHours,
            meetMinutes,
          });
          res.status(201).json({
            status: "success",
            message: "appointment created",
            appointment,
          });
        } else {
          res.status(404).json({
            status: "not available",
            message: "slot not   available",
          });
        }
      } else {
        if (
          singleData.evening.availableSlots > 0 &&
          !singleData.evening.close
        ) {
          const startTime = singleData.evening.startTime * 60;
          const endTime = singleData.evening.endTime * 60;
          const slot = singleData.evening.totalSlots;
          const availableSlots = singleData.evening.availableSlots;
          const minutes = endTime - startTime;
          const minDiff = (minutes / slot) * (slot - availableSlots);

          const diffInMim = startTime + minDiff;
          const meetHours = Math.trunc(diffInMim / 60);
          const meetMinutes = Math.trunc(diffInMim % 60);

          const appointment = await Appointment.create({
            doctor: doctor._id,
            patient: patient._id,
            clinic: clinic._id,
            bookingDate: bookingDate,
            appointmentId: appointmentId + 1,
            bookingSift,
            meetHours,
            meetMinutes,
          });
          res.status(201).json({
            status: "success",
            message: "appointment created",
            appointment,
          });
        } else {
          res.status(404).json({
            status: "not available",
            message: "slot not   available",
          });
        }
      }
    } else {
      res.status(404).json({
        status: "not available",
        message: "date not available",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.checkAppointmentAbility = async (req, res) => {
  try {
    data = [];
    const { doctorId, patientId, clinicId } = req.body;
    const doctor = await Doctor.findById(doctorId);
    const clinic = await Clinic.findById(clinicId);
    for (let i = 0; i < doctor.clinic.length; i++) {
      const doctorElement = doctor.clinic[i];
      if (clinic._id.equals(doctorElement.clinic)) {
        if (doctorElement.asPer === "weekly") {
          for (let i = 0; i < doctorElement.availabilityBefore; i++) {
            const addedDate = new Date(addDaysInCurrentDate(i));
            const weekDate = addedDate.getDay();
            const indexDate = addDaysInCurrentDate(i);
            const bookedAppointmentOfMorning = await Appointment.find({
              doctor: doctor._id,
              bookingDate: indexDate,
              status: "booked",
              bookingSift: "morning",
            });
            const bookedAppointmentOfEvening = await Appointment.find({
              doctor: doctor._id,
              bookingDate: indexDate,
              status: "booked",
              bookingSift: "evening",
            });
            if (weekDate === 0) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.sun.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.sun.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.sun.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.sun.morningTime.from,
                  endTime: doctorElement.asPerWeekly.sun.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.sun.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.sun.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.sun.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.sun.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.sun.eveningTime.till,
                },
              });
            } else if (weekDate === 1) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.mon.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.mon.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.mon.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.mon.morningTime.from,
                  endTime: doctorElement.asPerWeekly.mon.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.mon.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.mon.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.mon.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.mon.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.mon.eveningTime.till,
                },
              });
            } else if (weekDate === 2) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.tue.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.tue.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.tue.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.tue.morningTime.from,
                  endTime: doctorElement.asPerWeekly.tue.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.tue.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.tue.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.tue.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.tue.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.tue.eveningTime.till,
                },
              });
            } else if (weekDate === 3) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.wed.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.wed.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.wed.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.wed.morningTime.from,
                  endTime: doctorElement.asPerWeekly.wed.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.wed.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.wed.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.wed.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.wed.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.wed.eveningTime.till,
                },
              });
            } else if (weekDate === 4) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.thr.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.thr.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.thr.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.thr.morningTime.from,
                  endTime: doctorElement.asPerWeekly.thr.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.thr.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.thr.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.thr.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.thr.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.thr.eveningTime.till,
                },
              });
            } else if (weekDate === 5) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.fri.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.fri.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.fri.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.fri.morningTime.from,
                  endTime: doctorElement.asPerWeekly.fri.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.fri.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.fri.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.fri.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.fri.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.fri.eveningTime.till,
                },
              });
            } else if (weekDate === 6) {
              data.push({
                date: addDaysInCurrentDate(i),
                morning: {
                  close: doctorElement.asPerWeekly.sat.morningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.sat.morningTime.slot -
                    bookedAppointmentOfMorning.length,
                  totalSlots: doctorElement.asPerWeekly.sat.morningTime.slot,
                  startTime: doctorElement.asPerWeekly.sat.morningTime.from,
                  endTime: doctorElement.asPerWeekly.sat.morningTime.till,
                },
                evening: {
                  close: doctorElement.asPerWeekly.sat.eveningTime.close,
                  availableSlots:
                    doctorElement.asPerWeekly.sat.eveningTime.slot -
                    bookedAppointmentOfEvening.length,
                  totalSlots: doctorElement.asPerWeekly.sat.eveningTime.slot,
                  startTime: doctorElement.asPerWeekly.sat.eveningTime.from,
                  endTime: doctorElement.asPerWeekly.sat.eveningTime.till,
                },
              });
            }
          }
        } else {
          // with date format
          for (let i = 0; i < doctorElement.availabilityBefore; i++) {
            const indexDate = addDaysInCurrentDate(i);
            const bookedAppointmentOfMorning = await Appointment.find({
              doctor: doctor._id,
              bookingDate: indexDate,
              status: "booked",
              bookingSift: "morning",
            });
            const bookedAppointmentOfEvening = await Appointment.find({
              doctor: doctor._id,
              bookingDate: indexDate,
              status: "booked",
              bookingSift: "evening",
            });

            doctorElement.asPerDate.some((el) => {
              if (el.date.date === indexDate) {
                data.push({
                  date: el.date.date,
                  morning: {
                    close: el.date.morningTime.close,
                    availableSlots:
                      el.date.morningTime.slot -
                      bookedAppointmentOfMorning.length,
                    totalSlots: el.date.morningTime.slot,
                    startTime: el.date.morningTime.from,
                    endTime: el.date.morningTime.till,
                  },
                  evening: {
                    close: el.date.eveningTime.close,
                    availableSlots:
                      el.date.eveningTime.slot -
                      bookedAppointmentOfEvening.length,
                    totalSlots: el.date.eveningTime.slot,
                    startTime: el.date.eveningTime.from,
                    endTime: el.date.eveningTime.till,
                  },
                });
              }
            });
          }
        }
      }
    }
    res.status(200).json({ status: "success", message: "successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointment = await Appointment.findById(appointmentId);
    appointment.status = "canceled";
    await appointment.save();
    res.status(200).json({ status: "success", message: "canceled" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.getAppointmentOfPatient = async (req, res) => {
  try {
    const { patientId } = req.params;
    const patient = await Patient.findById(patientId);
    const appointment = await Appointment.find({ patient: patient._id });
    res
      .status(200)
      .json({ status: "success", message: "SuccessFull", appointment });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
