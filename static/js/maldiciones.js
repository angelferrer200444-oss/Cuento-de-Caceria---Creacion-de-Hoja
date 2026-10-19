const curses = {
  "bestia": {
    effect: "Cada noche te transformas en una Bestia Horripilante. Mientras dure la transformaci&oacute;n, obtienes como Virtudes temporales: Fuerte, Olfato de Sabueso, Aspecto de animal, Fauces y Garras. Si ya pose&iacute;as Virtudes similares, el Narrador puede otorgarte +1 adicional a Pruebas relacionadas.",
    penalty: "Recibes -2 a Pruebas Sociales mientras est&eacute;s transformado. Eres percibido como una amenaza y los NPC hostiles pueden intentar cazarte. Al amanecer vuelves a tu forma normal y pierdes los rasgos temporales.",
    breakCondition: "Beber una poci&oacute;n legendaria preparada por un alquimista durante una noche de luna llena. Opcionalmente, un beso de amor verdadero tambi&eacute;n puede romperla."
  },
  "voz-encantada": {
    effect: "Has perdido la capacidad de hablar, pero puedes susurrar. Cuando un enemigo act&uacute;e contra ti, puedes usar esta Maldici&oacute;n como Prueba de Defensa. Si tienes &eacute;xito, el enemigo queda Aturdido durante 1 turno. Si fallas, sufres el efecto que el enemigo intentaba imponerte. Un mismo objetivo no puede ser afectado m&aacute;s de una vez por escena.",
    penalty: "No puedes comunicarte verbalmente; solo puedes usar gestos o se&ntilde;as.",
    breakCondition: "Cantar una canci&oacute;n ritual usando la voz de otra persona, sellada previamente en un amuleto."
  },
  "corazon-congelado": {
    effect: "Te vuelves inmune a la condici&oacute;n de fr&iacute;o y puedes generar o manipular hielo como acci&oacute;n principal. Puedes crear superficies resbaladizas, copos de nieve o petrificar a un objetivo. Para usar este poder, realiza primero una Prueba de Cordura; si fallas, recibes 1 de Corrupci&oacute;n. Por cada nivel de Dificultad por encima de f&aacute;cil, recibes 1 de Corrupci&oacute;n adicional en caso de fracaso.",
    penalty: "No puedes restaurar Corrupci&oacute;n de manera convencional durante los Interludios. Realizas Pruebas para ayudar mentalmente a otros con Desventaja y recibes -1 a Pruebas Sociales o de Percepci&oacute;n basadas en empat&iacute;a, emociones o personalidad de un NPC.",
    breakCondition: "Realizar un gesto de amor genuino hacia alguien m&aacute;s."
  },
  "sombras": {
    effect: "Puedes gastar 1 Cordura para extender tu sombra y manipular un objeto cercano, o alterar la forma de una sombra para enga&ntilde;ar o distraer. Mientras permanezcas en oscuridad, obtienes +1 a Pruebas de Defensa. Con un &eacute;xito con incremento en Defensa, puedes gastar 1 Cordura para moverte de una sombra a otra.",
    penalty: "La oscuridad inquietante que te rodea asusta a tus aliados y cuenta como Rasgo negativo. Pierdes la capacidad de ver la luz del d&iacute;a. Si terminas tu turno expuesto al sol, recibes una Herida. En zonas iluminadas recibes Desventaja en tus Pruebas.",
    breakCondition: "Realizar repetidas Pruebas de Cordura de Dificultad 9 bajo la luz del sol hasta tener &eacute;xito, repitiendo la prueba al inicio de cada turno. Al finalizar la escena recibes un Traumatismo de Quemadura y no puedes recibir ayuda."
  },
  "sueno-profundo": {
    effect: "Al dormir entras en trance y un demonio surge para combatir por ti. Permaneces inconsciente y vulnerable. Puedes despertar con una Prueba de Cordura de Dificultad Intermedia 9 al inicio de cada turno, con ayuda de un aliado, o reduciendo a 0 las Heridas del demonio. El demonio aparece en escena y su dificultad base es 7, aumentando seg&uacute;n tu Corrupci&oacute;n. Sus Heridas son iguales a tu Vitalidad al aparecer.",
    penalty: "Cada vez que te duermes aparece irremediablemente el demonio, que ataca a toda criatura cercana. Al despertar realizas una Prueba de Cordura contra Estr&eacute;s y tu Fobia. Si fallas, el Estado permanece hasta el siguiente Interludio Largo. La dificultad base es 7 y aumenta por la Corrupci&oacute;n.",
    breakCondition: "Derrotar al demonio y sellarlo con &eacute;xito."
  },
  "espejo-roto": {
    effect: "Una vez por d&iacute;a puedes preguntar al DJ sobre un evento pasado o futuro. Adem&aacute;s, una vez por escena y gastando 1 Cordura, puedes viajar de un espejo a otro si est&aacute;n cerca.",
    penalty: "Si te reflejas en un espejo, puedes quedar atrapado dentro de &eacute;l durante toda la escena. Para salir debes superar una Prueba de Cordura de Dificultad 9 al inicio de la siguiente escena. Si el espejo queda cubierto o destruido, no puedes liberarte.",
    breakCondition: "Reunir los fragmentos de un espejo antiguo y restaurarlo en una ceremonia especial. Con ese espejo, atrapar en su interior a una persona incapaz de oponer resistencia."
  },
  "sangre-dragon": {
    effect: "Agrega a tu Descripci&oacute;n Garras Afiladas en manos y pies, piel de escamas resistente al calor intenso y un aliento convertido en llamarada de fuego. Con un &eacute;xito con incremento puedes provocar Quemado.",
    penalty: "Puedes herir accidentalmente a otros con tus garras. En escenas de sigilo, tensi&oacute;n o interacci&oacute;n social recibes -1 a Pruebas por contener tu aliento. Si fallas una Prueba Social o de Sigilo expulsas fuego involuntariamente. Tus escamas, ojos de reptil y garras provocan repulsi&oacute;n.",
    breakCondition: "Beber un caldo de sangre de drag&oacute;n mezclado con plata y oro en polvo."
  },
  "bosque-embrujado": {
    effect: "Puedes gastar 1 Cordura para controlar plantas y &aacute;rboles, creando barreras, l&aacute;tigos o ra&iacute;ces.",
    penalty: "No puedes alejarte demasiado del bosque; si lo haces, recibes 2 Estados de Estr&eacute;s por Agotamiento.",
    breakCondition: "Convencer al esp&iacute;ritu guardi&aacute;n de un bosque completando una misi&oacute;n en su coraz&oacute;n."
  },
  "sapo-hechizado": {
    effect: "Saltas grandes distancias y nadas con facilidad. Tu saliva es venenosa: quien sea lamido o besado por ti queda Intoxicado durante el resto de la escena y recibe -2 a su Dificultad o Pruebas. Realiza una Prueba de Acci&oacute;n contra la Dificultad del objetivo y rep&iacute;tela cada turno con -1 acumulativo. No puedes envenenar al mismo objetivo m&aacute;s de una vez por escena.",
    penalty: "Tu apariencia se vuelve grotesca y repulsiva: rostro verdoso, piel h&uacute;meda, ojos desorbitados, postura jorobada, labios resecos y toxinas. Cualquier NPC puede rechazarte o sentir repulsi&oacute;n al verte.",
    breakCondition: "Recibir el beso del verdadero amor."
  },
  "rosa-negra": {
    effect: "Puedes gastar 1 Cordura para hacer brotar espinas negras de tu cuerpo e infligir 1 Herida a todas las criaturas cercanas. Cada uso te inflige 1 Herida porque la rosa absorbe parte de tu sangre; el Narrador puede permitir un sustituto como acci&oacute;n.",
    penalty: "Tu vida est&aacute; unida a una rosa negra. Debes regarla y exponerla al sol dos veces al d&iacute;a. Si no lo haces entra en Debilitamiento; si termina el d&iacute;a debilitada, se Marchita y t&uacute; mueres. Debe alimentarse cada noche con sangre humana equivalente a 2 Heridas.",
    breakCondition: "Sacrificar la vida de tu esposo o esposa, plantar la rosa en su pecho bajo la luz de la luna y esperar a que sus p&eacute;talos se vuelvan blancos."
  },
  "rizos-dorados": {
    effect: "Un par&aacute;sito se oculta en tu cabello. Puedes moverlo como tent&aacute;culos a una distancia considerable y tienes una segunda boca oculta bajo tu melena, con enormes colmillos y apetito.",
    penalty: "La segunda boca exige comida constantemente, hasta el doble de una persona normal. Si no la alimentas, emite un alarido que te provoca dolor y Estr&eacute;s durante un Interludio. Puede insultar, hablar por ti o actuar sin permiso. Si comes poco por alimentarla, recibes Agotamiento como Estr&eacute;s.",
    breakCondition: "La segunda boca debe devorar a siete personas del g&eacute;nero opuesto al tuyo para que el par&aacute;sito se desprenda."
  },
  "armadura": {
    effect: "Tu cuerpo est&aacute; cubierto por una armadura oxidada fusionada a tu piel. Al inicio de cada escena obtienes 1 de Armadura contra la primera Herida o Lesi&oacute;n. Mientras est&eacute;s incapacitado puedes realizar una acci&oacute;n por escena maniobrando tu cuerpo mediante la armadura; despu&eacute;s vuelves a caer y no puedes lanzar magia ni emplear las palabras.",
    penalty: "No puedes equiparte otra armadura o vestuario. Todas las acciones que requieran velocidad o agilidad reciben -2. Los ataques el&eacute;ctricos o efectos dirigidos al metal impactan autom&aacute;ticamente. Emanas un olor terrible perceptible desde lejos.",
    breakCondition: "Exponerte a un calor comparable a la lava de un volc&aacute;n y sobrevivir para que la armadura se desprenda."
  },
  "rumpelstiltskin": {
    effect: "Una vez al d&iacute;a puedes transformar paja en oro equivalente a 5 Monedas de Oro. A cambio, gastas 1 de Cordura y lo conviertes en Corrupci&oacute;n.",
    penalty: "Un duendecillo te pedir&aacute; algo a cambio. El Narrador tira 1d6: un recuerdo de infancia, tu nombre verdadero, el aliento de tu primer amor, tu capacidad de mentir, tu mayor talento o el primer hijo que tengas. El pago puede repetirse al crear oro.",
    breakCondition: "Adivinar el nombre verdadero del ente m&aacute;gico. Al hacerlo recuperas o eliminas un Rasgo de tu elecci&oacute;n."
  }
};

const curseSelect = document.querySelector("#curse");
const curseFields = {
  effect: document.querySelector("#curse-benefit"),
  penalty: document.querySelector("#curse-penalty"),
  breakCondition: document.querySelector("#curse-condition")
};

function fillCurse() {
  const curse = curses[curseSelect.value];
  curseFields.effect.value = curse ? decodeHtml(curse.effect) : "";
  curseFields.penalty.value = curse ? decodeHtml(curse.penalty) : "";
  curseFields.breakCondition.value = curse ? decodeHtml(curse.breakCondition) : "";
}

curseSelect.addEventListener("change", fillCurse);
