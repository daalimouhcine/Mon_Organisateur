import axios from 'axios';

export const getSignature = async () => {
    const reaponse = await axios.get('http://localhost/mon_organisateur/Cloudinary/getSignature');
    return reaponse.data;
}