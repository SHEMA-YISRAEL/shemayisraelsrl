export interface BusinessUnit {
  id: string;
  slug: string;
  name: { es: string; en: string };
  subtitle: { es: string; en: string };
  description: { es: string; en: string };
  differentiator: { es: string; en: string };
  colorKey: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    light: string;
  };
  iconRoute: string;
  iconSize?: number;
}

export const units: BusinessUnit[] = [
  {
    id: "yeshua",
    slug: "yeshua",
    name: { es: "Yeshua", en: "Yeshua" },
    subtitle: {
      es: "Centro Médico Integral",
      en: "Comprehensive Medical Center",
    },
    description: {
      es: "Centro Médico Yeshua es un centro médico integral conformado por profesionales altamente calificados, especializados en diversas áreas de la salud. Contamos con médicos generales, especialistas, psicólogos, enfermeros y cirujanos, respaldados por tecnología de vanguardia y un profundo compromiso con el bienestar de nuestros pacientes.",
      en: "Yeshua Medical Center is a comprehensive medical center formed by highly qualified professionals, specialized in various areas of health. We have general practitioners, specialists, psychologists, nurses and surgeons, supported by cutting-edge technology and a deep commitment to the well-being of our patients.",
    },
    differentiator: {
      es: "Nuestro valor diferenciador radica en la atención personalizada y cercana, combinando la excelencia médica con un enfoque humano. Brindamos soluciones de salud a medida, integrando especialidades y tecnología para ofrecer diagnósticos precisos y tratamientos efectivos.",
      en: "Our differentiating value lies in personalized and close attention, combining medical excellence with a human approach. We provide tailored health solutions, integrating specialties and technology for precise diagnoses and effective treatments.",
    },
    colorKey: "yeshua",
    colors: {
      primary: "#024063",
      secondary: "#355d87",
      accent: "#e0e3e4",
      light: "#e6f4fa",
    },
    iconRoute: "/yeshua/icono.svg",
    iconSize: 10,
  },
  {
    id: "neshima",
    slug: "neshima",
    name: { es: "Neshima", en: "Neshima" },
    subtitle: { es: "Clínica Estética", en: "Aesthetic Clinic" },
    description: {
      es: "Neshima es un centro estético exclusivo donde profesionales altamente capacitados emplean tecnología de última generación para ofrecer tratamientos personalizados que resaltan la belleza natural de cada persona. Nuestra filosofía se basa en la armonía entre la ciencia y el arte, combinando tratamientos faciales, corporales y capilares con un enfoque integral y transformador.",
      en: "Neshima is an exclusive aesthetic center where highly trained professionals use state-of-the-art technology to offer personalized treatments that highlight the natural beauty of each person. Our philosophy is based on the harmony between science and art, combining facial, body and hair treatments with a comprehensive and transformative approach.",
    },
    differentiator: {
      es: "La combinación perfecta entre técnicas avanzadas y un trato cercano, con planes personalizados diseñados para cada persona, en un ambiente de confianza donde cada visita se convierte en una experiencia única de bienestar.",
      en: "The perfect combination of advanced techniques and personalized care, with customized plans designed for each person, in an environment of trust where every visit becomes a unique wellness experience.",
    },
    colorKey: "neshima",
    colors: {
      primary: "#c2a88f",
      secondary: "#4b3a3b",
      accent: "#b3704a",
      light: "#f3e4d2",
    },
    iconRoute: "/neshima/icono.svg",
    iconSize: 4,
  },
  {
    id: "yeshiva",
    slug: "yeshiva",
    name: { es: "Yeshiva", en: "Yeshiva" },
    subtitle: { es: "Instituto Técnico", en: "Technical Institute" },
    description: {
      es: "El Instituto Técnico Yeshiva es una institución educativa especializada en la formación profesional aplicada en las áreas de salud, tecnología, educación, estética, industria y comercio. Nuestros programas están diseñados para desarrollar competencias específicas de alto nivel, formando profesionales con habilidades prácticas y conocimientos actualizados para generar sus propios emprendimientos o integrarse como personal calificado para generar su propio oficio.",
      en: "The Yeshiva Technical Institute is an educational institution specialized in applied professional training in the areas of health, technology, education, aesthetics, industry and commerce. Our programs are designed to develop high-level specific competencies, training professionals with practical skills and updated knowledge.",
    },
    differentiator: {
      es: "Transformamos carreras en oportunidades reales, conectando la educación con el mundo laboral a través de programas diseñados por y para profesionales del sector.",
      en: "We transform careers into real opportunities, connecting education with the working world through programs designed by and for sector professionals.",
    },
    colorKey: "yeshiva",
    colors: {
      primary: "#eeb90a",
      secondary: "#1b3863",
      accent: "#c77f32",
      light: "#fef9ee",
    },
    iconRoute: "/yeshiva/icono.svg",
    iconSize: 4,
  },
  {
    id: "netiv",
    slug: "netiv",
    name: { es: "Netiv Global", en: "Netiv Global" },
    subtitle: { es: "Negocios Internacionales", en: "International Business" },
    description: {
      es: "Nuestra unidad de representación comercial está diseñada para acompañar a empresas en su proceso de expansión, importación y exportación. Somos el puente entre fabricantes, distribuidores y operadores que buscan ingresar a nuevos mercados. Por ello, ofrecemos una solución integral que incluye análisis de mercado, gestión logística, cumplimiento regulatorio, y desarrollo de canales de distribución y representación institucional sobre actores clave del hemisferio.",
      en: "Our commercial representation unit is designed to accompany companies in their expansion, import and export process. We are the bridge between manufacturers, distributors and operators seeking to enter new markets, offering comprehensive solutions including market analysis, logistics management, regulatory compliance, and distribution channel development.",
    },
    differentiator: {
      es: "Conectamos mercados globales con oportunidades locales, ofreciendo representación comercial estratégica que integra análisis de mercado, logística y desarrollo de canales de distribución.",
      en: "We connect global markets with local opportunities, offering strategic commercial representation that integrates market analysis, logistics and distribution channel development.",
    },
    colorKey: "netiv",
    colors: {
      primary: "#1e4b69",
      secondary: "#1b262c",
      accent: "#2d78aa",
      light: "#d5eaf8",
    },
    iconRoute: "/netiv/icono.svg",
    iconSize: 6,
  },
  {
    id: "soluciones-tecnologicas",
    slug: "soluciones-tecnologicas",
    name: { es: "Soluciones Tecnológicas", en: "Technology Solutions" },
    subtitle: {
      es: "Desarrollo de Software Aplicado",
      en: "Applied Software Development",
    },
    description: {
      es: "Actualmente nos encontramos en fase de ejecución de esta nueva unidad productiva dentro de Shema Yisrael S.R.L., dedicada al desarrollo de software y soluciones tecnológicas a medida, enfocada en la creación de herramientas digitales que respondan a las necesidades y problemáticas de la vida cotidiana el comercio integrado a modelos de inteligencia artificial.",
      en: "We are currently in the execution phase of this new productive unit within Shema Yisrael S.R.L., dedicated to software development and custom technology solutions, focused on creating digital tools that respond to the needs of everyday life and commerce integrated with artificial intelligence models.",
    },
    differentiator: {
      es: "Desarrollamos soluciones tecnológicas a medida que integran inteligencia artificial para resolver problemáticas reales del comercio y la vida cotidiana.",
      en: "We develop custom technology solutions that integrate artificial intelligence to solve real problems in commerce and everyday life.",
    },
    colorKey: "soltech",
    colors: {
      primary: "#031a6b",
      secondary: "#033860",
      accent: "#05b2dc",
      light: "#bbdde9",
    },
    iconRoute: "/solucionesDigitales/icono.svg",
    iconSize: 8,
  },
  {
    id: "planta-procesadora",
    slug: "planta-procesadora",
    name: {
      es: "Planta Procesadora de Alimentos",
      en: "Food Processing Plant",
    },
    subtitle: { es: "Procesamiento de Alimentos", en: "Food Processing" },
    description: {
      es: "En Shema Yisrael S.R.L., estamos ejecutando la puesta en marcha de nuestra planta procesadora de alimentos, dedicada a la producción de harinas de trigo y grits, con estándares internacionales de calidad, inocuidad y trazabilidad. Somos capaz de realizar mezclas y moliendas a la medida, para satisfacer las necesidades personalidades de nuestros clientes.",
      en: "At Shema Yisrael S.R.L., we are launching our food processing plant, dedicated to the production of wheat flour and grits, with international standards of quality, safety and traceability. We are capable of performing custom blends and milling to meet the personalized needs of our clients.",
    },
    differentiator: {
      es: "Nuestras líneas de producción están diseñadas para alcanzar las necesidades del mercado de producción de alimentos ecológicos, que van aportando fuentes de proteína de fácil asimilación y sin restricciones.",
      en: "Our production lines are designed to meet the needs of the ecological food production market, providing easily assimilable protein sources without restrictions.",
    },
    colorKey: "planta",
    colors: {
      primary: "#ade25d",
      secondary: "#3a5743",
      accent: "#fcec52",
      light: "#cfffb3",
    },
    iconRoute: "/plantaProcesadora/icono.svg",
    iconSize: 20,
  },
  {
    id: "investigacion-medica",
    slug: "investigacion-medica",
    name: { es: "Investigación Médica", en: "Medical Research" },
    subtitle: {
      es: "Centro de Investigación Médica",
      en: "Medical Research Center",
    },
    description: {
      es: "Nuestra Unidad de Investigación Médica es el eje académico y científico de la organización. Esta división se dedica a la investigación aplicada en salud, desarrollando estudios clínicos y proyectos de innovación biomédica con estándares rigurosos, actuales y alineados con las corrientes más relevantes de la medicina global.",
      en: "Our Medical Research Unit is the academic and scientific axis of the organization. This division is dedicated to applied health research, developing clinical studies and biomedical innovation projects with rigorous standards, current and aligned with the most relevant trends in global medicine.",
    },
    differentiator: {
      es: "Investigación aplicada que conecta la ciencia con la práctica clínica, generando conocimiento validado que impacta directamente en la calidad de vida de los pacientes.",
      en: "Applied research that connects science with clinical practice, generating validated knowledge that directly impacts the quality of life of patients.",
    },
    colorKey: "invmed",
    colors: {
      primary: "#068d9d",
      secondary: "#53599a",
      accent: "#80ded9",
      light: "#aeecef",
    },
    iconRoute: "/investigacionMedica/icono.svg",
    iconSize: 20,
  },
];

export function getUnit(slug: string): BusinessUnit | undefined {
  return units.find((u) => u.slug === slug);
}
