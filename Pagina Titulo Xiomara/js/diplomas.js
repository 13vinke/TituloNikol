window.onload = function () {
    var parametroUrl = {}
    location.search.substr(1).split("&").forEach(function (item) { parametroUrl[item.split("=")[0]] = item.split("=")[1] })
    if (String(parametroUrl.dipl).length > 10) parametroUrl.dipl = "0000000000";
    $.ajax({
        url: "diplomas/obtener?dipl=" + parametroUrl.dipl,
        type: "get",
        success: verDatos,
        error: verError
    });
};
function verDatos(rpta) {
    var data = JSON.stringify(rpta);
    if (data.length > 4) {
        //document.getElementById("spnCodUni").innerHTML = rpta.cod_UNI;
        document.getElementById("spnTipDoc").innerHTML = rpta.docu_TIP;
        document.getElementById("spnNumDoc").innerHTML = rpta.docu_NUM;
        document.getElementById("spnAbr").innerHTML = rpta.abre_GYT;
        document.getElementById("spnGraTit").innerHTML = rpta.obtubo_X;
        document.getElementById("spnModEst").innerHTML = rpta.modalidad;
        document.getElementById("spnNumRes").innerHTML = rpta.reso_NUM;
        document.getElementById("spnFecRes").innerHTML = rpta.reso_FEC;
        document.getElementById("spnTipEmi").innerHTML = rpta.dipl_TIP_EMI;
        document.getElementById("spnCodLib").innerHTML = rpta.cod_LIBRO;
        document.getElementById("spnCodFol").innerHTML = rpta.cod_FOLIO;
        document.getElementById("spnNumReg").innerHTML = rpta.num_REGISTRO;
        document.getElementById("spnApeNom").innerHTML = rpta.nombre;
        document.getElementById("spnGrado").innerHTML = rpta.grad_ACADEM;
    } else {
        var div = document.getElementById("dvDatosD");
        div.innerHTML = "";
    };
};
function verError(rpta) {
    //alert(rpta.statusText);
    alert("No se pudo cargar los datos.");
};