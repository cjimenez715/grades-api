export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      require: true,
    },
    lastModified: {
      type: Date,
      default: Date.now
    },
  });

  const gradesModel = mongoose.model('grades', gradesSchema, 'grades');

  return gradesModel;
}