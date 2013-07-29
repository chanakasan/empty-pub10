$(document).ready(function(){

    function switchVehicleImage() {
        var vehicle = $("#vehicle").val();
        $('#vehicleImg').attr('src','images/vehicle/'+vehicle+'.jpg');
    }
    function switchDriverImage() {
        var driver = $("#driver").val();
        $('#driverImg').attr('src','images/driver/driver'+driver+'.jpeg');
    }

    switchVehicleImage();
    switchDriverImage();
    // trigger switchVehicleImage()
    $("#vehicle").change(switchVehicleImage);
    // trigger switchDriverImage()
    $("#driver").change(switchDriverImage);

});