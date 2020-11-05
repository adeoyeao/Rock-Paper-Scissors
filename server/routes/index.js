const express = require("express")
const bodyParser = require("body-parser")
const passport = require("passport")
const session = require("express-session")
const userModel = require ("../models/userModel")

const router = express.Router()
router.use(bodyParser.urlencoded({extended: true}))
router.use(express.json())

router.use(session({
            secret: process.env.SECRET_KEY,
            resave: false,
            saveUninitialized: false,
            cookie: {maxAge: 604800000}
}))

router.use(passport.initialize())
router.use(passport.session())

passport.use(userModel.createStrategy())
passport.serializeUser(userModel.serializeUser())
passport.deserializeUser(userModel.deserializeUser())

router.post("/register", (req, res) => {
      userModel.register({username: req.body.username}, req.body.password, (err, user) => {
            err ? (console.error(err), res.redirect("/register")) : passport.authenticate("local")(req, res, () => res.redirect("/game"))
      })
})

router.post("/login", (req, res) => {
      const user = new userModel({
            username: req.body.username,
            password: req.body.password
      })

      req.login(user, err => {
            err ? (console.error(err), res.redirect("/login")) : 
            res.status !== 200 ? res.redirect("/login") : passport.authenticate("local")(req, res, () => res.redirect("/game"))
      })
})

const wrapAsync = handler => (req, res) => {
      handler(req)      
            .then(result => res.json(result))
            .catch(err => res.status(500).json({error: err.message}))}

router.get("/initial", wrapAsync(async function(req) {
      const username = req.user.username
      return userModel.findOne({ username: username })
}))

router.post("/update", wrapAsync(async function(req) {
      const username = req.user.username
      const update = req.body
      console.log(update)
      return userModel.findOneAndUpdate({username: username}, update)     
}))

module.exports = router