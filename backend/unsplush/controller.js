const axios = require("axios");

class UnsplashController {
  static async get(req, res) {
    try {
      const { data } = await axios.get("https://unsplash.com" + req.path);
      res.send(data);
    } catch (e) {
      res.status(500).send(e);
      console.log("error", req.path);
    }
  }
}

module.exports = { UnsplashController };
