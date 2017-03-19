var hexto = function(number, type) {
    var dec = parseInt(number, 16);
    if(type=="dec"){
        return dec
    }else if(type=="oct"){
        return (dec).toString(8)
    }else if(type=="bin"){
        return (dec).toString(2)
    }
}

var decto = function(number, type) {
    number=parseInt(number, 10);
    if(type=="hex"){
        return (number).toString(16);
    }else if(type=="oct"){
        return (number).toString(8);
    }else if(type=="bin"){
        return (number).toString(2)
    }
    
}

var octto = function(number, type) {
    var dec = parseInt(number, 8);
    if(type=="dec"){
        return dec
    }else if(type=="hex"){
        return (dec).toString(16)
    }else if(type=="bin"){
        return (dec).toString(2)
    }
}

var binto = function(number, type) {
    var dec = parseInt(number, 2);
    if(type=="dec"){
        return dec
    }else if(type=="hex"){
        return (dec).toString(16)
    }else if(type=="oct"){
        return (dec).toString(8)
    }
}
