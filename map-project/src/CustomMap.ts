import { Company } from "./Company";
import { User } from "./User";

export class CustomMap{
    private googlemap: google.maps.Map;
    constructor(divId:string){
        this.googlemap = new google.maps.Map(document.getElementById('map') as HTMLElement,{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        })
    }

    addUserMarker(user:User):void{
        new google.maps.Marker({
            map:this.googlemap,
            position:{
                lat: user.location.lat,
                lng: user.location.lat
            }
        })
    }
    addCompanyMarker(company:Company):void{

    }
}