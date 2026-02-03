export interface Service {
  id: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  icon: string; // SVG path or icon name
  image?: string; // optional image path
  videoId?: string; // optional YouTube video ID
}

export interface ServiceCategory {
  id: string;
  name: { es: string; en: string };
  services: Service[];
}

// YESHUA - Medical Services
export const yeshuaServices: ServiceCategory[] = [
  {
    id: "ginecologia",
    name: { es: "Ginecología y Obstetricia", en: "Gynecology and Obstetrics" },
    services: [
      {
        id: "consulta-ginecologica",
        name: {
          es: "Consultas Ginecológicas",
          en: "Gynecological Consultations",
        },
        description: {
          es: "Evaluación integral de la salud femenina con atención personalizada.",
          en: "Comprehensive evaluation of women's health with personalized care.",
        },
        icon: "medical-heart",
        image: "/yeshua/services/ginecologia.jpg",
      },
      {
        id: "colposcopia",
        name: { es: "Colposcopias", en: "Colposcopies" },
        description: {
          es: "Examen detallado del cuello uterino para detección temprana.",
          en: "Detailed cervical examination for early detection.",
        },
        icon: "microscope",
        image: "/yeshua/services/colposcopia.jpg",
      },
      {
        id: "papanicolaou",
        name: { es: "Papanicolaou", en: "Pap Smear" },
        description: {
          es: "Prueba de detección de células anormales en el cuello uterino.",
          en: "Screening test for abnormal cells in the cervix.",
        },
        icon: "test-tube",
        image: "/yeshua/services/papanicolaou.jpg",
      },
      {
        id: "control-prenatal",
        name: { es: "Controles Prenatales", en: "Prenatal Care" },
        description: {
          es: "Seguimiento completo del embarazo con enfoque preventivo y seguro.",
          en: "Complete pregnancy monitoring with preventive and safe approach.",
        },
        icon: "baby",
        image: "/yeshua/services/prenatal.jpg",
      },
    ],
  },
  {
    id: "fisioterapia",
    name: { es: "Fisioterapia", en: "Physiotherapy" },
    services: [
      {
        id: "fisio-traumatologica",
        name: {
          es: "Fisioterapia Traumatológica",
          en: "Traumatological Physiotherapy",
        },
        description: {
          es: "Rehabilitación de lesiones musculoesqueléticas y postoperatorias.",
          en: "Rehabilitation of musculoskeletal and post-surgical injuries.",
        },
        icon: "bone",
        image: "/yeshua/services/fisio-trauma.jpg",
      },
      {
        id: "fisio-reumatologica",
        name: {
          es: "Fisioterapia Reumatológica",
          en: "Rheumatological Physiotherapy",
        },
        description: {
          es: "Tratamiento especializado para enfermedades reumáticas.",
          en: "Specialized treatment for rheumatic diseases.",
        },
        icon: "joints",
        image: "/yeshua/services/fisio-reuma.jpg",
      },
      {
        id: "fisio-dermatofuncional",
        name: {
          es: "Fisioterapia Dermatofuncional",
          en: "Dermatofunctional Physiotherapy",
        },
        description: {
          es: "Tratamientos para la piel y tejido conectivo.",
          en: "Treatments for skin and connective tissue.",
        },
        icon: "skin",
        image: "/yeshua/services/fisio-dermato.jpg",
      },
      {
        id: "fisio-respiratoria",
        name: {
          es: "Fisioterapia Respiratoria",
          en: "Respiratory Physiotherapy",
        },
        description: {
          es: "Rehabilitación pulmonar y técnicas de respiración.",
          en: "Pulmonary rehabilitation and breathing techniques.",
        },
        icon: "lungs",
        image: "/yeshua/services/fisio-resp.jpg",
      },
      {
        id: "fisio-geriatrica",
        name: { es: "Fisioterapia Geriátrica", en: "Geriatric Physiotherapy" },
        description: {
          es: "Atención especializada para adultos mayores.",
          en: "Specialized care for older adults.",
        },
        icon: "elderly",
        image: "/yeshua/services/fisio-geriatrica.jpg",
      },
      {
        id: "fisio-neurologica",
        name: {
          es: "Fisioterapia Neurológica",
          en: "Neurological Physiotherapy",
        },
        description: {
          es: "Rehabilitación de patologías del sistema nervioso.",
          en: "Rehabilitation of nervous system pathologies.",
        },
        icon: "brain",
        image: "/yeshua/services/fisio-neuro.jpg",
      },
    ],
  },
  {
    id: "psicologia",
    name: { es: "Psicología", en: "Psychology" },
    services: [
      {
        id: "evaluacion-psicologica",
        name: {
          es: "Evaluaciones Psicológicas",
          en: "Psychological Evaluations",
        },
        description: {
          es: "Diagnóstico profesional del estado emocional y cognitivo.",
          en: "Professional diagnosis of emotional and cognitive state.",
        },
        icon: "clipboard-check",
        image: "/yeshua/services/psico-eval.jpg",
      },
      {
        id: "manejo-estres",
        name: { es: "Manejo del Estrés", en: "Stress Management" },
        description: {
          es: "Técnicas y estrategias para el control del estrés.",
          en: "Techniques and strategies for stress control.",
        },
        icon: "peace",
        image: "/yeshua/services/psico-estres.jpg",
      },
      {
        id: "tratamiento-ansiedad",
        name: { es: "Tratamiento de Ansiedad", en: "Anxiety Treatment" },
        description: {
          es: "Atención especializada para trastornos de ansiedad.",
          en: "Specialized care for anxiety disorders.",
        },
        icon: "heart-pulse",
        image: "/yeshua/services/psico-ansiedad.jpg",
      },
      {
        id: "equilibrio-personal",
        name: { es: "Equilibrio Personal", en: "Personal Balance" },
        description: {
          es: "Fortalecimiento del bienestar emocional y mental.",
          en: "Strengthening emotional and mental well-being.",
        },
        icon: "balance",
        image: "/yeshua/services/psico-equilibrio.jpg",
      },
    ],
  },
  {
    id: "imagenologia",
    name: { es: "Imagenología", en: "Imaging" },
    services: [
      {
        id: "ecografia-2d",
        name: { es: "Ecografía 2D", en: "2D Ultrasound" },
        description: {
          es: "Diagnóstico por imágenes bidimensionales de alta calidad.",
          en: "High-quality two-dimensional imaging diagnosis.",
        },
        icon: "scan",
        image: "/yeshua/services/eco-2d.jpg",
      },
      {
        id: "ecografia-3d",
        name: { es: "Ecografía 3D", en: "3D Ultrasound" },
        description: {
          es: "Imágenes tridimensionales para evaluaciones precisas.",
          en: "Three-dimensional images for precise evaluations.",
        },
        icon: "cube-3d",
        image: "/yeshua/services/eco-3d.jpg",
      },
      {
        id: "ecografia-4d",
        name: { es: "Ecografía 4D", en: "4D Ultrasound" },
        description: {
          es: "Imágenes en movimiento en tiempo real para diagnóstico avanzado.",
          en: "Real-time moving images for advanced diagnosis.",
        },
        icon: "video",
        image: "/yeshua/services/eco-4d.jpg",
      },
    ],
  },
];

// NESHIMA - Aesthetic Services
export const neshimaServices: ServiceCategory[] = [
  {
    id: "tratamientos-corporales",
    name: { es: "Tratamientos Corporales", en: "Body Treatments" },
    services: [
      {
        id: "tratamiento-reductor",
        name: { es: "Tratamientos Reductores", en: "Reducing Treatments" },
        description: {
          es: "Procedimientos especializados para reducir medidas y moldear la silueta.",
          en: "Specialized procedures to reduce measurements and shape the silhouette.",
        },
        icon: "body-slim",
        image: "/neshima/services/reductor.jpg",
        videoId: "27_cGRPSY7E",
      },
      {
        id: "tratamiento-reafirmante",
        name: { es: "Tratamientos Reafirmantes", en: "Firming Treatments" },
        description: {
          es: "Técnicas avanzadas para mejorar la firmeza y elasticidad de la piel.",
          en: "Advanced techniques to improve skin firmness and elasticity.",
        },
        icon: "skin-care",
        image: "/neshima/services/reafirmante.jpg",
        videoId: "aj8ollUIvak",
      },
      {
        id: "depilacion-ipl",
        name: { es: "Depilación IPL", en: "IPL Hair Removal" },
        description: {
          es: "Depilación de luz pulsada intensa para resultados duraderos.",
          en: "Intense pulsed light hair removal for lasting results.",
        },
        icon: "light-beam",
        image: "/neshima/services/ipl.jpg",
        videoId: "FdPlUI2rt5Y",
      },
      {
        id: "depilación-ipl-rostro-completo",
        name: {
          es: "Depilación IPL - Rostro Completo",
          en: "IPL Hair Removal - Full Face",
        },
        description: {
          es: "Depilación de luz pulsada intensa para resultados duraderos en todo el rostro.",
          en: "Intense pulsed light hair removal for lasting results on the full face.",
        },
        icon: "light-beam",
        image: "/neshima/services/ipl.jpg",
        videoId: "Hz8F9GBkxMc",
      },
    ],
  },
  {
    id: "tratamientos-faciales",
    name: { es: "Tratamientos Faciales", en: "Facial Treatments" },
    services: [
      {
        id: "limpieza-facial",
        name: { es: "Limpieza Facial Profunda", en: "Deep Facial Cleansing" },
        description: {
          es: "Limpieza profesional que elimina impurezas y revitaliza la piel.",
          en: "Professional cleansing that removes impurities and revitalizes skin.",
        },
        icon: "face-clean",
        image: "/neshima/services/limpieza.jpg",
        videoId: "k3l3n33eRqc",
      },
      {
        id: "limpieza-facial-basica",
        name: { es: "Limpieza Facial Básica", en: "Basic Facial Cleansing" },
        description: {
          es: "Limpieza básica para mantener la piel limpia y saludable.",
          en: "Basic cleansing to keep skin clean and healthy.",
        },
        icon: "light-beam",
        image: "/neshima/services/ipl.jpg",
        videoId: "Bu3uD7eRFBQ",
      },
    ],
  },
];

// YESHIVA - Educational Programs (Careers)
export const yeshivaServices: ServiceCategory[] = [
  {
    id: "carreras",
    name: { es: "Carreras Técnicas", en: "Technical Careers" },
    services: [
      {
        id: "emergencias-salud",
        name: {
          es: "Emergencias y Urgencias en Salud",
          en: "Health Emergencies and Urgencies",
        },
        description: {
          es: "Formamos profesionales capacitados para actuar de manera inmediata y eficaz en atención prehospitalaria, manejo del paciente crítico, soporte vital básico y avanzado, y trabajo en escenarios de alto riesgo, con una sólida formación teórica y práctica.",
          en: "We train professionals capable of acting immediately and effectively in prehospital care, critical patient management, basic and advanced life support, and high-risk scenarios, with solid theoretical and practical training.",
        },
        icon: "ambulance",
        image: "/yeshiva/urgencias.png",
      },
      {
        id: "enfermeria",
        name: { es: "Enfermería", en: "Nursing" },
        description: {
          es: "Formamos profesionales comprometidos con el cuidado integral del paciente. Los estudiantes adquieren competencias en atención básica de salud, procedimientos clínicos, apoyo al equipo médico y promoción de la salud.",
          en: "We train professionals committed to comprehensive patient care. Students acquire competencies in basic health care, clinical procedures, medical team support, and health promotion.",
        },
        icon: "nurse",
        image: "/yeshiva/enfermeria.png",
      },
      {
        id: "laboratorio-clinico",
        name: { es: "Laboratorio Clínico", en: "Clinical Laboratory" },
        description: {
          es: "Formamos técnicos capacitados en la toma, procesamiento y análisis de muestras biológicas para apoyar el diagnóstico médico en hematología, bioquímica, microbiología y control de calidad.",
          en: "We train technicians skilled in collecting, processing and analyzing biological samples to support medical diagnosis in hematology, biochemistry, microbiology and quality control.",
        },
        icon: "microscope-lab",
        image: "/yeshiva/clinicLab.webp",
      },
    ],
  },
];

// Helper functions
export function getServicesByUnit(unitSlug: string): ServiceCategory[] {
  switch (unitSlug) {
    case "yeshua":
      return yeshuaServices;
    case "neshima":
      return neshimaServices;
    case "yeshiva":
      return yeshivaServices;
    default:
      return [];
  }
}
