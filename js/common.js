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

var setValues = function(identificator, value){
    switch(identificator) {
        case "decto":
            $("#hexto").val(decto(value, 'hex'))
            $("#octto").val(decto(value, 'oct'))
            $("#binto").val(decto(value, 'bin'))
            break;
        case "hexto":
            $("#decto").val(hexto(value, 'dec'))
            $("#octto").val(hexto(value, 'oct'))
            $("#binto").val(hexto(value, 'bin'))
            break;
        case "octto":
            $("#decto").val(octto(value, 'dec'))
            $("#hexto").val(octto(value, 'hex'))
            $("#binto").val(octto(value, 'bin'))
            break;
        case "binto":
            $("#decto").val(binto(value, 'dec'))
            $("#hexto").val(binto(value, 'hex'))
            $("#octto").val(binto(value, 'oct'))
            break;    
    }
}

var createForm = function(structure, id="form"){
    ident = "#"+id;
    $.each(structure, function( k, v ) {
        obj = $('<div>', {class: 'form-group'})
        obj.append($('<label>', {class: 'control-label', for: k, text: v["label"]}))
        obj.append($('<input>', {class: 'form-control number', type: 'text', pattern: v["regexForm"], id: k, placeholder: v["label"]}))

        $(ident).append(obj);
        
    });

    $(ident).append($('<input>', {class: 'form-control number', type: 'hidden', id: 'lastFocus'}))

    obj = $('<div>', {class: 'form-group col-sm-offset-2 col-sm-10'})
    obj.append($('<button>', {class: 'btn btn-default', type: 'submit', text: 'Submit'}))

    $(ident).append(obj);

    
}