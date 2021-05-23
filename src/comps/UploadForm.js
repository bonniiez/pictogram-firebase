import React, { useState } from 'react';
import ProgressBar from '../comps/ProgressBar';


const UploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(null);
    const allowedTypes = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && allowedTypes.includes(selected.type)) {
            setSelectedFile(selected);
            setError("");

        } else {
            setSelectedFile(null)
            setError("Please select an image file (png/jpeg) ")

        }
    }

    return (
        <form>
            <label className="upload-image-button">
                <input type="file"
                    onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {selectedFile && <div > {selectedFile.name}</div>}
                {selectedFile && <ProgressBar file={selectedFile} setFile={setSelectedFile} />}
            </div>
        </form>
    )
}

export default UploadForm;