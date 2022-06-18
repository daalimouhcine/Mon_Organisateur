import axios from 'axios';

export const getSignature = async () => {
    const response = await axios.get('http://localhost/mon_organisateur/Cloudinary/getSignature');
    return response;
}

export const cloudinaryInfo = {
    cloudName: "dbzzjmggw",
    apiKey: "162644775298171",
    folder: "MonOrganisateur"
};



export function toFormData(data: any) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => {
        formData.append(key, val as any);
    })
    return formData;
}


export function getCloudinaryImgUrl(publicId: any) {
    return `https://res.cloudinary.com/${cloudinaryInfo.cloudName}/image/upload/v1654771394/${publicId}.jpg`
}