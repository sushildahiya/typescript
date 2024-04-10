import { Company } from "./Company";
import { User } from "./User";
interface Mappable{
    location:{
        lat:number;
        lng:number;
    };
    markerContent():string
}
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

    addMarker(mappable:Mappable):void{
       const marker= new google.maps.Marker({
            map:this.googlemap,
            position:{
                lat: mappable.location.lat,
                lng: mappable.location.lat
            }
        })
        marker.addListener('click',()=>{
            const infoWindow  = new google.maps.InfoWindow({
                content:mappable.markerContent()
            })
            infoWindow.open(this.googlemap,marker)
        })
    }
    // addCompanyMarker(company:Company):void{
    //     new google.maps.Marker({
    //         map:this.googlemap,
    //         position:{
    //             lat: company.location.lat,
    //             lng: company.location.lat
    //         }
    //     })
    // }

    
}