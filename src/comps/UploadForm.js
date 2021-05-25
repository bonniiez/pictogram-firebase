import React, { useState } from 'react';
import { withStyles } from "@material-ui/core/styles/";
import ProgressBar from '../comps/ProgressBar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


const styles = ()=>({
    hoverColor:{
        '&:hover': {
            backgroundColor: "rgba(240,190,190, 0.3)",
            borderRadius: "60%",
          }
    }
})

const UploadForm = (props) => {
    const{classes} = props;
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
                <AddCircleOutlineIcon className={classes.hoverColor} style={{color:"#efb6b2"}} fontSize="large" />
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {selectedFile && <div > {selectedFile.name}</div>}
                {selectedFile && <ProgressBar file={selectedFile} setFile={setSelectedFile} />}
            </div>
        </form>
    )
}

export default withStyles(styles)(UploadForm);