import React from 'react'
import { Button } from '../../../utils/MUIcomponets/components'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { sample } from '../../../utils/imageURLs/imageURLS';
import { useNavigate } from 'react-router';

function ImagePreview() {

    const navigate = useNavigate();
    const generateReport =()=>{
        navigate('/report')
    }

  return (
    <>
        <div className="image-preview-wrapper">
            <div className="image-preview">
                <img src={sample} alt="preview" />
            </div>
            <div className="repoart-summary">
                <span>Radiology Report</span>
                <div className="file-name">
                Alice Johnson CBCT 07062023 N12504.OPG
                </div>
                <div className="actions">
                <Button
                        sx={{
                            background: "#0180DC",
                            padding: "15px 30px 15px 30px",
                            color: "white",
                            borderRadius: "100px",
                        }}
                        variant="contained"
                        startIcon={<QrCodeScannerIcon />}
                        onClick={generateReport}

                        >
                        Get Report
                    </Button>
                </div>
            </div>
        </div>

    </>
  )
}

export default ImagePreview