function calcRadius() {
    const waist = document.getElementById("pattern-waist").value;
    const angle = document.getElementById("pattern-angle").value;

    const ratio = angle / 360;
    var _radius = (waist / ratio / 3.14 / 2).toFixed(1);

    document.getElementById("pattern-radius").innerHTML = _radius;

}
