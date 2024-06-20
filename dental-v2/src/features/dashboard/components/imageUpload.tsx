import { useCallback, useState } from 'react'
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Button, DialogTitle } from '@mui/material';
function ImageUpload({getRootProps,getInputProps,handlePopUpClose}:{getRootProps:any,getInputProps:any,handlePopUpClose:any}) {
 
  return (
    <div >
      <DialogContent sx={{
        padding:"0px",
        width:"100%",
        
        position:"relative"
      }}>
       
        <DialogContentText id="alert-dialog-description"
        sx={{
          padding:"10%", 
        }}
        >
          <div {...getRootProps()}  className="file-uploader">
          <input {...getInputProps()} />
            <div className="upload-icon">

              <FileUploadIcon sx={{
                fontSize:"100px"
              
              }} />
            </div>
            <div className="upload-text">
              <h3>Drop your files here or browse files</h3>
              <span className="file-types">Supported file: JPG, PNG, max 30 MB</span>
            </div>
          </div>

        </DialogContentText>
      </DialogContent>
    </div>
  )
}

export default ImageUpload