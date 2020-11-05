const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = mongoose.Schema({
      username: {
            required: true,
            type: String,
            unique: true
      },
      score: {
            type: Number,
            default: 0
      },
      normal: {
            played: {
                  type: Number,
                  default: 0,
            },
            win: {
                  type: Number,
                  default: 0
            },
            lose: {
                  type: Number,
                  default: 0,
            },
            draw: {
                  type: Number,
                  default: 0,
            }
      },
      advanced: {
            played: {
                  type: Number,
                  default: 0,
            },
            win: {
                  type: Number,
                  default: 0
            },
            lose: {
                  type: Number,
                  default: 0,
            },
            draw: {
                  type: Number,
                  default: 0,
            }
      }
})

module.exports = mongoose.model("user", UserSchema.plugin(passportLocalMongoose))