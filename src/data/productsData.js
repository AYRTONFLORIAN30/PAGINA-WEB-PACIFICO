import agrocalMix from "../assets/Agrocal mix.webp";
import dolomita from "../assets/Dolomita.webp";
import superMagnoCal from "../assets/Magno cal mix.webp";
import agroYeso from "../assets/Agro - yeso.webp";
import carboCal from "../assets/Carbo cal.webp";

import rocaFosforica from "../assets/Roca fosforica.webp";
import sulfatoCalcio from "../assets/Sulfato de calcio.webp";
import ulex30 from "../assets/Ulex.webp";

import gallinaza from "../assets/Gallinaza.webp";
import abonazaPapero from "../assets/Abonaza papero.webp";
import nutriAbonaza from "../assets/Abonaza.webp";
import humusLombriz from "../assets/Humus de lombriz.webp";

export const productsData = [
  {
    id: "agrocal-mix",
    nombre: "Agrocal-mix",
    categoria: "Enmiendas Agrícolas Cálcicas",
    img: agrocalMix,
    descripcion: "Mezcla balanceada para corrección de suelos ácidos.",
    beneficios: ["Mejora el pH del suelo", "Aporta Calcio y Magnesio", "Mejora la estructura del suelo"],
    fichaTecnica: "Calcio: 30%, Magnesio: 10%, Granulometría fina."
  },
  {
    id: "dolomita",
    nombre: "Dolomita",
    categoria: "Enmiendas Agrícolas Cálcicas",
    img: dolomita,
    descripcion: "Carbonato doble de calcio y magnesio ideal para suelos deficientes.",
    beneficios: ["Neutraliza la acidez", "Aporte lento y constante", "Económico y eficiente"],
    fichaTecnica: "CaCO3 + MgCO3."
  },
  {
    id: "super-magno-cal-mix",
    nombre: "Super magno-cal mix",
    categoria: "Enmiendas Agrícolas Cálcicas",
    img: superMagnoCal,
    descripcion: "Potente corrector de suelos con alta concentración de magnesio.",
    beneficios: ["Corrección rápida", "Ideal para cultivos de alta demanda", "Fácil aplicación"],
    fichaTecnica: "Alta concentración de Mg."
  },
  {
    id: "agro-yeso",
    nombre: "Agro yeso",
    categoria: "Enmiendas Agrícolas Cálcicas",
    img: agroYeso,
    descripcion: "Sulfato de calcio dihidratado, excelente para suelos sódicos.",
    beneficios: ["Desplaza el sodio", "Aporta Azufre", "Mejora la infiltración de agua"],
    fichaTecnica: "CaSO4·2H2O."
  },
  {
    id: "carbo-cal",
    nombre: "Carbo-cal",
    categoria: "Enmiendas Agrícolas Cálcicas",
    img: carboCal,
    descripcion: "Carbonato de calcio de alta pureza.",
    beneficios: ["Fuente concentrada de Calcio", "Regulador de pH", "Mejora disponibilidad de nutrientes"],
    fichaTecnica: "CaCO3 90%."
  },

  {
    id: "roca-fosforica-bayovar",
    nombre: "Roca fosforica bayovar",
    categoria: "Abonos Naturales",
    img: rocaFosforica,
    descripcion: "Fuente natural de fósforo de liberación lenta.",
    beneficios: ["Fósforo reactivo", "Efecto residual prolongado", "Ecológico"],
    fichaTecnica: "P2O5: 22-28%."
  },
  {
    id: "sulfato-de-calcio",
    nombre: "Sulfato de calcio",
    categoria: "Abonos Naturales",
    img: sulfatoCalcio,
    descripcion: "Fuente directa de Azufre y Calcio para la planta.",
    beneficios: ["Nutrición directa", "No altera el pH significativamente", "Mejora calidad de fruto"],
    fichaTecnica: "Ca + S."
  },
  {
    id: "ulex-30",
    nombre: "Ulex-30",
    categoria: "Abonos Naturales",
    img: ulex30,
    descripcion: "Borato de sodio y calcio natural.",
    beneficios: ["Fuente de Boro", "Esencial para floración", "Origen mineral"],
    fichaTecnica: "Boro 10% aprox."
  },

  {
    id: "gallinaza",
    nombre: "Gallinaza",
    categoria: "Abonos Orgánicos",
    img: gallinaza,
    descripcion: "Abono orgánico rico en nitrógeno procedente de aves.",
    beneficios: ["Alto contenido de N-P-K", "Activa vida microbiana", "Compostado"],
    fichaTecnica: "Materia Orgánica 40%."
  },
  {
    id: "abonaza-papero",
    nombre: "Abonaza papero",
    categoria: "Abonos Orgánicos",
    img: abonazaPapero,
    descripcion: "Formulación especial para el cultivo de papa.",
    beneficios: ["Balanceado para tubérculos", "Mejora peso y calibre", "Suelo más suelto"],
    fichaTecnica: "Mezcla orgánica especializada."
  },
  {
    id: "nutri-abonaza",
    nombre: "Nutri-Abonaza",
    categoria: "Abonos Orgánicos",
    img: nutriAbonaza,
    descripcion: "Abono orgánico enriquecido y balanceado.",
    beneficios: ["Nutrición integral", "Mejora retención de humedad", "Sostenible"],
    fichaTecnica: "Materia Orgánica enriquecida."
  },
  {
    id: "humus-de-lombriz",
    nombre: "Humus de lombriz",
    categoria: "Abonos Orgánicos",
    img: humusLombriz,
    descripcion: "El mejor abono orgánico, estable y rico en ácidos húmicos.",
    beneficios: ["100% asimilable", "No quema las plantas", "Regenerador de suelos"],
    fichaTecnica: "Humus 100% puro."
  },

  {
    id: "hidrocal",
    nombre: "Hidrocal",
    categoria: "Productos para tratamiento de agua potable",
    img: agrocalMix, 
    descripcion: "Especializado para el tratamiento de Residuos Sanitarios.",
    beneficios: ["Alta pureza", "Control de contaminantes", "Eficiencia en tratamiento"],
    fichaTecnica: "Tratamiento de aguas residuales."
  },
  {
    id: "hidrosil",
    nombre: "Hidrosil",
    categoria: "Productos para tratamiento de agua potable",
    img: agrocalMix, 
    descripcion: "Medio filtrador de residuos sanitarios de alto rendimiento.",
    beneficios: ["Filtración avanzada", "Remoción de partículas", "Seguro y confiable"],
    fichaTecnica: "Medio filtrante silíceo."
  },

  // --- 5. Hidróxidos de Calcio (NUEVO) ---
  {
    id: "cal-bordalesa",
    nombre: "Cal bordalesa",
    categoria: "Hidróxidos de Calcio",
    img: agrocalMix, // FOTO TEMPORAL
    descripcion: "Proporción de cal de minerales de uso agrícola.",
    beneficios: ["Control de hongos", "Corrector de pH", "Uso agrícola versátil"],
    fichaTecnica: "Caldo bordelés base."
  },
  {
    id: "fill-cal",
    nombre: "Fill cal",
    categoria: "Hidróxidos de Calcio",
    img: agrocalMix, // FOTO TEMPORAL
    descripcion: "Especial para la restauración de restos arqueológicos.",
    beneficios: ["Compatible con materiales antiguos", "Baja reactividad nociva", "Acabado natural"],
    fichaTecnica: "Restauración y conservación."
  },
  {
    id: "bio-cal",
    nombre: "Bio cal",
    categoria: "Hidróxidos de Calcio",
    img: agrocalMix, // FOTO TEMPORAL
    descripcion: "Cal diseñada para el tratamiento de residuos sólidos.",
    beneficios: ["Estabilización de lodos", "Control de olores", "Desinfección"],
    fichaTecnica: "Tratamiento ambiental."
  },
  {
    id: "cal-nieve",
    nombre: "Cal Nieve",
    categoria: "Hidróxidos de Calcio",
    img: agrocalMix, // FOTO TEMPORAL
    descripcion: "Cal de alta blancura para varios usos industriales y decorativos.",
    beneficios: ["Alta pureza", "Color blanco intenso", "Multiusos"],
    fichaTecnica: "Hidróxido de calcio de alta blancura."
  }
];