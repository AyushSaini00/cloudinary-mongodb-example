const express = require('express');
const { cloudinary } = require('./utils/cloudinary');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'cloudinary_mongodb_example'
    });
    console.log(uploadedResponse);
  } catch (err) {
    console.error(err);
  }
});

const PORT = process.env.PORT || 3031;

app.listen(PORT, () => {
  console.log('listening on port : ' + PORT);
});
