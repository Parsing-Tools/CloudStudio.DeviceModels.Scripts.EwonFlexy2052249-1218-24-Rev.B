function parseUplink(device, payload) {
    var parsed = JSON.parse(payload.asString());
    env.log(parsed);
    

    if (parsed[0] && parsed[0].payload && parsed[0].payload.variables) {
        var variables = parsed[0].payload.variables;

        var e1 = device.endpoints.byAddress("1");
        var e2 = device.endpoints.byAddress("2"); //Nuevo
        var e3 = device.endpoints.byAddress("3"); //Nuevo
        var e4 = device.endpoints.byAddress("4"); //Nuevo
        var e5 = device.endpoints.byAddress("5"); //Nuevo
        var e6 = device.endpoints.byAddress("6"); //Nuevo
        var e7 = device.endpoints.byAddress("7"); //Nuevo
        var e8 = device.endpoints.byAddress("8"); //Nuevo
        var e9 = device.endpoints.byAddress("9"); //Nuevo
        var e10 = device.endpoints.byAddress("10"); //Nuevo
        var e11 = device.endpoints.byAddress("11"); //Nuevo
        var e12 = device.endpoints.byAddress("12"); //Nuevo
        var e13 = device.endpoints.byAddress("13"); //Nuevo
        var e14 = device.endpoints.byAddress("14"); //Nuevo
        var e15 = device.endpoints.byAddress("15"); //Nuevo
        var e16 = device.endpoints.byAddress("16"); //Nuevo
        var e17 = device.endpoints.byAddress("17"); //Nuevo
        var e18 = device.endpoints.byAddress("18"); //Nuevo
        var e19 = device.endpoints.byAddress("19"); //Nuevo
        var e20 = device.endpoints.byAddress("20"); //Nuevo
        var e21 = device.endpoints.byAddress("21"); //Nuevo
        var e22 = device.endpoints.byAddress("22"); //Nuevo
        env.log(variables[0]);

        if (variables[0] != null && e1 != null) {
            e1.updateTemperatureSensorStatus(variables[0].temperatureCelsius1);
            }
        if (variables[0] != null && e2 != null) {
            e2.updateTemperatureSensorStatus(variables[0].temperatureCelsius2);
            }
        if (variables[0] != null && e3 != null) {
            e3.updateTemperatureSensorStatus(variables[0].temperatureCelsius3);
            }
        if (variables[0] != null && e4 != null) {
            e4.updateTemperatureSensorStatus(variables[0].temperatureCelsius4);
            }
        if (variables[0] != null && e5 != null) {
            e5.updateTemperatureSensorStatus(variables[0].temperatureCelsius5);
            }
        if (variables[0] != null && e6 != null) {
            e6.updateTemperatureSensorStatus(variables[0].temperatureCelsius6);
            }
        if (variables[0] != null && e7 != null) {
            e7.updateTemperatureSensorStatus(variables[0].temperatureCelsius7);
            }
        if (variables[0] != null && e8 != null) {
            e8.updateTemperatureSensorStatus(variables[0].temperatureCelsius8);
            }
        if (variables[0] != null && e9 != null) {
            e9.updateTemperatureSensorStatus(variables[0].temperatureCelsius9);
            }
        if (variables[0] != null && e10 != null) {
            e10.updateApplianceStatus(variables[0].mp1);
            }
        if (variables[0] != null && e11 != null) {
            e11.updateApplianceStatus(variables[0].mp2);
            }
        if (variables[0] != null && e12 != null) {
            e12.updateApplianceStatus(variables[0].mp3);
            }
        if (variables[0] != null && e13 != null) {
            e13.updateApplianceStatus(variables[0].mp4);
            }
        if (variables[0] != null && e14 != null) {
            e14.updateApplianceStatus(variables[0].mp5);
            }
        if (variables[0] != null && e15 != null) {
            e15.updateApplianceStatus(variables[0].mp6);
            }
        if (variables[0] != null && e16 != null) {
            e16.updateApplianceStatus(variables[0].mp7);
            }
        if (variables[0] != null && e17 != null) {
            e17.updateApplianceStatus(variables[0].mp8);
            }
        if (variables[0] != null && e18 != null) {
            e18.updateApplianceStatus(variables[0].mp9);
            }
        if (variables[0] != null && e19 != null) {
            e19.updateApplianceStatus(variables[0].mp10);
            }
        if (variables[0] != null && e20 != null) {
            e20.updateApplianceStatus(variables[0].mp11);
            }
        if (variables[0] != null && e21 != null) {
            e21.updateApplianceStatus(variables[0].mp12);
            }
        if (variables[0] != null && e22 != null) {
           e22.updateApplianceStatus(variables[0].mp13);
            }
    
    }



    

}



function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}