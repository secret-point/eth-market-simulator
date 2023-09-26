/* learn more: https://github.com/testing-library/jest-dom // @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.*/ 

const Termresult = require("../models/termresult");


const getTermresultsBy = async (payload) => {
  try {
    const post = await Termresult.find(payload).sort({"lost_amount": 1}).populate("owner_id").exec();
    return post;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const getTermresultByUserId = async (userId) => {
  try {
     const termresult = await Termresult.find({ owner_id:  userId});
     return termresult;
   } catch {
     return null;
   }
}

const getTermresultBy = async (identify) => {
  try {
     const termresult = await Termresult.findOne(identify);
     return termresult;
   } catch {
     return null;
   }
}


const makeTermresult = async (payload) => {
  try {
    const termresult = new Termresult(payload)
    await termresult.save();
    return termresult;
  } catch {
    return null;
  }
}

const updateTermresult = async (identify, payload) => {
  try{
    await Termresult.updateOne(identify, payload);
    const post = await Termresult.findOne(identify);
    return post;
  } catch(error) {
    console.log(error);
    return null;
  }
}


module.exports = {
  getTermresultsBy,
  getTermresultByUserId,
  getTermresultBy,
  makeTermresult,
  updateTermresult
}