import axios from 'axios';
const KEY ="AIzaSyAt3eMbOqk_PD0kyeSn_OLd7YuZ1feUv54";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        key:`${KEY}`

    }


});