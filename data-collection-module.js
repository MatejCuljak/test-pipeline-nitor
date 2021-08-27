let accelerometer;

//?Module enviroment variables
let accelerometerX;
let accelerometerY;
let accelerometerZ;

export const initDataCollectionModule = (gps, accelerometer) =>{
    
    return new Promise((resolve, reject)=>{
        const accFrequency = accelerometer.frequency;

        //!FEATURE TESTING
        if ('Accelerometer' in window) {
            // The `Accelerometer` interface is supported by the browser.
            // Does the device have an accelerometer, though?

            try {
                accelerometer = new Accelerometer({ frequency: accFrequency });
                accelerometer.onerror = (event) => {
                  // Handle runtime errors.
                if (event.error.name === 'NotAllowedError') {
                    console.log('Permission to access sensor was denied.');
                    reject();  
                } else if (event.error.name === 'NotReadableError') {
                    console.log('Cannot connect to the sensor.');
                    reject();
                }
                };
                accelerometer.onreading = (e) => {
                    resolve();
                    accelerometerX = accelerometer.x;
                    accelerometerY = accelerometer.y;
                    accelerometerZ = accelerometer.z;

                };
                accelerometer.start();
              } catch (error) {
                // Handle construction errors.
                if (error.name === 'SecurityError') {
                  console.log('Sensor construction was blocked by the Permissions Policy.');
                    reject();
                } else if (error.name === 'ReferenceError') {
                    reject();
                    console.log('Sensor is not supported by the User Agent.');
                } else {
                    reject();
                  throw error;
                }
              }
        }else{
            reject("Not supported by enviroment!");
        }

    });

};


//Collect data, checks feature support, filteres data and returns the data

//? Collect data from gps

//*Options :: 

export const dataCollectionModule = ({gps, accelerometer}) =>{
    return new Promise((resolve, reject)=>{
        if(gps == true){
            
        };
    
        if(accelerometer == true){
            //collect accelometer data
            const recordedAccX = accelerometerX;
            const recordedAccY = accelerometerY;
            const recordedAccZ = accelerometerZ;
            //Filter Noise
    
            //Return as clean data
            const acceleration_data = {
                acceleration_x :  recordedAccX,
                acceleration_y : recordedAccY,
                acceleration_z : recordedAccZ
            }
        };

        const cleanData = {
            acceleration_data : acceleration_data
        };
        resolve(cleanData);
    });
};