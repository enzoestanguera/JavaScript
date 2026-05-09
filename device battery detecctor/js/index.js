initBattery();

function initBattery(){

    const batteryLiquid = document.querySelector(".Bliquid");
    const batteryStatus = document.querySelector(".Bstatus");
    const batteryPercentage = document.querySelector(".Bpercentage");

    navigator.getBattery().then((batt) => {

        const updateBattery = () => {

            let level = Math.floor(batt.level * 100);

            // PORCENTAGEM
            batteryPercentage.innerHTML = `${level}%`;

            // ALTURA DA BATERIA
            batteryLiquid.style.height = `${level}%`;

            // REMOVE TODAS AS CORES
            batteryLiquid.classList.remove(
                "gradient-color-red",
                "gradient-color-orange",
                "gradient-color-yellow",
                "gradient-color-green"
            );

            // STATUS E CORES
            if(level == 100){

                batteryStatus.innerHTML =
                    `Battery Full <i class="ri-battery-2-fill green-color"></i>`;

                batteryLiquid.style.height = "103%";

                batteryLiquid.classList.add("gradient-color-green");

            }
            else if(level <= 20 && !batt.charging){

                batteryStatus.innerHTML =
                    `Low Charge <i class="ri-plug-line animated-red"></i>`;

                batteryLiquid.classList.add("gradient-color-red");

            }
            else if(batt.charging){

                batteryStatus.innerHTML =
                    `Charging... <i class="ri-flashlight-line animated-green"></i>`;

                batteryLiquid.classList.add("gradient-color-green");

            }
            else{

                batteryStatus.innerHTML = "";

                if(level <= 20){
                    batteryLiquid.classList.add("gradient-color-red");
                }
                else if(level <= 48){
                    batteryLiquid.classList.add("gradient-color-orange");
                }
                else if(level <= 80){
                    batteryLiquid.classList.add("gradient-color-yellow");
                }
                else{
                    batteryLiquid.classList.add("gradient-color-green");
                }
            }
        };

        // EXECUTA UMA VEZ
        updateBattery();

        // EVENTOS
        batt.addEventListener("levelchange", updateBattery);
        batt.addEventListener("chargingchange", updateBattery);

    });
}