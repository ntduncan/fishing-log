import {Fish} from "./Fish.model"

export class FishingLog {
    constructor(
        public id: string,
        public location: string,
        public img: string,
        public date: string,
        public fish: Fish[]
    ){}
}