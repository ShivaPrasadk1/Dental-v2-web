import React, { useState, useCallback } from 'react'
import { CheckIcon, CloudUploadIcon, Avatar, Button, Card, Dialog } from '../../../utils/MUIcomponets/components'
import { features } from '../../../utils/constants/constants'
import ImageUpload from './imageUpload';
import { useDropzone } from 'react-dropzone';
import { squareLoader } from '../../../utils/imageURLs/imageURLS';
import ImagePreview from './ImagePreview';

function BodyContent() {

    const [feature, setFeature] = useState(features)
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(false);


    const onDrop = useCallback((acceptedFiles: any) => {
        console.log(acceptedFiles);

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setUploadedImage(true)
        }, 3000)
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })



    const handleClick = (index: any) => {
        const newFeature = features.map((feature, i) => {
            feature.isChecked = i === index ? true : false
            return feature
        })
        setFeature(newFeature)
    }

    const handleOpenPopUp = () => {
        setOpen(true);
    }
    const handlePopUpClose = () => {
        setOpen(false);
        setUploadedImage(false)
    };

    return (
        <>
            <div className="dashboard-wrapper">
                <div className="dashboard-body-container">
                    {
                        feature.map((feature, index) => {
                            return (
                                <div className="feature-container" key={index}
                                    onClick={() => { handleClick(index) }}
                                >
                                    <h1>{feature.title}</h1>
                                    <Card sx={{
                                        height: "218px",
                                        width: "218px",
                                        background: "#000000",
                                        objectFit: "contain",
                                        boxShadow: "0px 2px 2px 0px #525154 inset"
                                    }} >
                                        <img src={feature.imageURL} alt="" height="100%" width="100%" style={{ objectFit: "contain" }} />
                                    </Card>
                                    {
                                        feature.isChecked ? <Avatar sx={{
                                            bgcolor: "#27F3D1",
                                            color: "black",
                                            fontWeight: "bold",
                                            position: "absolute",
                                            left: "45%",
                                            bottom: "1%",
                                        }}><CheckIcon /></Avatar> : ""
                                    }

                                </div>
                            )
                        }
                        )
                    }

                </div>
                <h2>Click upload Film button in below to process your Image </h2>
                <div className="submit-file">
                    <Button
                        sx={{
                            background: "#0180DC",
                            padding: "15px 30px 15px 30px",
                            color: "white",
                            borderRadius: "100px",
                        }}
                        onClick={handleOpenPopUp}
                        variant="contained"
                        startIcon={<CloudUploadIcon />}>
                        Upload Film
                    </Button>
                </div>
            </div>

            <Dialog open={open} sx={{

            }}>
                <div className="background-warpper">
        <div className="cancel-button" onClick={handlePopUpClose}> <Button>X</Button></div>

                    {uploadedImage? (<ImagePreview />):(loading ?
                        <img src={squareLoader} alt="" /> :
                        <ImageUpload handlePopUpClose={handlePopUpClose} getRootProps={getRootProps} getInputProps={getInputProps} />)
                    }
                </div>
            </Dialog>

        </>
    )
}

export default BodyContent