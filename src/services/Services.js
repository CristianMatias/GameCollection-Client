import Axios from "axios";
import {BASIC_URL} from "./routes";

export function getGames(){
    return Axios.get(BASIC_URL);
}

export function submit(name, platform, region, developer){
    Axios.post(BASIC_URL, {
        name: name,
        platform: platform,
        region: region,
        developer: developer
    })
}

export function getGamesByPlatform(platform){
    return Axios.get(BASIC_URL + platform);
}