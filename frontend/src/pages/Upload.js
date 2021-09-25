import { useState } from 'react';

const Upload = () => {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState('');

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (!previewSource) return;

    uploadImage(previewSource);
  };

  const uploadImage = async (base64encodedImage) => {
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: base64encodedImage }),
        headers: { 'Content-type': 'application/json' }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Upload page</h1>
      <form onSubmit={handleFileSubmit}>
        <input
          type="file"
          name="image"
          onChange={handleFileInput}
          value={fileInputState}
        />
        <button type="submit">Submit</button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen file" className="preview-img" />
      )}
    </div>
  );
};

export default Upload;
