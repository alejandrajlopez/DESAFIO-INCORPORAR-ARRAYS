class Servicio {
    constructor(nombre, precio, detalle, cantidad)
    {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }

    Vender()
    {
        this.disponible = false;
    }

}
var arrayServicios = [];
do{
    var comprobacion = prompt('Ingrese un nobre del servicio o fin para terminar de agregar' );
    if (comprobacion === 'fin'|| comprobacion === "FIN" || comprobacion === "Fin" )
    {
        break;
    }
    else{
        nombreP = comprobacion;
        var precioP = prompt('Ingrese el precio del servicio');
        var detalleP = prompt('Ingrese el detalle del servicio');
        var cantidadP = prompt('Ingrese la cantidad comprada del servicio');
        arrayServicios.push(new Servicio(nombreP, precioP, detalleP, cantidadP));
    
    }
}
    while (comprobacion != "fin"|| comprobacion != "FIN" || comprobacion != "Fin")

    console.log(arrayServicios);


    for (var servicio of arrayServicios)
    {
        document.write("<ul><li><h3>Nombre: " + servicio.nombre + "</h3></li>");
        document.write("<li><h3> Detalle: " + servicio.detalle + "</h3></li>");
        document.write("<li><h3> Cantidad: " + servicio.cantidad + "</h3></li>");
        document.write("<li><h3> Precio: " + servicio.precio + "</h3></li>");
        console.log(servicio.nombre);
        console.log(servicio.detalle);
        console.log(servicio.cantidad);
    }

    