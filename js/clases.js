const clases =[]

class clase{
    constructor(nombre, razas, armas, descripcion, stats, habilidad){
        this.nombre = nombre
        this.razas = razas
        this.armas = armas
        this.descripcion = descripcion
        this.stats = stats
        this.habilidad = habilidad
    }
}

const Shinobi = new clase ("Shinobi", ["Humano", "Elfo", "Ranoide", "no muerto", "enano", "Panda"], [ "Ninjato", "Tanto", "Shuriken", "Kunai"], "Maestros del sigilo y la agilidad, los Shinobi son expertos en el arte del espionaje y el combate rápido. Utilizan técnicas de ninjutsu para infiltrarse en las sombras y eliminar a sus objetivos con precisión letal.", [Fuerza = 6, Agilidad =10, Inteligencia =4, resistencia = 8, Magia = 3], ["bola de fuego", "rassengan", "clones de sombra", "invocacion", "transformacion"] )
const Samurai = new clase ("Samurai", ["Humano", "Orco", "hobbit", "Demonio"], ["Katana", "Wakizashi", "Tanto", "Arco largo", "Arco corto"], "Los Samurai Errantes son guerreros honorables que viajan por el mundo en busca de desafíos y aventuras. Siguen un estricto código de honor y son conocidos por su destreza en el combate con espada y su habilidad para adaptarse a diferentes situaciones.", [Fuerza = 10, Agilidad =6, Inteligencia =7, resistencia = 5, Magia = 0], ["corte giratorio", "corte ascendente", "postura defensiva", "carga de batalla", "respiración del agua"] )
const Monje = new clase ("Monje", ["Elfo", "Enano", "Panda", "WuKong", "Angel"], ["Bastón", "Nunchaku", "Kusarigama", "Manoplas"], "Los Monjes son maestros de las artes marciales y la meditación. Utilizan su cuerpo como arma, combinando movimientos fluidos y técnicas de combate cuerpo a cuerpo para derrotar a sus enemigos. Su disciplina y enfoque les permiten alcanzar un estado de iluminación espiritual.", [Fuerza = 7, Agilidad =8, Inteligencia =9, resistencia = 6, Magia = 5], ["puño de hierro", "patada voladora", "meditacion", "cura", "aura de proteccion"] )

clases.push(Shinobi, Samurai, Monje)