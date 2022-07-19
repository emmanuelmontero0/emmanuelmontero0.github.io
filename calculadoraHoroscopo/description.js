
function create(name, elemento, personalidad) {
    this.nombre = name,
    this.element = elemento,
    this.personality = personalidad
};

const zodiaco = [];
/*
        Signos de fuego: Aries, Leo y Sagitario.
        Signos de tierra: Tauro, Virgo y Capricornio.
        Signos de aire: Géminis, Libra y Acuario.
        Signos de agua: Cáncer, Escorpio y Piscis.
*/
//Signos de fuego: Aries, Leo y Sagitario.
zodiaco.push(new create("Aries", "Fuego", "Se distinguen por tener una actitud positiva, ser valientes, puntuales, determinados y poner el mayor empeño cuando algo les apasiona, por lo que son siempre los primeros en todo y líderes natos. "),
new create("Leo", "Fuego", ": Son los líderes por naturaleza del horóscopo. Son convincentes, creativos, seguros de sí mismos, dominantes, suelen ser siempre los que toman la iniciativa y en ocasiones son un poco exagerados."),
new create("Sagitario", "fuego", " Su entusiasmo no tiene límites, siempre están planeando, creando e iniciando nuevos proyectos. Son extrovertidos y no le temen al cambio."))

//Signos de tierra: Tauro, Virgo y Capricornio.
zodiaco.push(new create("Tauro", "Tierra", "Se esfuerzan al máximo para tener estabilidad económica y suelen rodearse de placeres materiales. Derrochan sensualidad, son estables es su relaciones amorosas, conservadores y de un carácter fuerte."),
new create("Virgo", "Tierra", "Los Virgo son amorosos y se esmeran por cuidar a quienes aman, aunque pueden caer en una actitud aprensiva. Son organizados y tienen sus metas claras, por lo que las personas a su alrededor los admiran y los ven como buen ejemplo."),
new create("Capricornio", "Tierra", "Son honestos, serios, profesionales, dedicados en el trabajo y perseverantes, por lo que son exitosos en los negocios, puestos de liderazgo y supervisión."))

//Signos de aire: Géminis, Libra y Acuario.
zodiaco.push(new create("Geminis", "Aire", "Los Géminis suelen tener dos personalidades diferentes, ya que puede ser en un momento el más sociable y divertido, mientras que otras veces son serios y reservados."),
new create("Libra", "Aire", "Son de los signos más sociables del zodiaco, aman estar rodeados de personas. Son astutos, inteligentes y se sienten atraídos por artistas, desde pintores, músicos, escritores y más."), 
new create("Acuario", "Aire", "Se adaptan fácilmente, por lo cual pueden sentirse cómodos rodeados de personas extrovertidas o las más serias. Son inteligentes, intelectuales, son buenos amigos, les gusta ayudar y no juzgan a las personas que aman."))

//Signos de agua: Cáncer, Escorpio y Piscis.
zodiaco.push(new create("Cancer", "Agua", "Son tenaces, intuitivos, empáticas y leales, los nacidos bajo el signo del zodiaco Cáncer son emocionales, sensibles, en ocasiones reservados y dan todo por proteger a su familia."), 
new create("Escorpio", "Agua", "A los nacidos bajo el signo del zodiaco Agua no los puedes dejar con la duda, no se detendrán hasta conocer la verdad. Son asertivos, saben guardar secretos y son amigos leales."), 
new create("Piscis", "Agua", "Su personalidad le es de gran ayuda para poder hacer amigos en cualquier lugar que visitan. Son intuitivos, amables, confiables, generosos y con un talento artístico."))