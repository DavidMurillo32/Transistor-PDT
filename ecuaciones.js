
function ecuaciones(){

    var Res1 = parseFloat(document.variables.R1.value);
    var Res2 = parseFloat(document.variables.R1.value);
    var ResC = parseFloat(document.variables.R1.value);
    var ResE = parseFloat(document.variables.R1.value);
    var VCC = parseFloat(document.variables.R1.value);

    var vbb = VCC*(Res2/(Res1+Res2));
    var ie = ((vbb-0.7)/ResE);
    var ic = ie;
    var ve = vbb-0.7;
    var vc = VCC-ic*ResC;
    var vce = vc-ve;

}