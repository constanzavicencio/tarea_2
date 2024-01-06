var Deportes = {
    listaDeportes : ["Clavados", "Natación", "Natación artística", "Polo acuático", "Natación en Aguas abiertas", "Maratón", "Marcha", "Atletismo",
    "Bádminton", "Balonmano", "Básquetbol", "Básquetbol 3x3", "Béisbol", "Boxeo", "Bowling", "Breaking", "Canotaje Slalom", "Canotaje de velocidad",
    "BMX Freestyle", "BMX Racing", "Mountain Bike", "Ciclismo pista", "Ciclismo ruta", "Adiestramiento ecuestre", "Evento completo ecuestre",
    "Salto ecuestre", "Escalada deportiva", "Esgrima", "Esquí acuático y Wakeboard", "Fútbol", "Gimnasia artística Masculina",
    "Gimnasia artística Femenina", "Gimnasia rítmica", "Gimnasia trampolín", "Golf", "Hockey ", "Judo", "Karate", "Levantamiento de pesas", "Lucha",
    "Patinaje artístico", "Skateboarding", "Patinaje velocidad", "Pelota vasca", "Pentatlón moderno", "Racquetball", "Remo", "Rugby 7", "Sóftbol",
    "Squash", "Surf", "Taekwondo", "Tenis", "Tenis de mesa", "Tiro", "Tiro con arco", "Triatlón", "Vela", "Vóleibol", "Vóleibol playa"]
};

jQuery(document).ready(function () {
    var htmlDeporte = '<option value="sin-deporte">Seleccione Deporte</option>';

    jQuery.each(Deportes.listaDeportes, function (i, deporte) {
        htmlDeporte += '<option value="' + deporte + '">' + deporte + '</option>';
    });

    jQuery('#deportes').html(htmlDeporte);

    jQuery('#deportes').change(function () {
        var valorDeporte = jQuery(this).val();

        if (valorDeporte == 'sin-deporte') {
            alert('Seleccione Deporte');
        }
    });
});

