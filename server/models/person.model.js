import mongoose from 'mongoose'

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
})

export default mongoose.model('person', PersonSchema)