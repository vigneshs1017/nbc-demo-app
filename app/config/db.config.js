module.exports = {
  HOST: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  USER: "nbcdev",
  PASSWORD: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  DB: "nbcapp",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
