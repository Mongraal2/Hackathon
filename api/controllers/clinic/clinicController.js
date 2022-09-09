const Clinic = require("../../models/clinic/clinicModel");
const Doctor = require("../../models/clinic/doctorModel");
const Appointment = require("../../models/patient/appointmentModel");
const fs = require("fs");
const { Parser } = require("json2csv");

exports.updateClinicTiming = async (req, res) => {
  try {
    const clinic = await Clinic.findById(req.clinic._id);
    const { sun, mon, tue, wed, thr, fri, sat } = req.body;
    console.log(sun);
    if (sun) {
      clinic.trimming.sun.morningTime.from = sun.morningTime.from;
      clinic.trimming.sun.morningTime.till = sun.morningTime.till;
      clinic.trimming.sun.morningTime.close = sun.morningTime.close;
      clinic.trimming.sun.eveningTime.from = sun.eveningTime.from;
      clinic.trimming.sun.eveningTime.till = sun.eveningTime.till;
      clinic.trimming.sun.eveningTime.close = sun.eveningTime.close;
      clinic.trimming.sun.close = sun.close;
    } else {
      clinic.trimming.sun.close = true;
    }
    if (mon) {
      clinic.trimming.mon.morningTime.from = mon.morningTime.from;
      clinic.trimming.mon.morningTime.till = mon.morningTime.till;
      clinic.trimming.mon.morningTime.close = mon.morningTime.close;
      clinic.trimming.mon.eveningTime.from = mon.eveningTime.from;
      clinic.trimming.mon.eveningTime.till = mon.eveningTime.till;
      clinic.trimming.mon.eveningTime.close = mon.eveningTime.close;
      clinic.trimming.mon.close = mon.close;
    } else {
      clinic.trimming.mon.close = true;
    }
    if (tue) {
      clinic.trimming.tue.morningTime.from = tue.morningTime.from;
      clinic.trimming.tue.morningTime.till = tue.morningTime.till;
      clinic.trimming.tue.morningTime.close = tue.morningTime.close;
      clinic.trimming.tue.eveningTime.from = tue.eveningTime.from;
      clinic.trimming.tue.eveningTime.till = tue.eveningTime.till;
      clinic.trimming.tue.eveningTime.close = tue.eveningTime.close;
      clinic.trimming.tue.close = tue.close;
    } else {
      clinic.trimming.tue.close = true;
    }
    if (wed) {
      clinic.trimming.wed.morningTime.from = wed.morningTime.from;
      clinic.trimming.wed.morningTime.till = wed.morningTime.till;
      clinic.trimming.wed.morningTime.close = wed.morningTime.close;
      clinic.trimming.wed.eveningTime.from = wed.eveningTime.from;
      clinic.trimming.wed.eveningTime.till = wed.eveningTime.till;
      clinic.trimming.wed.eveningTime.close = wed.eveningTime.close;
      clinic.trimming.wed.close = wed.close;
    } else {
      clinic.trimming.wed.close = true;
    }
    if (thr) {
      clinic.trimming.thr.morningTime.from = thr.morningTime.from;
      clinic.trimming.thr.morningTime.till = thr.morningTime.till;
      clinic.trimming.thr.morningTime.close = thr.morningTime.close;
      clinic.trimming.thr.eveningTime.from = thr.eveningTime.from;
      clinic.trimming.thr.eveningTime.till = thr.eveningTime.till;
      clinic.trimming.thr.eveningTime.close = thr.eveningTime.close;
      clinic.trimming.thr.close = thr.close;
    } else {
      clinic.trimming.thr.close = true;
    }
    if (fri) {
      clinic.trimming.fri.morningTime.from = fri.morningTime.from;
      clinic.trimming.fri.morningTime.till = fri.morningTime.till;
      clinic.trimming.fri.morningTime.close = fri.morningTime.close;
      clinic.trimming.fri.eveningTime.from = fri.eveningTime.from;
      clinic.trimming.fri.eveningTime.till = fri.eveningTime.till;
      clinic.trimming.fri.eveningTime.close = fri.eveningTime.close;
      clinic.trimming.fri.close = fri.close;
    } else {
      clinic.trimming.fri.close = true;
    }
    if (sat) {
      clinic.trimming.sat.morningTime.from = sat.morningTime.from;
      clinic.trimming.sat.morningTime.till = sat.morningTime.till;
      clinic.trimming.sat.morningTime.close = sat.morningTime.close;
      clinic.trimming.sat.eveningTime.from = sat.eveningTime.from;
      clinic.trimming.sat.eveningTime.till = sat.eveningTime.till;
      clinic.trimming.sat.eveningTime.close = sat.eveningTime.close;
      clinic.trimming.sat.close = sat.close;
    } else {
      clinic.trimming.sat.close = true;
    }
    await clinic.save();
    res
      .status(200)
      .json({ status: "success", message: "successfully updated", clinic });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.addDoctor = async (req, res) => {
  try {
    const { availability, availabilityBefore, asPer, doctorId } = req.body;
    const clinicId = req.clinic._id;
    if (asPer === "weekly") {
      const { sun, mon, tue, wed, thr, fri, sat } = req.body;
      const doctor = await Doctor.findById(doctorId);
      if (doctor.approved) {
        const clinic = await Clinic.findById(clinicId);

        clinic.doctor.push(doctor._id);
        await clinic.save();
        let sunday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let monday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let tuesday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let wednesday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let thursday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let friday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let saturday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        if (sun) {
          sunday.morningTime.from = sun.morningTime.from;
          sunday.morningTime.till = sun.morningTime.till;
          sunday.morningTime.close = sun.morningTime.close;
          sunday.eveningTime.from = sun.eveningTime.from;
          sunday.eveningTime.till = sun.eveningTime.till;
          sunday.eveningTime.close = sun.eveningTime.close;
          sunday.close = sun.close;
        } else {
          sunday.close = true;
        }
        if (mon) {
          monday.morningTime.from = mon.morningTime.from;
          monday.morningTime.till = mon.morningTime.till;
          monday.morningTime.close = mon.morningTime.close;
          monday.eveningTime.from = mon.eveningTime.from;
          monday.eveningTime.till = mon.eveningTime.till;
          monday.eveningTime.close = mon.eveningTime.close;
          monday.close = mon.close;
        } else {
          monday.close = true;
        }
        if (tue) {
          tuesday.morningTime.from = tue.morningTime.from;
          tuesday.morningTime.till = tue.morningTime.till;
          tuesday.morningTime.close = tue.morningTime.close;
          tuesday.eveningTime.from = tue.eveningTime.from;
          tuesday.eveningTime.till = tue.eveningTime.till;
          tuesday.eveningTime.close = tue.eveningTime.close;
          tuesday.close = tue.close;
        } else {
          tuesday.close = true;
        }
        if (wed) {
          wednesday.morningTime.from = wed.morningTime.from;
          wednesday.morningTime.till = wed.morningTime.till;
          wednesday.morningTime.close = wed.morningTime.close;
          wednesday.eveningTime.from = wed.eveningTime.from;
          wednesday.eveningTime.till = wed.eveningTime.till;
          wednesday.eveningTime.close = wed.eveningTime.close;
          wednesday.close = wed.close;
        } else {
          wednesday.close = true;
        }
        if (thr) {
          thursday.morningTime.from = thr.morningTime.from;
          thursday.morningTime.till = thr.morningTime.till;
          thursday.morningTime.close = thr.morningTime.close;
          thursday.eveningTime.from = thr.eveningTime.from;
          thursday.eveningTime.till = thr.eveningTime.till;
          thursday.eveningTime.close = thr.eveningTime.close;
          thursday.close = thr.close;
        } else {
          thursday.close = true;
        }
        if (fri) {
          friday.morningTime.from = fri.morningTime.from;
          friday.morningTime.till = fri.morningTime.till;
          friday.morningTime.close = fri.morningTime.close;
          friday.eveningTime.from = fri.eveningTime.from;
          friday.eveningTime.till = fri.eveningTime.till;
          friday.eveningTime.close = fri.eveningTime.close;
          friday.close = fri.close;
        } else {
          friday.close = true;
        }

        if (sat) {
          saturday.morningTime.from = sat.morningTime.from;
          saturday.morningTime.till = sat.morningTime.till;
          saturday.morningTime.close = sat.morningTime.close;
          saturday.eveningTime.from = sat.eveningTime.from;
          saturday.eveningTime.till = sat.eveningTime.till;
          saturday.eveningTime.close = sat.eveningTime.close;
          saturday.close = sat.close;
        } else {
          saturday.close = true;
        }

        doctor.clinic.push({
          clinic: clinicId,
          availability,
          availabilityBefore,
          asPer: "weekly",

          asPerWeekly: {
            sun: sunday,
            mon: monday,
            tue: tuesday,
            wed: wednesday,
            thr: thursday,
            fri: friday,
            sat: saturday,
          },
        });
        await doctor.save();

        res
          .status(200)
          .json({ status: "success", message: "Doctor added successfully" });
      } else {
        res.status(401).json({
          status: "unauthorized",
          message: "Doctor is not verified By admin",
        });
      }
    } else if (asPer === "date") {
      const { date, times } = req.body;
      const doctor = await Doctor.findById(doctorId);
      if (doctor.approved) {
        const clinic = await Clinic.findById(clinicId);
        clinic.doctor.push(doctor._id);
        await clinic.save();
        let asDate = {
          date: date,
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: false,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: false,
          },
        };
        if (times) {
          asDate.morningTime.slot = times.morningTime.slot;
          asDate.morningTime.from = times.morningTime.from;
          asDate.morningTime.till = times.morningTime.till;
          asDate.morningTime.close = times.morningTime.close;
          asDate.eveningTime.from = times.eveningTime.from;
          asDate.eveningTime.slot = times.eveningTime.slot;
          asDate.eveningTime.till = times.eveningTime.till;
          asDate.eveningTime.close = times.eveningTime.close;
        } else {
        }
        doctor.clinic.push({
          clinic: clinicId,
          availability,
          availabilityBefore,
          asPer: "date",
          asPerDate: [{ date: asDate }],
        });
        await doctor.save();

        res
          .status(200)
          .json({ status: "success", message: "Doctor added successfully" });
      } else {
        res.status(401).json({
          status: "unauthorized",
          message: "Doctor is not verified By admin",
        });
      }
    } else {
      res.status(400).json({ status: "invalid", message: "invalid body data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.editDoctorTimeWithDate = async (req, res) => {
  try {
    let updated = false;
    const { doctorId, availability, availabilityBefore, asPer, times, date } =
      req.body;
    const doctor = await Doctor.findById(doctorId);

    const clinic = req.clinic;
    for (let i = 0; i < doctor.clinic.length; i++) {
      // console.log("first");
      // change with some
      const doctorElement = doctor.clinic[i];

      if (clinic._id.equals(doctorElement.clinic) && asPer === "date") {
        doctorElement.availability = availability;
        doctorElement.availabilityBefore = availabilityBefore;
        doctorElement.asPer = asPer;
        // console.log("second");
        if (doctorElement.asPerDate.some((e) => e.date.date === date)) {
          updated = true;
        }
        if (!(doctorElement.asPerDate.length === 0)) {
          doctorElement.asPerDate.some((el) => {
            if (el.date.date === date) {
              el.date.morningTime = times.morningTime;
              el.date.eveningTime = times.eveningTime;
              // console.log("date matched");
              updated = true;
            } else {
            }

            if (!updated) {
              let asDate = {
                date: {
                  date: date,
                  morningTime: times.morningTime,
                  eveningTime: times.eveningTime,
                },
              };
              // console.log("third");
              doctorElement.asPerDate.push(asDate);
              updated = true;
            } else {
            }
          });
        } else {
          // console.log("firstName");
          let asDate = {
            date: {
              date: date,
              morningTime: times.morningTime,
              eveningTime: times.eveningTime,
            },
          };
          doctorElement.asPerDate.push(asDate);
        }
      } else {
      }
      doctorElement.asPerDate.forEach((element) => {
        // console.log(element);
      });
    }
    await doctor.save();
    res
      .status(200)
      .json({ status: "success", message: "successfully updated", doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.editDoctorTimeWithWeekly = async (req, res) => {
  try {
    const {
      doctorId,
      availability,
      availabilityBefore,
      asPer,
      sun,
      mon,
      tue,
      wed,
      thr,
      fri,
      sat,
    } = req.body;

    const doctor = await Doctor.findById(doctorId);

    const clinic = req.clinic;
    console.log(clinic);
    for (let i = 0; i < doctor.clinic.length; i++) {
      const doctorElement = doctor.clinic[i];
      if (clinic._id.equals(doctorElement.clinic) && asPer === "weekly") {
        doctorElement.availability = availability;
        doctorElement.availabilityBefore = availabilityBefore;
        doctorElement.asPer = asPer;

        let sunday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let monday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let tuesday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let wednesday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let thursday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let friday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let saturday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        if (sun) {
          sunday.morningTime.slot = sun.morningTime.slot;
          sunday.morningTime.from = sun.morningTime.from;
          sunday.morningTime.till = sun.morningTime.till;
          sunday.morningTime.close = sun.morningTime.close;
          sunday.eveningTime.slot = sun.eveningTime.slot;
          sunday.eveningTime.from = sun.eveningTime.from;
          sunday.eveningTime.till = sun.eveningTime.till;
          sunday.eveningTime.close = sun.eveningTime.close;
          sunday.close = sun.close;
        } else {
          sunday.close = true;
        }
        if (mon) {
          monday.morningTime.from = mon.morningTime.from;
          monday.morningTime.slot = mon.morningTime.slot;
          monday.morningTime.till = mon.morningTime.till;
          monday.morningTime.close = mon.morningTime.close;
          monday.eveningTime.from = mon.eveningTime.from;
          monday.eveningTime.till = mon.eveningTime.till;
          monday.eveningTime.slot = mon.eveningTime.slot;
          monday.eveningTime.close = mon.eveningTime.close;
          monday.close = mon.close;
        } else {
          monday.close = true;
        }
        if (tue) {
          tuesday.morningTime.from = tue.morningTime.from;
          tuesday.morningTime.slot = tue.morningTime.slot;
          tuesday.morningTime.till = tue.morningTime.till;
          tuesday.morningTime.close = tue.morningTime.close;
          tuesday.eveningTime.from = tue.eveningTime.from;
          tuesday.eveningTime.slot = tue.eveningTime.slot;
          tuesday.eveningTime.till = tue.eveningTime.till;
          tuesday.eveningTime.close = tue.eveningTime.close;
          tuesday.close = tue.close;
        } else {
          tuesday.close = true;
        }
        if (wed) {
          wednesday.morningTime.from = wed.morningTime.from;
          wednesday.morningTime.till = wed.morningTime.till;
          wednesday.morningTime.slot = wed.morningTime.slot;
          wednesday.morningTime.close = wed.morningTime.close;
          wednesday.eveningTime.from = wed.eveningTime.from;
          wednesday.eveningTime.till = wed.eveningTime.till;
          wednesday.eveningTime.slot = wed.eveningTime.slot;
          wednesday.eveningTime.close = wed.eveningTime.close;
          wednesday.close = wed.close;
        } else {
          wednesday.close = true;
        }
        if (thr) {
          thursday.morningTime.from = thr.morningTime.from;
          thursday.morningTime.till = thr.morningTime.till;
          thursday.morningTime.slot = thr.morningTime.slot;
          thursday.morningTime.close = thr.morningTime.close;
          thursday.eveningTime.from = thr.eveningTime.from;

          thursday.eveningTime.till = thr.eveningTime.till;
          thursday.eveningTime.slot = thr.eveningTime.slot;
          thursday.eveningTime.close = thr.eveningTime.close;
          thursday.close = thr.close;
        } else {
          thursday.close = true;
        }
        if (fri) {
          friday.morningTime.from = fri.morningTime.from;
          friday.morningTime.till = fri.morningTime.till;
          friday.morningTime.slot = fri.morningTime.slot;
          friday.morningTime.close = fri.morningTime.close;
          friday.eveningTime.from = fri.eveningTime.from;
          friday.eveningTime.till = fri.eveningTime.till;
          friday.eveningTime.slot = fri.eveningTime.slot;
          friday.eveningTime.close = fri.eveningTime.close;
          friday.close = fri.close;
        } else {
          friday.close = true;
        }

        if (sat) {
          saturday.morningTime.from = sat.morningTime.from;
          saturday.morningTime.till = sat.morningTime.till;
          saturday.morningTime.slot = sat.morningTime.slot;
          saturday.morningTime.close = sat.morningTime.close;
          saturday.eveningTime.from = sat.eveningTime.from;
          saturday.eveningTime.till = sat.eveningTime.till;
          saturday.eveningTime.slot = sat.eveningTime.slot;
          saturday.eveningTime.close = sat.eveningTime.close;
          saturday.close = sat.close;
        } else {
          saturday.close = true;
        }

        doctorElement.asPerWeekly = {
          sun: sunday,
          mon: monday,
          tue: tuesday,
          wed: wednesday,
          thr: thursday,
          fri: friday,
          sat: saturday,
        };
      } else {
      }
      doctorElement.asPerDate.forEach((element) => {
        // console.log(element);
      });
    }
    await doctor.save();
    res
      .status(200)
      .json({ status: "success", message: "successfully updated", doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
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

exports.completedAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointment = await Appointment.findById(appointmentId);
    appointmentCompleted = true;
    await appointment.save();
    res
      .status(200)
      .json({ status: "success", message: " Appointment completed" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.getAppointmentOfClinicByDate = async (req, res) => {
  try {
    const { date, doctorId } = req.body;
    const doctor = await Doctor.findById(doctorId);
    const appointment = await Appointment.find({
      client: req.clinic._id,
      date: date,
      doctor: doctor._id,
    });
    res
      .status(200)
      .json({ status: "success", message: "SuccessFull", appointment });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.cancelAppointmentOfClinicByDate = async (req, res) => {
  try {
    const { date, doctorId } = req.body;
    const doctor = await Doctor.findById(doctorId);

    const newAppointment = await Appointment.updateMany(
      {
        client: req.clinic._id,
        date: date,
        doctor: doctor._id,
        completed: false,
      },
      { status: "canceled" }
    );
    res
      .status(200)
      .json({ status: "success", message: "SuccessFull", newAppointment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.getAllDoctor = async (req, res) => {
  try {
    const doctors = await Doctor.find({ _id: req.clinic });
    res
      .status(200)
      .json({ status: "success", message: "successfully", doctors });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.filterAppointmentForExport = async (req, res) => {
  try {
    const { clinicId, doctorId, startDate, endDate } = req.body;
    console.log(startDate, endDate);

    const appointmentData = await Appointment.find({
      clinic: clinicId,
      doctor: doctorId,
    });
    // bookingDate: {
    //   $gte: startDate,
    //   $lt: endDate,
    // },
    console.log(appointmentData);
  } catch (error) {
    res.status(500).json({
      status: "Success",
      message: error.message,
    });
  }
  // const fields = [
  //   {
  //     label: "Clinic",
  //     value: "_id",
  //   },
  //   {
  //     label: "Appointment",
  //     value: "field2_name",
  //   },
  //   {
  //     label: "Booking Date",
  //     value: "bookingDate",
  //   },
  //   {
  //     label: "Booking Sift",
  //     value: "bookingSift",
  //   },
  //   {
  //     label: "Clinic",
  //     value: "clinic",
  //   },
  //   {
  //     label: "Status",
  //     value: "completed",
  //   },
  //   {
  //     label: "Created At",
  //     value: "createdAt",
  //   },
  //   {
  //     label: "Doctor",
  //     value: "doctor",
  //   },
  //   {
  //     label: "Status",
  //     value: "status",
  //   },
  // ];
  // const json2csv = new Parser({ fields });
  // const csv = json2csv.parse(appointmentData);
  // var path = __dirname + "/../../temp/" + Date.now() + "-file.csv";
  // fs.writeFileSync(path, csv);
  // res
  //   .status(200)
  //   // .json({
  //   //   status: "Success",
  //   //   message: "Good to GO",
  //   // })
  //   .download(path);
};
