const express = require("express")
const next = require("next")
const mongoose = require("mongoose")
// const session = require("express-session")
// const passport = require("passport")

const PORT = process.env.PORT || 5000
const dev = process.env.NODE_ENV !== "production"

const nextApp = next({dev})
const handle = nextApp.getRequestHandler()

const db = mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
}).then(() => console.log(`Connected to MongoDB`)).catch(err => console.log(err))

nextApp.prepare().then(() => {
      const app = express()

      app.use(require("./routes/index"))

      const restrictAccess = (req, res, next) => {
            if(!req.isAuthenticated()) {
                  res.redirect("/login")
            };
            next()
      }

      const allowAccess = (req, res, next) => {
            if(req.isAuthenticated()) {
                  console.log(req.session.passport.user)
                  res.redirect("/game")
            };
            next()
      }

      app.use("/game", restrictAccess)
      app.use("/login", allowAccess)
      app.use("/register", allowAccess)
      app.use(/^\/$/, allowAccess)

      app.get("*", (req, res) => {
            return handle(req, res)
      })

      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})
