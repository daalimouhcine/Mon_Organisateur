import axios from 'axios';

export const getSignature = async () => {
    const response = await axios.get('http://localhost/mon_organisateur/Cloudinary/getSignature');
    return response;
}

export const cloudinaryData = {
    cloudName: "dbzzjmggw",
    apiKey: "162644775298171",
    folder: "MonOrganisateur"
};
