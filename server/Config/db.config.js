module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "SharkFangs8899",
    DB: "webtsx",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };