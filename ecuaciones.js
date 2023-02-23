
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

    const R1str = urlParams.get("R1")
    const R1 = parseInt(R1str)
    console.log(R1);
    const R2str = urlParams.get("R2")
    const R2 = parseInt(R2str)
    console.log(R2);
    const RCstr= urlParams.get("RC")
    const RC = parseInt(RCstr)
    console.log(RC);
    const REstr = urlParams.get("RE")
    const RE = parseInt(REstr)
    console.log(RE);
    const VCCstr = urlParams.get("VCC")
    const VCC = parseInt(VCCstr)
    console.log(VCC);

        var vbb = VCC*(R2/(R1+R2));
        var ie = ((vbb-0.7)/RE);
        var ic = ie;
        var ve = vbb-0.7;
        var vc = VCC-ic*RC;
        var vce = vc-ve;

    document.getElementById("vb").innerHTML = vbb;
    document.getElementById("ie").innerHTML = ie;
    document.getElementById("ic").innerHTML = ic;
    document.getElementById("ve").innerHTML = ve;
    document.getElementById("vc").innerHTML = vc;
    document.getElementById("vce").innerHTML = vce;