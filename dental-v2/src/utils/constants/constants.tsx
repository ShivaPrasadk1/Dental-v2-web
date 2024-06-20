import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from "../MUIcomponets/components"
import { Dentalopg, brainMRI } from "../imageURLs/imageURLS"

export const DashboardTitle = `Select either the Brain MRI or Dental OPG option, and proceed to upload the corresponding film.This will facilitate the generation of your report.`

export const FooterContent = {
    copyRight: ` 2021. All rights reserved.`,
    Resource: {
        title: 'Resources',
        contents: ['Updates', 'Help center', 'Pricing', 'Contact', 'Become an Ambassador'],
    },
    Company: {
        title: 'company',
        contents: ['Terms & Conditions', 'Privacy'],
    },
    socailIcons: {
        icons: [<TwitterIcon />, <InstagramIcon />, <YouTubeIcon />, <FacebookIcon />, <LinkedInIcon />]
    }
}


export const features = [
    {
        title: 'Brain MRI',
        imageURL: brainMRI,
        isChecked: true
    },
    {
        title: 'Denatl OPG',
        imageURL: Dentalopg,
        isChecked: false
    }
]

export const patientDetails:any = {
    title: 'Radiological Report ',
    details: {
        PatientName: 'Alice Johnson',
        Gender: 'Male',
        Age: 25,
        DateofBirth: '19/07/1985',
        PatientID: ' A0012',
        ScanDate: '19/07/1985',
    }
}