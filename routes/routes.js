const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const router = express.Router();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Mongoose Schema
const mCubeUserSchema = new Schema({
  callid: String,
  callfrom: String,
  starttime: String,
  filename: String,
  calid: String,
  pulse: String,
  source: String,
  custfeedback: String,
  exefeedback: String,
  dialstatus: String,
  callerbusiness: String,
  callername: String,
  remark: String,
  calleraddress: String,
  caller_email: String,
  rate: String,
  empnumber: String,
  endtime: String,
  eid: String,
  empid: String,
  gid: String,
  empemail: String,
  regoin: String,
  custom2: String,
  custom4: String,
  custom7: String,
  custom8: String,
});

// Post Method
router.post("/realtimate", urlencodedParser, async (req, res) => {
  const mCubeData = JSON.parse(req.body.data);

//   console.log(mCubeData);
  //   console.log('callfrom: ', mCubeData['custom[2]']);

  // creating a model from the request data.

  const UserData = mongoose.model("UserData", mCubeUserSchema);
  const mCubeUser = new UserData({
    callid: mCubeData.callid,
    callfrom: mCubeData.callfrom,
    starttime: mCubeData.starttime,
    filename: mCubeData.filename,
    calid: mCubeData.calid,
    pulse: mCubeData.pulse,
    source: mCubeData.source,
    custfeedback: mCubeData.custfeedback,
    exefeedback: mCubeData.exefeedback,
    dialstatus: mCubeData.dialstatus,
    callerbusiness: mCubeData.callerbusiness,
    callername: mCubeData.callername,
    remark: mCubeData.remark,
    calleraddress: mCubeData.calleraddress,
    caller_email: mCubeData.caller_email,
    rate: mCubeData.rate,
    empnumber: mCubeData.empnumber,
    endtime: mCubeData.empnumber,
    eid: mCubeData.eid,
    empid: mCubeData.empid,
    gid: mCubeData.gid,
    empemail: mCubeData.empemail,
    regoin: mCubeData.regoin,
    custom2: mCubeData['custom[2]'],
    custom4: mCubeData['custom[4]'],
    custom7: mCubeData['custom[7]'],
    custom8: mCubeData['custom[8]'],
  });

  // saving the user in the database.

  try {
    await mCubeUser.save();
    res.send("User Saved !");
  } catch (error) {
    console.error(error)
    res.send('Could not save to DB');
  }
});

module.exports = router;