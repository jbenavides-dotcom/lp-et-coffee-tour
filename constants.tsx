import type {
  NavLink,
  Experience,
  FaqItem,
  Stat,
  TourStep,
  IncludedItem,
  PillarItem,
  DistancePoint,
  ReviewItem,
} from './types';

// Assets — URLs de Cloudinary
const CDN = 'https://res.cloudinary.com/dsylu9a7k/image/upload';

export const ASSETS = {
  HERO_BG:             `${CDN}/f_auto,q_auto,w_1600/lpet/hero-aerial.png`,
  CAFETALES:           `${CDN}/f_auto,q_auto,w_900/lpet/cafetales.png`,
  DEGUSTACION:         `${CDN}/f_auto,q_auto,w_900/lpet/degustacion-cafe.png`,
  PROCESSING:          `${CDN}/f_auto,q_auto,w_900/lpet/processing-station.png`,
  COMIDA:              `${CDN}/f_auto,q_auto,w_900/lpet/comida-farm-to-table.png`,
  BOSQUE:              `${CDN}/f_auto,q_auto,w_900/lpet/caminata-bosque.png`,
  YOGA:                `${CDN}/f_auto,q_auto,w_900/lpet/yoga.png`,
  CABALGATA:           `${CDN}/f_auto,q_auto,w_900/lpet/cabalgata.png`,
  CASCADA:             `${CDN}/f_auto,q_auto,w_900/lpet/cascada.png`,
  HUERTA:              `${CDN}/f_auto,q_auto,w_900/lpet/huerta.png`,
  LOGO:                `${CDN}/w_180,h_180/lpet/logo.png`,
  LOGO_SM:             `${CDN}/w_32,h_32/lpet/logo.png`,
} as const;

// Contacto
export const WHATSAPP_URL =
  'https://wa.me/573189565617?text=Hola%2C%20quiero%20reservar%20el%20Coffee%20Tour%20en%20La%20Palma%20%26%20El%20Tuc%C3%A1n';
export const EMAIL = 'reservations@lapalmayeltucan.com';
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/sdUhnJ25tacUYt77A';

// Navegación
export const NAV_LINKS: NavLink[] = [
  { label: 'El Tour', href: '#tour' },
  { label: 'Incluye', href: '#incluye' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Reservar', href: '#reservar' },
];

// Stats Bar
export const STATS: Stat[] = [
  { value: '1.700', label: 'msnm de altitud', sublabel: 'Microclima único de montaña' },
  { value: '90 min', label: 'Desde Bogotá', sublabel: 'Transporte incluido' },
  { value: '4', label: 'Variedades premium', sublabel: 'Gesha · Sidra · Mokka · Java' },
  { value: '$492K', label: 'COP por persona', sublabel: 'Todo incluido · Impuestos incluidos' },
];

// 6 Pilares — ¿Por qué elegirnos?
export const PILLARS: PillarItem[] = [
  {
    icon: '☕',
    title: 'Cafés de clase mundial',
    description: 'Finca reconocida internacionalmente por sus variedades Gesha, Sidra, Mokka y Java.',
  },
  {
    icon: '🌱',
    title: 'De la tierra a la taza',
    description: 'Recorrido completo por cafetales, planta de procesamiento y laboratorio de catación. Vive el proceso entero.',
  },
  {
    icon: '🔬',
    title: 'Degustación guiada',
    description: 'Catación profesional de 3 variedades de especialidad. Aprende a identificar aromas, cuerpo y notas sensoriales.',
  },
  {
    icon: '🌿',
    title: 'Bosque de niebla',
    description: 'Naturaleza viva a 1.700 msnm. Cafetales rodeados de bosque nativo, aves endémicas y aire puro de montaña.',
  },
  {
    icon: '👥',
    title: 'Grupos pequeños',
    description: 'Experiencia personalizada con guías expertos. Cada visitante recibe atención individual en un entorno exclusivo.',
  },
  {
    icon: '♻️',
    title: 'Agricultura regenerativa',
    description: 'Compostaje, biochar e insumos orgánicos propios. Conoce un modelo de producción que regenera la tierra.',
  },
];

// Tour Steps
export const TOUR_STEPS: TourStep[] = [
  {
    number: '1',
    title: 'Recorrido por el Cafetal',
    description: 'Caminata guiada entre cafetales de especialidad a 1.700 msnm.',
    details: [
      'Conoce variedades Gesha, Sidra, Mokka y Java',
      'Aprende el ciclo de vida del cafeto',
      'Prácticas de agricultura regenerativa',
    ],
  },
  {
    number: '2',
    title: 'Proceso del Café',
    description: 'Visita la planta de procesamiento y el laboratorio.',
    details: [
      'Cosecha manual y selección de cereza',
      'Fermentación y secado artesanal',
      'Cómo cada proceso crea perfiles de sabor únicos',
    ],
  },
  {
    number: '3',
    title: 'Degustación de Especialidad',
    description: 'Catación profesional guiada por expertos.',
    details: [
      'Degustación de 3 cafés de especialidad',
      'Identifica aromas y notas sensoriales',
      'Aprende a preparar café de especialidad en casa',
    ],
  },
];

// 9 Items incluidos
export const INCLUDED_ITEMS: IncludedItem[] = [
  { text: 'Transporte desde Libertario Calle 85 (mín. 2 personas)' },
  { text: 'Bebida de bienvenida' },
  { text: 'Recorrido guiado por cafetales y planta de procesamiento' },
  { text: 'Visita a planta de insumos orgánicos, compostaje y Biochar' },
  { text: 'Visita al laboratorio de catación' },
  { text: 'Degustación de 3 variedades de café de especialidad' },
  { text: 'Almuerzo farm-to-table' },
  { text: 'Tiempo libre en naturaleza' },
  { text: 'Impuestos incluidos' },
];

// Experiencias más allá del café
export const EXPERIENCES: Experience[] = [
  {
    icon: '🌿',
    title: 'Caminata por Bosque de Niebla',
    description: 'Senderos entre bosque nativo, aves endémicas y cascadas a 1.700 msnm. Un ecosistema único en el mundo.',
  },
  {
    icon: '🍽️',
    title: 'Gastronomía Farm-to-Table',
    description: 'Almuerzo artesanal con ingredientes frescos de nuestra huerta orgánica. De la tierra a tu mesa, literalmente.',
  },
  {
    icon: '🧘',
    title: 'Yoga al Amanecer',
    description: 'Sesiones de yoga con vista a las montañas y cafetales. Empieza el día en conexión con la naturaleza.',
  },
  {
    icon: '🐴',
    title: 'Cabalgata por la Finca',
    description: 'Recorre los senderos de la finca a caballo. Una forma única de descubrir los paisajes de Zipacón.',
  },
  {
    icon: '💧',
    title: 'Cascadas y Senderos',
    description: 'Caminatas a cascadas naturales en los alrededores. Refréscate después de la experiencia cafetera.',
  },
  {
    icon: '🌻',
    title: 'Huerta Orgánica',
    description: 'Conoce nuestra huerta de agricultura regenerativa. Ingredientes frescos que nutren el almuerzo del tour.',
  },
];

// Reviews
export const REVIEWS: ReviewItem[] = [
  {
    text: 'Increíble experiencia. Aprendimos todo sobre el café de especialidad, desde la semilla hasta la taza. La degustación de Gesha fue un momento inolvidable.',
    stars: 5,
  },
  {
    text: 'El mejor tour de café que hemos hecho en Colombia. La finca es hermosa, el almuerzo delicioso y los guías realmente apasionados por lo que hacen.',
    stars: 5,
  },
  {
    text: 'Llevé a unos amigos extranjeros y quedaron fascinados. La combinación de café de clase mundial, naturaleza y gastronomía es única.',
    stars: 5,
  },
  {
    text: 'Vale cada peso. El transporte desde Bogotá, el recorrido completo, la degustación y el almuerzo farm-to-table. Una experiencia completa y bien organizada.',
    stars: 5,
  },
];

// Distancia y cómo llegar
export const DISTANCE_POINTS: DistancePoint[] = [
  { icon: '🚐', text: 'Transporte incluido desde Libertario Calle 85' },
  { icon: '⏰', text: 'Salida 7:30 AM, regreso ~5:00 PM' },
  { icon: '📍', text: 'Pickup: Kr 13 #85-13, Chapinero, Bogotá' },
  { icon: '🌤️', text: 'Clima fresco de montaña: 14-24°C' },
];

// FAQ
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Cuánto cuesta el Coffee Tour?',
    answer:
      'El Coffee Tour tiene un valor de $492.000 COP por persona, todo incluido: transporte ida y vuelta desde Bogotá, bebida de bienvenida, recorrido guiado, degustación de 3 cafés de especialidad, almuerzo farm-to-table, tiempo libre e impuestos.',
  },
  {
    question: '¿A qué hora sale el tour y cuánto dura?',
    answer:
      'La salida es todos los días a las 7:30 AM desde Libertario Coffee Roasters (Kr 13 #85-13, Chapinero, Bogotá). El regreso es aproximadamente a las 5:00 PM. Es una experiencia de día completo.',
  },
  {
    question: '¿Qué variedades de café se degustan?',
    answer:
      'En la finca cultivamos 4 variedades premium: Gesha (considerada una de las más exclusivas del mundo, con notas florales y jazmín), Sidra, Mokka y Java. Durante el tour degustas 3 de estas variedades en una catación guiada por expertos.',
  },
  {
    question: '¿Necesito llegar en carro propio?',
    answer:
      'No. El transporte está incluido en el precio. El punto de encuentro es Libertario Coffee Roasters en la Calle 85 (Kr 13 #85-13, Chapinero, Bogotá). Se requiere un mínimo de 2 personas para la salida.',
  },
  {
    question: '¿Qué debo llevar al tour?',
    answer:
      'Recomendamos ropa cómoda, zapatos cerrados (preferiblemente de trekking), protector solar, repelente de insectos y una chaqueta ligera. La finca está a 1.700 msnm y la temperatura varía entre 14-24°C.',
  },
  {
    question: '¿Cómo reservo mi lugar?',
    answer:
      'Escríbenos por WhatsApp al +57 318 956 5617 o al correo reservations@lapalmayeltucan.com. Confirmamos disponibilidad y te enviamos los detalles de pago. Respuesta inmediata.',
  },
];
