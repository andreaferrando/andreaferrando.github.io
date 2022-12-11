
import { images } from '../constants';
import {music_preview} from '../constants'

const music = [
    {
        key: 1,
        img: images.imnotready,
        name: "I'm not ready to let you go",
        live:false,
        // youtubeId: "xx",
        // spotify: "xx",
        // applemusic: "xx",
        // youtube: "xx",
        // itunes: "xx",
        // amazon: "xx",
        // pandora: "xx",
        // deezer: "xx",
    },
    {
        key: 0,
        img: images.being_you_resized,
        music_preview: music_preview.preview_beingyou,
        youtubeId: "4RcCqLYQgKM",
        name: "Being You",
        live:true,
        spotify: "https://open.spotify.com/track/3OPgJLD8Ft2U22BmOULSvE?si=121f08f5e81946b5",
        applemusic: "https://music.apple.com/gb/album/being-you-single/1559331678",
        youtube: "https://www.youtube.com/watch?v=4RcCqLYQgKM&ab_channel=Io-Topic",
        itunes: "https://music.apple.com/gb/album/being-you-single/1559331678",
        amazon: "https://www.amazon.com/dp/B08YX1WVTG?linkCode=osi&th=1&psc=1&tag=fndcmpgns-20",
        pandora: "https://pandora.app.link/QTJv62E8nvb",
        deezer: "https://www.deezer.com/us/album/214780422",
    },
]

const otherMusic = [
    // {
    //     key: 0,
    //     youtubeId: "4RcCqLYQgKM",
    //     youtube: "https://www.youtube.com/watch?v=4RcCqLYQgKM&ab_channel=Io-Topic",
    //     img: images.background_rainbow,
    //     name: "xx0",
    //  },
    //  {
    //     key: 1,
    //     youtubeId: "rfAsqfgBnEY",
    //     youtube: "https://www.youtube.com/watch?v=4RcCqLYQgKM&ab_channel=Io-Topic",
    //     img: images.background_rainbow,
    //     name: "xx1",
    //  },
    //  {
    //     key: 2,
    //     youtubeId: "xx",
    //     youtube: "https://www.youtube.com/watch?v=4RcCqLYQgKM&ab_channel=Io-Topic",
    //     img: images.background_rainbow,
    //     name: "xx2",
    //  },{
    //     key: 3,
    //     youtubeId: "xx",
    //     youtube: "https://www.youtube.com/watch?v=4RcCqLYQgKM&ab_channel=Io-Topic",
    //     img: images.background_rainbow,
    //     name: "xx3",
    //  },
]

const data = { music, otherMusic }
export default data;