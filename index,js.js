import { initDataCollectionModule, dataCollectionModule } from "./data-collection-module.js";

initDataCollectionModule(false, {frequency : 1});

const UIACC = document.getElementById("accData").children;

console.log(UIACC);
dataCollectionModule({gps: false, accelerometer: true})
.then((data)=>{
    const acceleration_data = data["acceleration_data"];
    UIACC[0].innerText = acceleration_data.acceleration_x;
    UIACC[1].innerText = acceleration_data.acceleration_y;
    UIACC[2].innerText = acceleration_data.acceleration_z;
});