import agrocalMix from "../assets/Agrocal mix.webp";
import dolomita from "../assets/Dolomita.webp";
import superMagnoCal from "../assets/Magno cal mix.webp";
import agroYeso from "../assets/Agro-yeso.webp";
import carboCal from "../assets/Carbo cal.webp";
import hidrosil from "../assets/Hidrosil.webp";
import rocaFosforica from "../assets/Roca fosforica.webp";
import sulfatoCalcio from "../assets/Sulfato de calcio.webp";
import ulex30 from "../assets/Ulex.webp";

import gallinaza from "../assets/Gallinaza.webp";
import abonazaPapero from "../assets/Abonaza papero.webp";
import nutriAbonaza from "../assets/Abonaza.webp";
import humusLombriz from "../assets/Humus de lombriz.webp";

import hidrocal from "../assets/Hidrocal.webp"; 
import calBordalesa from "../assets/Cal bordalesa.webp"; 
import fillCal from "../assets/Fill cal.webp";    
import bioCal from "../assets/Bio cal.webp";      
import calNieve from "../assets/Cal nieve.webp";  

import pdfAgrocalMix from "../assets/fichas/Agrocal-mix.pdf";
import pdfDolomita from "../assets/fichas/Dolomita.pdf";
import pdfMagnoCal from "../assets/fichas/Magnocal mix.pdf";
import pdfAgroYeso from "../assets/fichas/Agro yeso.pdf";
import pdfRocaFosforica from "../assets/fichas/Roca fosforica.pdf";
import pdfSulfatoCalcio from "../assets/fichas/Sulfato de calcio.pdf";
import pdfAbonazaPapero from "../assets/fichas/Abonaza papero.pdf";
import pdfHumusLombriz from "../assets/fichas/Humus de lombriz.pdf";
import pdfHidroCal from "../assets/fichas/Hidro cal.pdf";
import pdfCalBordalesa from "../assets/fichas/Cal bordalesa.pdf";
import pdfFillCal from "../assets/fichas/Fill cal.pdf";
import pdfBioCal from "../assets/fichas/Bio cal.pdf";
import pdfCalNieve from "../assets/fichas/Cal nieve.pdf";

import pdfCarboCal from "../assets/fichas/Ficha Técnica - CARBO CAL.pdf";
import pdfGallinaza from "../assets/fichas/Ficha Técnica - GALLINAZA ABONO ORGÁNICO.pdf";
import pdfHidrosil from "../assets/fichas/Ficha Técnica - HIDROSIL 2025.pdf";
import pdfNutriAbonaza from "../assets/fichas/Ficha Técnica - NUTRI ABONAZA.pdf";
import pdfUlex30 from "../assets/fichas/Ficha Técnica - ULEX 30.pdf";

import pdfRegistroHidrocal from "../assets/fichas/HIDROCAL REGISTRO SANITARIO.pdf";
import pdfRegistroHidrosil from "../assets/fichas/HIDROSIL REGISTRO SANITARIO.pdf";

export const productsData = [
  {
    id: "agrocal-mix",
    nombre: "Agrocal-mix",
    categoria: "Enmiendas Agrícolas Cálcicas",
    img: agrocalMix,
    descripcion: "Mezcla balanceada para corrección de suelos ácidos.",
    beneficios: ["Mejora el pH del suelo", "Aporta Calcio y Magnesio", "Mejora la estructura del suelo"],
    pdfFile: pdfAgrocalMix, 
    fichaTecnica: "Calcio: 30%, Magnesio: 10%, Granulometría fina.",
    composicion: [
      { elemento: "Ca(OH)2", porcentaje: "35 - 40%" },
      { elemento: "CaCO3", porcentaje: "1 - 5%" },
      { elemento: "CaMg(CO3)2", porcentaje: "15 - 20%" },
      { elemento: "SiO2", porcentaje: "10 - 15%" },
      { elemento: "CaSO4", porcentaje: "15 - 20%" }
    ]
  },
  {
    id: "dolomita",
    nombre: "Dolomita",
    categoria: "Enmiendas Agrícolas Cálcicas",
    img: dolomita,
    descripcion: "Carbonato doble de calcio y magnesio ideal para suelos deficientes.",
    beneficios: ["Neutraliza la acidez", "Aporte lento y constante", "Económico y eficiente"],
    pdfFile: pdfDolomita,
    fichaTecnica: "CaCO3 + MgCO3.",
    composicion: [
      { elemento: "Ca", porcentaje: "21.5%" },
      { elemento: "CaO", porcentaje: "30%" },
      { elemento: "Mg", porcentaje: "12.90%" },
      { elemento: "MgO", porcentaje: "21.54%" }
    ]
  },
  {
    id: "super-magno-cal-mix",
    nombre: "Super magno-cal mix",
    categoria: "Enmiendas Agrícolas Cálcicas",
    img: superMagnoCal,
    descripcion: "Potente corrector de suelos con alta concentración de magnesio.",
    beneficios: ["Corrección rápida", "Ideal para cultivos de alta demanda", "Fácil aplicación"],
    pdfFile: pdfMagnoCal,
    fichaTecnica: "Alta concentración de Mg.",
    composicion: [
      { elemento: "CaO", porcentaje: "22.68%" },
      { elemento: "MgO", porcentaje: "6.76%" },
      { elemento: "S", porcentaje: "8.35%" },
      { elemento: "Mn", porcentaje: "0.02%" }
    ]
  },
  {
    id: "agro-yeso",
    nombre: "Agro - Yeso",
    categoria: "Enmiendas Agrícolas Cálcicas",
    img: agroYeso,
    descripcion: "Sulfato de calcio dihidratado, mejorador de suelos ácidos.",
    beneficios: ["Desplaza el sodio", "Aporta Azufre y Calcio", "Mejora la infiltración de agua"],
    pdfFile: pdfAgroYeso,
    fichaTecnica: "CaSO4 - Análisis garantizado.",
    composicion: [
      { elemento: "CaO", porcentaje: "32%" },
      { elemento: "SO4", porcentaje: "53%" }
    ]
  },
  {
    id: "carbo-cal",
    nombre: "Carbo-cal",
    categoria: "Enmiendas Agrícolas Cálcicas",
    img: carboCal,
    descripcion: "Carbonato de calcio de alta pureza.",
    beneficios: ["Fuente concentrada de Calcio", "Regulador de pH", "Mejora disponibilidad de nutrientes"],
    pdfFile: pdfCarboCal,
    fichaTecnica: "Carbonato de calcio de alta pureza.",
    composicion: [
      { elemento: "CaCO3", porcentaje: "97.80%" },
      { elemento: "CaO", porcentaje: "53.00%" }
    ]
  },

  {
    id: "roca-fosforica-bayovar",
    nombre: "Roca fosforica bayovar",
    categoria: "Abonos Naturales",
    img: rocaFosforica,
    descripcion: "Fuente natural de fósforo de liberación lenta.",
    beneficios: ["Fósforo reactivo", "Efecto residual prolongado", "Ecológico"],
    pdfFile: pdfRocaFosforica,
    fichaTecnica: "P2O5: 22-28%.",
    composicion: [
      { elemento: "P2O5", porcentaje: "18 - 22%" },
      { elemento: "CaO", porcentaje: "30 - 32%" },
      { elemento: "SiO", porcentaje: "4 - 4.5%" }
    ]
  },
  {
    id: "sulfato-de-calcio",
    nombre: "Sulfato de calcio",
    categoria: "Abonos Naturales",
    img: sulfatoCalcio,
    descripcion: "Fuente directa de Azufre y Calcio para la planta.",
    beneficios: ["Nutrición directa", "No altera el pH significativamente", "Mejora calidad de fruto"],
    pdfFile: pdfSulfatoCalcio,
    fichaTecnica: "Ca + S.",
    composicion: [
      { elemento: "Ca", porcentaje: "22.50%" },
      { elemento: "CaO", porcentaje: "31.50%" },
      { elemento: "S", porcentaje: "17.80%" },
      { elemento: "SO4", porcentaje: "53.00%" }
    ]
  },
  {
    id: "ulex-30",
    nombre: "Ulex-30",
    categoria: "Abonos Naturales",
    img: ulex30,
    descripcion: "Borato de sodio y calcio natural.",
    beneficios: ["Fuente de Boro", "Esencial para floración", "Origen mineral"],
    pdfFile: pdfUlex30,
    fichaTecnica: "Borato de sodio y calcio.",
    composicion: [
      { elemento: "B", porcentaje: "9 - 13%" },
      { elemento: "B2O3", porcentaje: "30 - 32%" }
    ]
  },

  {
    id: "gallinaza",
    nombre: "Gallinaza",
    categoria: "Abonos Orgánicos",
    img: gallinaza,
    descripcion: "Abono orgánico rico en nitrógeno procedente de aves.",
    beneficios: ["Alto contenido de N-P-K", "Activa vida microbiana", "Compostado"],
    pdfFile: pdfGallinaza,
    fichaTecnica: "Abono orgánico procesado.",
    composicion: [
      { elemento: "N", porcentaje: "2 - 3%" },
      { elemento: "P2O5", porcentaje: "3 - 4%" },
      { elemento: "K2O", porcentaje: "1 - 2%" },
      { elemento: "CaO", porcentaje: "8 - 10%" },
      { elemento: "S", porcentaje: "1 - 2%" },
      { elemento: "MO", porcentaje: "70 - 75%" }
    ]
  },
  {
    id: "abonaza-papero",
    nombre: "Abonaza papero",
    categoria: "Abonos Orgánicos",
    img: abonazaPapero,
    descripcion: "Formulación especial para el cultivo de papa.",
    beneficios: ["Balanceado para tubérculos", "Mejora peso y calibre", "Suelo más suelto"],
    pdfFile: pdfAbonazaPapero,
    fichaTecnica: "Mezcla orgánica especializada.",
    composicion: [
      { elemento: "N", porcentaje: "2 - 4%" },
      { elemento: "P2O5", porcentaje: "4 - 5%" },
      { elemento: "K2O", porcentaje: "3 - 4%" },
      { elemento: "CaO", porcentaje: "18 - 20%" },
      { elemento: "MgO", porcentaje: "4 - 5%" },
      { elemento: "SO4", porcentaje: "8 - 10%" },
      { elemento: "pH", porcentaje: ">9%" }
    ]
  },
  {
    id: "nutri-abonaza",
    nombre: "Nutri-Abonaza",
    categoria: "Abonos Orgánicos",
    img: nutriAbonaza,
    descripcion: "Abono orgánico enriquecido y balanceado.",
    beneficios: ["Nutrición integral", "Mejora retención de humedad", "Sostenible"],
    pdfFile: pdfNutriAbonaza,
    fichaTecnica: "Abono orgánico compuesto.",
    composicion: [
      { elemento: "N", porcentaje: "1.5 - 2%" },
      { elemento: "P2O5", porcentaje: "4.0 - 4.5%" },
      { elemento: "K2O", porcentaje: "2.8 - 3%" },
      { elemento: "CaO", porcentaje: ">20%" },
      { elemento: "MgO", porcentaje: "4 - 5%" },
      { elemento: "SO4", porcentaje: ">8%" },
      { elemento: "pH", porcentaje: "8.00" }
    ]
  },
  {
    id: "humus-de-lombriz",
    nombre: "Humus de lombriz",
    categoria: "Abonos Orgánicos",
    img: humusLombriz,
    descripcion: "El mejor abono orgánico, estable y rico en ácidos húmicos.",
    beneficios: ["100% asimilable", "No quema las plantas", "Regenerador de suelos"],
    pdfFile: pdfHumusLombriz,
    fichaTecnica: "Humus 100% puro.",
    composicion: [
      { elemento: "N", porcentaje: "1.51%" },
      { elemento: "P2O5", porcentaje: "1.27%" },
      { elemento: "K2O", porcentaje: "1.64%" },
      { elemento: "Ca", porcentaje: "3.8%" },
      { elemento: "Mg", porcentaje: "1.4%" },
      { elemento: "Fe", porcentaje: "580ppm" },
      { elemento: "Mn", porcentaje: "430ppm" },
      { elemento: "Zn", porcentaje: "500ppm" },
      { elemento: "Cu", porcentaje: "63ppm" },
      { elemento: "Acidos Fulvicos", porcentaje: "3.02%" },
      { elemento: "Acidos Humicos", porcentaje: "4.7%" }
    ]
  },

  {
    id: "hidrocal",
    nombre: "Hidrocal",
    categoria: "Productos para tratamiento de agua potable",
    img: hidrocal, 
    descripcion: "Especializado para el tratamiento de Residuos Sanitarios.",
    beneficios: ["Alta pureza", "Control de contaminantes", "Eficiencia en tratamiento"],
    pdfFile: pdfHidroCal,
    pdfRegistro: pdfRegistroHidrocal,
    fichaTecnica: "Tratamiento de aguas residuales."
  },
  {
    id: "hidrosil",
    nombre: "Hidrosil",
    categoria: "Productos para tratamiento de agua potable",
    img: hidrosil, 
    descripcion: "Medio filtrador de residuos sanitarios de alto rendimiento.",
    beneficios: ["Filtración avanzada", "Remoción de partículas", "Seguro y confiable"],
    pdfFile: pdfHidrosil,
    pdfRegistro: pdfRegistroHidrosil,
    fichaTecnica: "Arena Silícea de alta pureza.",
    composicion: [
        { elemento: "SiO2", porcentaje: "≥ 85%" },
        { elemento: "Granulometría", porcentaje: "0.40 - 1.00 mm" }
      ]
  },

  {
    id: "cal-bordalesa",
    nombre: "Cal bordalesa",
    categoria: "Hidróxidos de Calcio",
    img: calBordalesa, 
    descripcion: "Proporción de cal de minerales de uso agrícola.",
    beneficios: ["Control de hongos", "Corrector de pH", "Uso agrícola versátil"],
    pdfFile: pdfCalBordalesa,
    fichaTecnica: "Caldo bordelés base."
  },
  {
    id: "fill-cal",
    nombre: "Fill cal",
    categoria: "Hidróxidos de Calcio",
    img: fillCal, 
    descripcion: "Especial para la restauración de restos arqueológicos.",
    beneficios: ["Compatible con materiales antiguos", "Baja reactividad nociva", "Acabado natural"],
    pdfFile: pdfFillCal,
    fichaTecnica: "Restauración y conservación."
  },
  {
    id: "bio-cal",
    nombre: "Bio cal",
    categoria: "Hidróxidos de Calcio",
    img: bioCal, 
    descripcion: "Cal diseñada para el tratamiento de residuos sólidos.",
    beneficios: ["Estabilización de lodos", "Control de olores", "Desinfección"],
    pdfFile: pdfBioCal,
    fichaTecnica: "Tratamiento ambiental."
  },
  {
    id: "cal-nieve",
    nombre: "Cal Nieve",
    categoria: "Hidróxidos de Calcio",
    img: calNieve, 
    descripcion: "Cal de alta blancura para varios usos industriales y decorativos.",
    beneficios: ["Alta pureza", "Color blanco intenso", "Multiusos"],
    pdfFile: pdfCalNieve,
    fichaTecnica: "Hidróxido de calcio de alta blancura."
  }
];