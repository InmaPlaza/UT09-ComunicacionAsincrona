const DB_NAME = 'VideoSystem';

//Funcion que crea la Base de Datos
function CrearBaseDatos(){
    //Comprobamos si el navegador tiene indexDB
    if(!window.indexedDB){
        window.alert("El navegador no soporta el IndexedDB.")
    }

    var db = indexedDB.open(DB_NAME,1);

    db.onupgradeneeded = function (evento){
        var dataBase = db.result;

        //Creamos las tablas de los objetos de VideoSystem
        dataBase.createObjectStore("Categorias", {keyPath: 'Nombre'});
        dataBase.createObjectStore("Producciones", {keyPath: 'Titulo'});
        dataBase.createObjectStore("Actores", {keyPath: 'Apellido1'});
        dataBase.createObjectStore("Directores", {keyPath: 'Apellido1'});
        dataBase.createObjectStore("Usuarios", {keyPath: 'Usuario'});
        dataBase.createObjectStore("AsignarCategorias", {keyPath: 'Categoria'});
        dataBase.createObjectStore("AsignarActores", {keyPath: 'Actor'});
        dataBase.createObjectStore("AsignarDirectores", {keyPath: 'Director'});
    };
}

//Funcion que carga la Base de Datos con los objetos del VideoSystem
function CargaBaseDeDatos(){
    var resource = new Resource(180,"http://www.recurso.com",["Español","Ingles"],["Ingles","Español"]);
	var resource1 = new Resource(210,"http://www.recurso1.com",["Español","Ingles"],["Ingles","Español"]);
	var resource2 = new Resource(188,"http://www.recurso2.com",["Español","Ingles"],["Ingles","Español"]);

    var coor = new Coordinate(90,130);
    
    var season = new Season("Temporada 1",[
		{title:'Episodio 1',episode: resource, scenarios:[new Coordinate(14,20)]},
		{title:'Episodio 2',episode: resource1, scenarios:[new Coordinate(14,30)]}
	]);
	var season1 = new Season("Temporada 2",[
		{title:'Episodio 1',episode: resource1, scenarios:[new Coordinate(14,20)]},
		{title:'Episodio 2',episode: resource2, scenarios:[new Coordinate(14,30)]}
	]);

    const actoresData = [
        new Person("Blanca","Suarez","",new Date(1990,05,10),"https://es.wikipedia.org/wiki/Blanca_Su%C3%A1rez"),
        new Person("Anna","Fernandez","",new Date(1990,03,04),"https://es.wikipedia.org/wiki/Ana_Fern%C3%A1ndez_Garc%C3%ADa"),		
        new Person("Ana","Polvorosa","",new Date(1991,11,25),"https://es.wikipedia.org/wiki/Ana_Mar%C3%ADa_Polvorosa"),
        new Person("Nadia","De Santiago","",new Date(1991,01,23),"https://es.wikipedia.org/wiki/Nadia_de_Santiago"),
        new Person("Maggie","Civantos","",new Date(1985,09,12),"https://es.wikipedia.org/wiki/Maggie_Civantos"),
        new Person("Martiño","Rivas","",new Date(1985,01,10),"https://es.wikipedia.org/wiki/Marti%C3%B1o_Rivas"),
        new Person("Yon","Gonzalez","",new Date(1986,05,20),"https://es.wikipedia.org/wiki/Yon_Gonz%C3%A1lez"),
        new Person("Sergio","Mur","",new Date(1977,05,23),"https://es.wikipedia.org/wiki/Sergio_Mur")
    ];

    const directoresData = [
        new Person("Steven","Spielberg","",new Date(1946,12,18),"https://es.wikipedia.org/wiki/Steven_Spielberg"),
        new Person("James","Cameron","",new Date(1954,08,16),"https://es.wikipedia.org/wiki/James_Cameron"),
        new Person("Quentin","Tarantino","",new Date(1963,03,27),"https://es.wikipedia.org/wiki/Quentin_Tarantino"),
        new Person("Peter","Jackson","",new Date(1961,10,31),"https://es.wikipedia.org/wiki/Peter_Jackson")
    ];

    const categoriasData = [
        new Category("Terror","Es un género cinematográfico que se caracteriza por su voluntad de provocar en el espectador sensaciones de pavor, terror, miedo, disgusto."),
        new Category("Acción","Es un género cinematográfico en el que prima la espectacularidad de las imágenes por medio de efectos especiales de estilo clásico."),
        new Category("Romántico","Es un género cinematográfico que se caracteriza por retratar argumentos construidos de eventos y personajes relacionados con la expresión del amor y las relaciones románticas."),
        new Category("Animación","Es un género cinematográfico que se caracteriza por no recurrir a la técnica del rodaje de imágenes reales sino a una o más técnicas de animación."),
        new Category("Infantiles","Es un género cinematográfico destinado a un público de corta edad, adaptada a sus intereses y a su nivel de comprensión."),
        new Category("Musicales","Alude a todas aquellas producciones cinematográficas que incluyen canciones o temas musicales bailables en una parte fundamental del desarrollo argumental de la misma.")
    ];

    const usuariosData = [
        new User("Inma","inma@inma.com","contra1"),
        new User("Maria","maria@maria.com","contra1"),
        new User("Jesus","jesus@jesus.com","contra1"),
        new User("prueba","prueba@prueba.com","prueba")
    ];

    const produccionesData = [
        new Movie("La noche de Hallowen","Estadounidense",new Date(2018,10,07),
        "Jamie Lee Curtis regresa a su icónico personaje Laurie Strode, quien llega a la confrontación final con Michael Myers, la figura enmascarada que la ha perseguido desde que escapó de la matanza que él cometió la noche de Halloween de hace cuatro décadas. Nueva entrega de Halloween, secuela directa de la original de 1978.",
        "https://www.filmaffinity.com/es/film122880.html",resource,coor),
        new Movie("La Monja","Estadounidense",new Date(2018,10,11),
        "Cuando una joven monja se suicida en una abadía de clausura en Rumanía, un sacerdote experto en posesiones demoniacas y una novicia a punto de tomar sus votos, son enviados por el Vaticano para investigar. Juntos descubren el profano secreto de la orden. Arriesgando no solo sus propias vidas sino su fe y hasta sus almas, se enfrentan a una fuerza maléfica en forma de monja demoníaca, en una abadía que se convierte en un campo de batalla de horror entre los vivos y los condenados.",
        "https://www.filmaffinity.com/es/film211433.html",resource1,coor),
        new Movie("Vengadores Infinity War","Estadounidense",new Date(2018,10,11),
        "El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo.",
        "https://www.filmaffinity.com/es/film827414.html",resource2,coor),
        new Movie("Mission Impossible Fallout","Estadounidense",new Date(2018,10,11),
        "Sexta entrega de la saga. En esta ocasión presenta a Ethan Hunt (Tom Cruise) y su equipo IMF (Alec Baldwin, Simon Pegg, Ving Rhames), con algunos aliados conocidos (Rebecca Ferguson, Michelle Monaghan), en una lucha contrarreloj después de que una misión salga mal.",
        "https://www.filmaffinity.com/es/film286514.html",resource,coor),
        new Movie("Crepúsculo","Estadounidense",new Date(2008,10,11),
        "La joven Bella Swan (Kristen Stewart) siempre fue una chica muy diferente ya en sus años de niña en Phoenix. Cuando su madre se volvió a casar, la mandó a vivir con su padre, a la pequeña y lluviosa ciudad de Forks, Washington, una población sin ningún aliciente para Bella. Pero entonces conoce en el instituo al misterioso y atractivo Edward Cullen (Robert Pattinson), un joven distinto a los demás que esconde un secreto...",
        "https://www.filmaffinity.com/es/film146914.html",resource1,coor),
        new Movie("El diario de Noa","Estadounidense",new Date(2004,10,11),
        "En una residencia de ancianos, un hombre (James Garner) lee a una mujer (Gena Rowlands) una historia de amor escrita en su viejo cuaderno de notas. Es la historia de Noah Calhoun (Ryan Gosling) y Allie Hamilton (Rachel McAdams), dos jóvenes adolescentes de Carolina del Norte que, a pesar de vivir en dos ambientes sociales muy diferentes, se enamoraron profundamente y pasaron juntos un verano inolvidable, antes de ser separados, primero por sus padres, y más tarde por la guerra.",
        "https://www.filmaffinity.com/es/film738597.html",resource2,coor),
        new Movie("Los Increíbles 2","Estadounidense",new Date(2018,10,11),
        "Secuela de Los increíbles. Helen tiene que liderar una campaña para que los superhéroes regresen, mientras Bob vive su vida normal con Violet, Dash y el bebé Jack-Jack —cuyos superpoderes descubriremos—. Su misión se va a pique cuando aparece un nuevo villano con un brillante plan que lo amenaza todo. Pero los Parr no se amedrentarán y menos teniendo a Frozone de su parte.",
        "https://www.filmaffinity.com/es/film596458.html",resource,coor),
        new Movie("Gru, mi villano favorito","Estadounidense",new Date(2010,10,11),
        "Gru (voz de Steve Carell) es un hombre deplorable que planea el acto criminal más increíble de la Historia: robar la Luna. Incitado por una madre malvada (voz de Julie Andrews), sólo encontrará un obstáculo en su camino: tres niñas huérfanas a las que tendá que cuidar temporalmente.",
        "https://www.filmaffinity.com/es/film203645.html",resource1,coor),
        new Movie("The Grinch","Estadounidense",new Date(2018,10,11),
        "Cada año, en Navidad, los lugareños perturban su pacífica soledad con celebraciones cada vez más desmesuradas, luminosas y ruidosas. Cuando los Quién declaran que ese año van a preparar una Navidad el triple de grande, el Grinch se da cuenta de que solo hay un modo de recuperar algo de paz y silencio: robar la Navidad. Para ello, decide hacerse pasar por Santa Claus en Nochebuena, haciéndose con un reno muy peculiar para tirar de su trineo. ",
        "https://www.filmaffinity.com/es/film147835.html",resource2,coor),
        new Movie("Alicia en el país de las maravillas","Estadounidense",new Date(1951,10,11),
        "Historia de magia y fantasía en la que la joven Alicia se sumerge en el sorprendente País de las Maravillas y conoce a extraordinarios personajes como Tweedledee y Tweedledum, el Sombrerero Loco, La Reina de Corazones y el frenético Conejo Blanco. ",
        "https://www.filmaffinity.com/es/film117518.html",resource,coor),
        new Movie("Mamma Mia!","Reino Unido",new Date(2008,10,11),
        "Sophie Sheridan (Amanda Seyfried) es una chica de veinte años residente en el hotel de su madre, situado en una isla griega, que está a punto de casarse con Sky (Dominic Cooper). Su madre, Donna (Meryl Streep), nunca le ha dicho quién es su padre.",
        "https://www.filmaffinity.com/es/reviews/1/336014.html?orderby=6",resource1,coor),
        new Movie("High School Musical","Estadounidense",new Date(2006,10,11),
        "Durante unas vacaciones de Navidad, los jóvenes Troy y Gabriella (dos adolescentes en principo con pocas cosas en común) se conocen. Ambos descubren su interés mutuo por la música durante un concurso de karaoke, y deciden presentarse al casting del musical del instituto.",
        "https://www.filmaffinity.com/es/film407428.html",resource2,coor),
        new Serie("Stranger Things","Estadounidense",new Date(2016,07,15),
        "La historia arranca durante la década de los 80, en el ficticio pueblo de Hawkins, Indiana, cuando un niño llamado Will Byers desaparece, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno en un laboratorio científico cercano. Además, en la ciudad aparecen fuerzas sobrenaturales inquietantes y una niña muy extraña. Ella, junto con los amigos de Will, se encargará de buscarlo, sin imaginar lo que tendrán que enfrentar para encontrarlo. ",
        "https://es.wikipedia.org/wiki/Stranger_Things",[season,season1]),
        new Serie("Black Mirror","Reino Unido",new Date(2011,12,04),
        "Black Mirror es una producción británica desarrollada por Charlie Brooker ('Dead set: Muerte en directo'), Una serie de episodios independientes entre sí y, con un reparto y tramas totalmente diferentes, cuyo único punto común es el poder de las nuevas tecnologías para mover el mundo.",
        "https://es.wikipedia.org/wiki/Black_Mirror",[season,season1]),
        new Serie("Juego de Tronos","Estadounidense",new Date(2011,04,17),
        "Relata las vivencias de un grupo de personajes de diferentes familias nobiliarias en el continente ficticio Poniente para hacerse del control del Trono de Hierro y así gobernar los Siete Reinos que conforman al territorio.",
        "https://es.wikipedia.org/wiki/Game_of_Thrones_(serie_de_televisi%C3%B3n)",[season,season1]),
        new Serie("Vikings","Irlanda",new Date(2013,03,03),
        "Vikings es una serie que está basada en las leyendas sobre el vikingo Ragnar Lodbrok, (Travis Fimmel) uno de los héroes más famosos de la cultura nórdica que saqueó Northumbria, Francia y Bretaña. La serie retrata a Lodbrok como un guerrero curioso y navegante, tecnológicamente innovador, ambicioso y rebelde, que hace construir un barco a su amigo Floki, para lanzarse a explorar los territorios al oeste de Escandinavia desobedeciendo al jefe tribal, el Jarl (Conde) Haraldson, que ordena viajar hacia el este.",
        "https://es.wikipedia.org/wiki/Vikings_(serie_de_televisi%C3%B3n)",[season,season1]),
        new Serie("Velvet","Española",new Date(2014,02,17),
        "En la España de 1958 hay un lugar al que todo el mundo desearía ir de compras al menos una vez en la vida: las Galerías Velvet. Ubicadas en el número 34 de la Gran Vía madrileña, entre sus paredes se encuentran los trajes más elegantes y caros del momento, pero sobre todo se esconde una de las historias de amor que se haya contado jamás: la de Ana y Alberto. Ella, una humilde costurera que trabaja en las galerías desde que era niña. Él, un joven y apuesto muchacho destinado a heredar el majestuoso imperio de la moda que hasta ahora gobierna su padre, Don Rafael Márquez.",
        "https://es.wikipedia.org/wiki/Velvet_(serie_de_televisi%C3%B3n)",[season,season1]),
        new Serie("Gran Hotel","Española",new Date(2011,10,04),
        "Los acontecimientos transcurren en 1905. Julio Olmedo (Yon González), un joven de origen humilde, llega hasta el idílico Gran Hotel, situado a las afueras de un pueblo llamado Cantaloa, para visitar a su hermana Cristina (Paula Prendes) que trabaja en el mismo como encargada de planta. Allí, Julio descubrirá que hace más de un mes que nadie sabe nada de ella (tras ser expulsada del hotel por el supuesto robo a un cliente). Julio decide quedarse como camarero e investigar su desaparición. De este modo irá conociendo al personal y entablará una relación con Alicia Alarcón (Amaia Salamanca), una de las hijas de doña Teresa (Adriana Ozores), la propietaria del hotel.",
        "https://es.wikipedia.org/wiki/Gran_Hotel_(serie_de_televisi%C3%B3n)",[season,season1]),
        new Serie("Los Simpson","Estadounidense",new Date(1989,12,18),
        "La serie es una sátira de la sociedad estadounidense que narra la vida y el día a día de una familia de clase media de ese país (cuyos miembros son Homer, Marge, Bart, Lisa y Maggie Simpson) que vive en un pueblo ficticio llamado Springfield.",
        "https://es.wikipedia.org/wiki/Los_Simpson",[season,season1]),
        new Serie("Padre de familia","Estadounidense",new Date(1999,01,31),
        " La serie se centra en los Griffin, una familia disfuncional cuyos componentes son: los padres Peter y Lois; sus hijos Meg, Chris, y Stewie; y su perro antropomorfo Brian. La serie está situada en la ciudad ficticia de Quahog, Rhode Island.",
        "https://es.wikipedia.org/wiki/Padre_de_familia",[season,season1]),
        new Serie("Peppa Pig","Reino Unido",new Date(2004,05,31),
        "La protagonista de esta serie es Peppa, una cerdita de rasgos antropomorfos que vive con su hermanito George y sus padres: Mamá Pig (Mummy Pig) y Papá Pig (Daddy Pig). Tiene como escenario principal su hogar, donde ocurre la mayoría de las tramas de los episodios. En algunos de ellos se muestra a su familia saliendo de casa, paseando en coche, yendo a casa de sus amigos o estando ya en otro lugar.",
        "https://es.wikipedia.org/wiki/Peppa_Pig",[season,season1]),
        new Serie("Pocoyó","Reino Unido/España",new Date(2005,01,28),
        "Narra las aventuras de un niño en edad de preescolar llamado Pocoyó, que está descubriendo el mundo e interactuando con él. Le acompañan sus amigos, Pato, Elly, Pajaroto (en la versión para Latinoamérica algunas veces recibe el nombre de Pájaro dormilón) y su mascota Loula.",
        "https://es.wikipedia.org/wiki/Pocoy%C3%B3",[season,season1]),
        new Serie("Dreamland","Española",new Date(2014,03,28),
        "La serie nos muestra la vida de Jacobo, Hugo, Ángela, Rosa y Moisés, artistas seleccionados para ingresar en Dreamland, una escuela en la que perfeccionar su destacado talento. Todos cantan, bailan, componen e interpretan canciones, y en Dreamland contarán con una gran formación, para enseñar lo mejor de cada uno de ellos.",
        "https://es.wikipedia.org/wiki/Dreamland_(serie_de_televisi%C3%B3n)",[season,season1]),
        new Serie("Nashville","Estadounidense",new Date(2012,10,10),
        "La serie narra la vida de varios cantantes de música country ficticios en Nashville, Tennessee protagonizada por Connie Britton como Rayna Jaymes, una legendaria superestrella de la música country, cuyo estrellato comienza a desvanecerse, y Hayden Panettiere como Juliette Barnes. Britton Britton dejó el show en la temporada cinco.",
        "https://es.wikipedia.org/wiki/Nashville_(serie_de_televisi%C3%B3n)",[season,season1])
    ];

    const categoriaProd = [
        {Categoria: "Terror", Producciones: ["La noche de Hallowen","La Monja","Stranger Things","Black Mirror"]},
        {Categoria: "Acción", Producciones: ["Vengadores Infinity War","Mission Impossible Fallout","Juego de Tronos","Vikings"]},
        {Categoria: "Romántico", Producciones: ["Crepúsculo","El diario de Noa","Velvet","Gran Hotel"]},
        {Categoria: "Animación", Producciones: ["Los Increíbles 2","Gru, mi villano favorito","Los Simpson","Padre de familia"]},
        {Categoria: "Infantiles", Producciones: ["The Grinch","Alicia en el país de las maravillas","Peppa Pig","Pocoyó"]},
        {Categoria: "Musicales", Producciones: ["Mamma Mia!","High School Musical","Dreamland","Nashville"]}
    ];

    const actoresProd = [
        {Actor: "Suarez", Producciones: [{Nombre: "La noche de Hallowen", Papel: "Principal", Principal: false},{Nombre: "The Grinch", Papel: "Principal", Principal: true},{Nombre: "Velvet", Papel: "Principal", Principal: true}]},
        {Actor: "Fernandez", Producciones: [{Nombre: "La Monja", Papel: "Principal", Principal: true},{Nombre: "Alicia en el país de las maravillas", Papel: "Principal", Principal: false},{Nombre: "Gran Hotel", Papel: "Extra", Principal: false}]},
        {Actor: "Polvorosa", Producciones: [{Nombre: "Vengadores Infinity War", Papel: "Secundario", Principal: true},{Nombre: "Mamma Mia!", Papel: "Secundario", Principal: true},{Nombre: "Los Simpson", Papel: "Principal", Principal: true}]},
        {Actor: "De Santiago", Producciones: [{Nombre: "Mission Impossible Fallout", Papel: "Extra", Principal: false},{Nombre: "High School Musical", Papel: "Principal", Principal: true},{Nombre: "Padre de familia", Papel: "Secundario", Principal: false}]},
        {Actor: "Civantos", Producciones: [{Nombre: "Crepúsculo", Papel: "Secundario", Principal: true},{Nombre: "Stranger Things", Papel: "Principal", Principal: true},{Nombre: "Peppa Pig", Papel: "Principal", Principal: true}]},
        {Actor: "Rivas", Producciones: [{Nombre: "El diario de Noa", Papel: "Principal", Principal: true},{Nombre: "Black Mirror", Papel: "Secundario", Principal: true},{Nombre: "Pocoyó", Papel: "Principal", Principal: false}]},
        {Actor: "Gonzalez", Producciones: [{Nombre: "Los Increíbles 2", Papel: "Secundario", Principal: false},{Nombre: "Juego de Tronos", Papel: "Principal", Principal: false},{Nombre: "Dreamland", Papel: "Secundario", Principal: true}]},
        {Actor: "Mur", Producciones: [{Nombre: "Gru, mi villano favorito", Papel: "Extra", Principal: true},{Nombre: "Vikings", Papel: "Secundario", Principal: true},{Nombre: "Nashville", Papel: "Principal", Principal: false}]}
    ];

    const directoresProd = [
        {Director: "Spielberg", Producciones: ["La noche de Hallowen","Crepúsculo","The Grinch","Stranger Things","Velvet","Peppa Pig"]},
        {Director: "Cameron", Producciones: ["La Monja","El diario de Noa","Alicia en el país de las maravillas","Black Mirror","Gran Hotel","Pocoyó"]},
        {Director: "Tarantino", Producciones: ["Vengadores Infinity War","Los Increíbles 2","Mamma Mia!","Juego de Tronos","Los Simpson","Dreamland"]},
        {Director: "Jackson", Producciones: ["Mission Impossible Fallout","Gru, mi villano favorito","High School Musical","Vikings","Padre de familia","Nashville"]}
    ];

    añadirDatos("Categorias",categoriasData);
	añadirDatos("Actores",actoresData);
    añadirDatos("Directores",directoresData);
    añadirDatos("Usuarios",usuariosData);
    añadirDatos("Producciones",produccionesData);
    añadirDatosAsignados("AsignarCategorias", categoriaProd);
    añadirDatosAsignados("AsignarActores", actoresProd);
    añadirDatosAsignados("AsignarDirectores", directoresProd);
}

//Funcion que añade datos a las tablas
function añadirDatos(tabla,objetos){
    var respuesta = indexedDB.open(DB_NAME);

    respuesta.onsuccess = function(evento){
        var db = evento.target.result;
        var almacen = db.transaction([tabla],"readwrite").objectStore(tabla);

        almacen.transaction.oncomplete = function(evento){
            var añadirAlmacen = db.transaction([tabla],"readwrite").objectStore(tabla);
            for(var i in objetos){
                añadirAlmacen.add(objetos[i]);
            }
        };
    };
}

//Funcion que añade datos asignados a las tablas
function añadirDatosAsignados(tabla,objetos){
    var respuesta = indexedDB.open(DB_NAME);

    respuesta.onsuccess = function(evento){
        var db = evento.target.result;
        var almacen = db.transaction([tabla],"readwrite").objectStore(tabla);

        almacen.transaction.oncomplete = function(evento){
            var añadirAlmacen = db.transaction([tabla],"readwrite").objectStore(tabla);
            for(var i in objetos){
                añadirAlmacen.add(objetos[i]);
            }
        };
    };
}

//Funcion que añade un dato a una tabla
function añadirDato(tabla,objeto){
    var respuesta = indexedDB.open(DB_NAME);

    respuesta.onsuccess = function(evento){
        var db = evento.target.result;
        var almacen = db.transaction([tabla],"readwrite").objectStore(tabla);

        almacen.transaction.oncomplete = function(evento){
            var añadirAlmacen = db.transaction([tabla],"readwrite").objectStore(tabla);
            
            añadirAlmacen.add(objeto.getObject());
        };
    };
}

//Funcion que añade un dato asignado a una tabla
function añadirDatoAsignado(tabla,asignar) {
	var respuesta = indexedDB.open(DB_NAME);

	respuesta.onsuccess = function(evento) {
		var db = evento.target.result;         
		var almacen = db.transaction([tabla],"readwrite").objectStore(tabla);

		almacen.transaction.oncomplete = function(evento) {
			var añadirAlmacen = db.transaction([tabla],"readwrite").objectStore(tabla);
			
			añadirAlmacen.add(asignar);
		};
	};
}

//Funcion que borra un dato de una tabla
function borrarDato(tabla,clave){
    var respuesta = indexedDB.open(DB_NAME);

    respuesta.onsuccess = function(evento){
        var db = evento.target.result;
        db.transaction([tabla],"readwrite").objectStore(tabla).delete(clave);
    };
}

//Funcion que modifica una categoria
function modificarCategoria(clave,nombre,descripcion){
    var respuesta = indexedDB.open(DB_NAME);

    respuesta.onsuccess = function(evento){
        var db = evento.target.result;
        var almacen = db.transaction(["Categorias"],"readwrite").objectStore("Categorias");

        var categoria = almacen.get(clave);

        almacen.delete(clave);

        categoria.onsuccess = function(evento){
            var datos = categoria.result;

            datos.Nombre = nombre;
            datos.Descripcion = descripcion;

            almacen.add(datos);
        };
    };
}

//Funcion que modificar un actor asignado
function modificarActorAsignado(clave,apellido1){
	var request = indexedDB.open(DB_NAME);

	request.onsuccess = function(evento) {
		var db = evento.target.result;         
		var objectStore = db.transaction(["AsignarActores"],"readwrite").objectStore("AsignarActores");

		var objeto = objectStore.get(clave);

		objectStore.delete(clave);

		objeto.onsuccess = function(evento) {
			var datos = objeto.result;
			
			datos.Actor = apellido1;

			objectStore.add(datos);
		};
	};
}

//Funcion que modifica un Director asignado
function modificarDirectorAsignado(clave,apellido1){
	var request = indexedDB.open(DB_NAME);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction(["AsignarDirectores"],"readwrite").objectStore("AsignarDirectores");

		var objeto = objectStore.get(clave);

		objectStore.delete(clave);

		objeto.onsuccess = function(event) {
			// Get the old value that we want to update
			var datos = objeto.result;
			
			datos.Director = apellido1;

			objectStore.add(datos);
		};
	};
}

//Funcion que modifica los datos de una persona del sistema 
function modificarPersona(tabla,clave,nombre,apellido1,apellido2,fechaNacimiento,imagen){
    var respuesta = indexedDB.open(DB_NAME);

    respuesta.onsuccess = function(evento){
        var db = evento.target.result;
        var almacen = db.transaction([tabla],"readwrite").objectStore(tabla);

        var objeto = almacen.get(clave);

        almacen.delete(clave);

        objeto.onsuccess = function(evento){
            var datos = objeto.result;

            datos.Nombre = nombre;
            datos.Apellido1 = apellido1;
            datos.Apellido2 = apellido2;
            datos.Nacimiento = fechaNacimiento;
            datos.Imagen = imagen;

            almacen.add(datos);
        };
    };
}

//Funcion que modifica una categoria asignada
function modificarCategoriaAsignada(clave,nombre){
    var respuesta = indexedDB.open(DB_NAME);

    respuesta.onsuccess = function(evento){
        var db = evento.target.result;
        var almacen = db.transaction(["AsignarCategorias"],"readwrite").objectStore("AsignarCategorias");

        var categoria = almacen.get(clave);

        almacen.delete(clave);

        categoria.onsuccess = function(evento){
            var datos = categoria.result;
            datos.Categoria = nombre;

            almacen.add(datos);
        };
    };
}

//Funcion que permite asignar un objeto o elemento a una tabla
function asignar(tabla,clave,asignar){
    var respuesta = indexedDB.open(DB_NAME);

    respuesta.onsuccess = function(evento){
        var db = evento.target.result;
        var almacen = db.transaction([tabla],"readwrite").objectStore(tabla);

        var objeto = almacen.get(clave);

        almacen.delete(clave);

        objeto.onsuccess = function(evento){
            var datos = objeto.result;

            datos.Producciones.push(asignar);

            almacen.add(datos);
        };
    };
}

//Funcion que permite desasignar un objeto o elemento de una tabla
function desasignar(tabla,clave,desasignar){
    var respuesta = indexedDB.open(DB_NAME);

    respuesta.onsuccess = function(evento){
        var db = evento.target.result;
        var almacen = db.transaction([tabla],"readwrite").objectStore(tabla);

        var objeto = almacen.get(clave);

        almacen.delete(clave);

        objeto.onsuccess = function(evento){
            var datos = objeto.result;
            var lista = datos.Producciones;
            var posicion = lista.indexOf(desasignar);
            
            if(posicion != 1){
                lista.splice(posicion,1);
            }
            almacen.add(datos);
        };
    };
}

//Funcion que permite desasignar un actor de una tabla
function desasignarActor(tabla,clave,desasignar){
    var respuesta = indexedDB.open(DB_NAME);

    respuesta.onsuccess = function(evento){
        var db = evento.target.result;
        var almacen = db.transaction([tabla],"readwrite").objectStore(tabla);

        var objeto = almacen.get(clave);

        almacen.delete(clave);

        objeto.onsuccess = function(evento){
            var datos = objeto.result;
            var lista = datos.Producciones;

            for(var i = 0; i < lista.length; i++){
                if(lista[i].Nombre == undefined){
                    var posicion = lista.indexOf(desasignar);
                }
                else{
                    if(lista[i].Nombre == desasignar){
                        var posicion = lista[i];
                    } 
                }
            }
            
            if(posicion != 1){
                lista.splice(posicion,1);
            }
            almacen.add(datos);
        };
    };
}