import { initDataCollectionModule, dataCollectionModule } from "./data-collection-module.js";
const UIERR = document.getElementById("error");

initDataCollectionModule(false, {frequency : 60})
.catch((error)=>{
    UIERR.innerText = JSON.stringify(error);
});

const UIACC = document.getElementById("accData").children;

console.log(UIACC);
dataCollectionModule({gps: false, accelerometer: true})
.then((data)=>{
    const acceleration_data = data["acceleration_data"];
    UIACC[0].innerText = acceleration_data.acceleration_x;
    UIACC[1].innerText = acceleration_data.acceleration_y;
    UIACC[2].innerText = acceleration_data.acceleration_z;
});