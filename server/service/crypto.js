/* learn more: https://github.com/testing-library/jest-dom // @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.*/ 

const Crypto = require("../models/crypto");



const getCryptoBy = async (payload) => {
	 try {
      const post = await Crypto.findOne(payload);
      return post;
    } catch {
      return null;
    }
}

const addCrypto = async (payload) => {
  try{
    if(!payload.name || !payload.symbol)
      return null;

    const post = new Crypto(payload)
    await post.save();
    return post;
  }catch(error){
    console.log(error)
    return null;
  }
}

const updateCrypto = async (symbol, payload) => {
  try{
    await Crypto.updateOne({symbol}, {...payload, updated: Date.now()});
    return Crypto.findOne({symbol});
  }catch(error){
    console.log(error)
    return null;
  }
}

const deleteCrypto = async (symbol) => {
  try{
    const post = await Crypto.findOne({symbol});
    post.deleted = true;
    await post.save();
    return post;
  }catch(error){
    console.log(error)
    return null;
  }
}


module.exports = {
  getCryptoBy,
  addCrypto,
  updateCrypto,
  deleteCrypto,
}