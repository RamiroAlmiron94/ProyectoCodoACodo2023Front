const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const mailInput = document.getElementById('mail');
const cantidadTicketsInput = document.getElementById('cantidadTickets');
const categoriaSelect = document.getElementById('categoriaSelect');
const totalPago = document.getElementById('totalPago');

const precioTicket = 200;

function calcularVistaPreviaMontoTotal() {
    const cantidadTickets = parseInt(cantidadTicketsInput.value);
    const categoria = parseInt(categoriaSelect.value);

    let descuento = 0;
    switch (categoria) {
        case 1:
            descuento = 0.8;
            break;
        case 2:
            descuento = 0.5;
            break;
        case 3:
            descuento = 0.15;
            break;
        default:
            descuento = 0;
    }

    const montoTotal = cantidadTickets * precioTicket * (1 - descuento);

    totalPago.textContent = `${montoTotal.toFixed(2)}`;
}

cantidadTicketsInput.addEventListener('input', calcularVistaPreviaMontoTotal);
categoriaSelect.addEventListener('change', calcularVistaPreviaMontoTotal);