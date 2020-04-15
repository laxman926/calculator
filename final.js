
var $ = function (id) {
 return document.getElementById(id);
}

function log(logfn) {
  var a = $("result");
  var b = $("clear");
  if (logfn == 1) {
    a.value += "log(";
    b.innerHTML += (/[\d)IE]/.test(b.innerHTML.slice(-1))) ?
      " * Math.log10(" : "Math.log10(";
  } else {
    a.value += "ln(";
    b.innerHTML += (/[\d)IE]/.test(b.innerHTML.slice(-1))) ?
      " * Math.log(" : "Math.log(";
  }
}

function trigo(trig) {
  var a = $("result");
  var b = $("clear");
  a.value += trig + "(";
  b.innerHTML += (/[\d)IE]/.test(b.innerHTML.slice(-1))) ?
    " * Math." + trig + "(Math.PI / 180 * " : "Math." + trig + "(Math.PI / 180 * ";
}



function multOrDiv(mulDiv) {
  var a = $("result");
  var b = $("clear");
  if (mulDiv == "mult") {
    a.value += "\u00D7";
    b.innerHTML += "*";
  } else {
    a.value += "\u00F7";
    b.innerHTML += "/"
  }
}


function input(sun) {
  var a = $("result");
  var b = $("clear");
  a.value += sun;
  b.innerHTML += sun;
}

function factorial(fact) {
  if (Number.isInteger(fact)) {
    if (fact < 2) return 1;
    return fact * factorial(fact - 1);
  }
}

function sqrt() {
  var a = $("result");
  var b = $("clear");
  a.value += "sqrt(";
  b.innerHTML += (/[\d)IE]/.test(b.innerHTML.slice(-1))) ?
    " * Math.sqrt(" : "Math.sqrt(";
}

function leftParen() {
  var a = $("result");
  var b = $("clear");
  a.value += "(";
  b.innerHTML += (/[\d)IE]/.test(b.innerHTML.slice(-1))) ?
    " * (" : "(";
}

function piOrE(piorExpn) {
  var a = $("result");
  var b = $("clear");
  if (piorExpn == "pi") {
    a.value += "\u03C0";
    b.innerHTML += (/[\d)IE]/.test(b.innerHTML.slice(-1))) ?
      " * Math.PI" : "Math.PI";
  } else {
    a.value += "\u0065";
    b.innerHTML += (/[\d)IE]/.test(b.innerHTML.slice(-1))) ?
      " * Math.E" : "Math.E";
  }
}


function del() {
  var a = $("result");
  var b = $("clear");
  var c = $("myAns");
  if (a.value.slice(-3) == "Ans") {
    b.innerHTML = (/[\d)IE]/.test(a.value.slice(-4, -3))) ?
      b.innerHTML.slice(0, -(c.innerHTML.length + 3)) : b.innerHTML.slice(0, -(c.innerHTML.length));
    a.value = a.value.slice(0, -3);
  } else if (a.value == "Error!") {
    ac();
  } else {
    switch (b.innerHTML.slice(-2)) {
      case "* ":
        b.innerHTML = (/[\d)IE]/.test(a.value.slice(-5, -4))) ?
          b.innerHTML.slice(0, -28) : b.innerHTML.slice(0, -25);
        a.value = a.value.slice(0, -4);
        break;
      case "n(":
      case "s(":
        b.innerHTML = (/[\d)IE]/.test(a.value.slice(-7, -6))) ?
          b.innerHTML.slice(0, -29) : b.innerHTML.slice(0, -26);
        a.value = a.value.slice(0, -6);
        break;
      case "0(":
        b.innerHTML = (/[\d)IE]/.test(a.value.slice(-5, -4))) ?
          b.innerHTML.slice(0, -14) : b.innerHTML.slice(0, -11);
        a.value = a.value.slice(0, -4);
        break;
      case "g(":
        b.innerHTML = (/[\d)IE]/.test(a.value.slice(-4, -3))) ?
          b.innerHTML.slice(0, -12) : b.innerHTML.slice(0, -9);
        a.value = a.value.slice(0, -3);
        break;
      case "t(":
        b.innerHTML = (/[\d)IE]/.test(a.value.slice(-6, -5))) ?
          b.innerHTML.slice(0, -13) : b.innerHTML.slice(0, -10);
        a.value = a.value.slice(0, -5);
        break;
      case "PI":
        b.innerHTML = (/[\d)IE]/.test(a.value.slice(-2, -1))) ?
          b.innerHTML.slice(0, -10) : b.innerHTML.slice(0, -7);
        a.value = a.value.slice(0, -1);
        break;
      case ".E":
        b.innerHTML = (/[\d)IE]/.test(a.value.slice(-2, -1))) ?
          b.innerHTML.slice(0, -9) : b.innerHTML.slice(0, -6);
        a.value = a.value.slice(0, -1);
        break;
      default:
        b.innerHTML = b.innerHTML.slice(0, -1);
        a.value = a.value.slice(0, -1);
    };
  }
}

function ac() {
  var a = $("result");
  var b = $("clear");
  a.value = b.innerHTML = "";
}

function ans() {
  var a = $("result");
  var b = $("clear");
  var c = $("myAns");
  a.value += "Ans";
  b.innerHTML += (/[\d)IE]/.test(b.innerHTML.slice(-1))) ?
    " * " + c.innerHTML : c.innerHTML;
}

function equal() {
  var a = $("result");
  var b = $("clear");
  var c = $("myAns");
  for (var i = 0; i < a.value.split("(").length - a.value.split(")").length; i++) {
    b.innerHTML += ")";
  }
  if (b.innerHTML != "") {
    a.value = b.innerHTML = c.innerHTML = eval(b.innerHTML
      .replace(/(\d+\.?\d*)\!/g, "factorial($1)")
      .replace(/(\(?[^(]*\)?)\^(\(?.*\)?)/, "Math.pow($1, $2)")
    );
  }
  if (!isFinite(a.value)) a.value = "Error!";
}
