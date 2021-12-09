const axios = require('axios')
const config = require('../config')


class RequestService{

  constructor(){
    this.url = config.host + config.path
  }

  async sendMessage(payload){
    const { data } = await axios.post(this.url, payload)
    return data
  }

}

module.exports = RequestService