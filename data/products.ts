export interface ProductSection {
  title: string
  body: string
  videos?: string[]
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  tagline?: string
  shortDescription: string
  images: string[]
  videos?: string[]
  longDescription?: ProductSection[]
}

export const products: Product[] = [
  {
    id: "1",
    slug: "griv-3-0",
    name: "Fertilizadora de banda Griv 3.0",
    category: "Fertilizadoras",
    tagline: "Única que aplica 1 ó 2 productos simultáneamente",
    shortDescription:
      "Fertilizadora de banda de 3000 kg de capacidad. Única en el mercado que puede aplicar 1 ó 2 productos simultáneamente. Apta para polvos, granulados u orgánicos secos, adaptable a cualquier cultivo.",
    images: ["/images/catalog/griv-3-0/griv3.jpg"],
    longDescription: [
      {
        title: "Características generales",
        body: "Diseñada para realizar aplicaciones precisas con calidad y eficiencia. Presenta un diseño robusto y simple, lo que hace que requiera bajo mantenimiento.\n• Chasis reforzado, fabricado en chapa de acero estampada.\n• Dosificación del producto a través de un dosificador volumétrico.\n• Aplicación a tasa fija ó dosificación variable, controlada por computadora según mapa.\n• Kit de encausadores o enfocadores orientables para aplicaciones focalizadas en banda.\n• Se puede utilizar para siembra de arroz y pasturas.\n• Tolva y todas las partes en contacto directo con el fertilizante, en acero inoxidable.",
      },
      {
        title: "Equipamiento",
        body: "• Capacidad 3.000 kg\n• Dosis de urea granulada desde 50 hasta 1.000 kg/Ha\n• Potencia requerida: 75 - 100 HP. Trocha 1,8 m y 2,1 m\n• Balancín articulado - Cubiertas 14.9 - 24\n• Rodado 12.4 - 36 Row Crop\n• Rodado 13.6 - 38 Row Crop\n• Rodado 500/60 R22.5 Alta Flotación\n• Peso sin carga (varía según rodado): 1860 kg aprox.",
      },
      {
        title: "Características técnicas",
        body: "• Ancho de aplicación uniforme y variable desde 12 hasta 36 m.\n• Única máquina del mercado que puede variar la velocidad de los platos por computadora, garantizando excelente uniformidad en todos los anchos de aplicación.\n• Una vez calibrada, se puede variar la dosis sin modificar la altura de la compuerta trasera.\n• La computadora indica en tiempo real el nivel de producto dentro de la tolva.\n• Sistema de distribución bidisco de 2 ó 4 paletas, según tipo de aplicación.\n• Hidráulica independiente, sin depender de la bomba del tractor.",
      },
      {
        title: "Versiones Griv 3.0",
        body: "Standard mecánica: accionamiento de platos con cardán desde la PTO del tractor y control de dosis por rueda copiadora mecánica.\n\nMix tasa fija: accionamiento de platos con cardán desde la PTO y control de dosis electrohidráulica usando hidráulica del tractor, con control por teléfono móvil vía bluetooth.\n\nMix tasa variable: accionamiento de platos con cardán desde la PTO y control de dosis electrohidráulica usando hidráulica del tractor, con computador Vcom.\n\nHidráulica tasa variable: con central hidráulica independiente para accionamiento de platos a velocidad variable y cinta con control de dosis electrohidráulica con computador Vcom. Banderillero satelital incluido.",
      },
      {
        title: "Versión 2 productos (2P)",
        body: "Permite aplicar en forma simultánea 2 productos en una misma pasada, variando las proporciones en forma independiente según necesidad. La tolva se encuentra dividida en dos compartimientos: uno para polvos/granulados y otro solo para granulados, permitiendo aplicar polvo + granulado ó 2 granulados. El uso de polvos + granulado es ideal para aplicaciones localizadas o hasta 18 metros de ancho de labor.",
      },
      {
        title: "Opcionales",
        body: "• Balanza electrónica\n• Piloto automático\n• Lona enrollable\n• Balancín articulado\n• Kit orgánico\n• Kit de ensayo para calibración\n• Reja interior para filtrado de fertilizante",
      },
      {
        title: "VCOM/FERT",
        body: "Computadora con pantalla táctil de 7 pulgadas con múltiples funciones, garantizando gran precisión de aplicación independiente de la velocidad de desplazamiento del tractor. Logra una dosificación uniforme en el lote y permite realizar aplicaciones a tasa variable con mapas de prescripción. Genera mapas de registro de actividades con tiempos de trabajo, parada, traslado, velocidad, dosis aplicada y otros datos para análisis posterior.",
      },
    ],
  },
  {
    id: "2",
    slug: "griv-4-5",
    name: "Fertilizadora de banda Griv 4.5",
    category: "Fertilizadoras",
    tagline: "4500 LITROS · ÚNICA QUE APLICA 1 ó 2 PRODUCTOS",
    shortDescription:
      "Fertilizadora de banda de 4500 l de capacidad. Única que aplica 1 ó 2 productos. Apta para polvos, granulados u orgánicos secos. Adaptable a cualquier cultivo.",
    images: ["/images/catalog/griv-4-5/griv-4-5.jpg"],
    longDescription: [
      {
        title: "Características generales",
        body: "Diseñada para realizar aplicaciones precisas con calidad y eficiencia. Presenta un diseño robusto y simple, lo que hace que requiera bajo mantenimiento.\n• Chasis reforzado, fabricado en chapa de acero estampada.\n• Dosificación del producto a través de un dosificador volumétrico.\n• Aplicación a tasa fija ó dosificación Variable, controlada por computadora según mapa.\n• Kit de encausadores o enfocadores orientables para aplicaciones focalizadas en banda.\n• Se puede utilizar para siembra de arroz y pasturas.\n• Tolva y todas las partes en contacto directo con el fertilizante, en acero inoxidable.",
      },
      {
        title: "Equipamiento",
        body: "• Capacidad 4.800 kg\n• Dosis de urea granulada desde 50 hasta 1.000 Kg/Ha\n• Potencia requerida: 75 - 100 HP. Trocha 1,8 m y 2,1 m\n• Balancín articulado - Cubiertas 14.9 - 24\n• Rodado 12.4 - 36 Row Crop\n• Rodado 13.6 - 38 Row Crop\n• Rodado 500/60 R22.5 Alta Flotación\n• Peso sin carga (varía según rodado): 1860 kg aprox.",
      },
      {
        title: "Características técnicas",
        body: "• Ancho de aplicación uniforme y variable desde 12 hasta 36 m.\n• Única máquina del mercado que puede variar la velocidad de los platos por computadora, garantizando excelente uniformidad en todos los anchos de aplicación.\n• Una vez calibrada la máquina, se puede variar la dosis sin tener que modificar la altura de la compuerta trasera.\n• La computadora indica en tiempo real el nivel de producto contenido dentro de la tolva.\n• Sistema de distribución bidisco de 2 ó 4 paletas, según tipo de aplicación.\n• Hidráulica independiente, sin tener que depender de la bomba del tractor.",
      },
      {
        title: "Versiones Griv 4.5",
        body: "Standard mecánica\nMecánica dosis fija: accionamiento de platos con cardán desde la PTO del tractor y control de dosis por rueda copiadora mecánica.\n\nMix tasa fija\nAccionamiento de platos con cardán desde la PTO del tractor y control de dosis electrohidráulica usando hidráulica del tractor, con control por teléfono móvil vía bluetooth.\n\nMix tasa variable\nAccionamiento de platos con cardán desde la PTO del tractor y control de dosis electrohidráulica usando hidráulica del tractor, con computador Vcom.\n\nHidráulica tasa variable\nCon central hidráulica independiente para accionamiento de platos a velocidad variable y cinta con control de dosis electrohidráulica con computador Vcom. Banderillero satelital incluido.",
      },
      {
        title: "Versión 2 productos (2P)",
        body: "Permite aplicar en forma simultánea 2 productos en una misma pasada, variando las proporciones en forma independiente de acuerdo a su necesidad. La tolva se encuentra dividida en dos compartimientos, uno para polvos/granulados y el otro solo para granulados, permitiendo aplicar polvo + granulado ó 2 granulados. El uso de polvos + granulado es ideal para aplicaciones localizadas o hasta 18 metros de ancho de labor.",
      },
      {
        title: "Opcionales",
        body: "• Balanza Electrónica\n• Piloto Automático\n• Lona enrollable\n• Balancín articulado\n• Kit orgánico\n• Kit de ensayo para calibración\n• Reja interior para filtrado de fertilizante",
      },
      {
        title: "VCOM/FERT",
        body: "Computadora con pantalla táctil de 7 pulgadas con múltiples funciones garantizando gran precisión de aplicación independiente de la velocidad de desplazamiento del tractor, logrando una dosificación uniforme en el lote. También es posible realizar aplicaciones a tasa variable con mapas de prescripción. Genera mapas de registro de actividades donde detalla tiempos de trabajo, parada, traslado, velocidad, dosis aplicada y otros para su posterior análisis.",
      },
    ],
  },
  {
    id: "3",
    slug: "griv-6-0",
    name: "Fertilizadora de banda Griv 6.0",
    category: "Fertilizadoras",
    tagline: "6000 LITROS · ÚNICA QUE APLICA 1 ó 2 PRODUCTOS",
    shortDescription:
      "Fertilizadora de banda de 6000 l de capacidad. Única que aplica 1 ó 2 productos. Apta para polvos, granulados u orgánicos secos. Adaptable a cualquier cultivo.",
    images: ["/images/catalog/griv-6-0/griv-6-0.jpg"],
    longDescription: [
      {
        title: "Características generales",
        body: "Diseñada para realizar aplicaciones precisas con calidad y eficiencia. Presenta un diseño robusto y simple, lo que hace que requiera bajo mantenimiento.\n• Chasis reforzado, fabricado en chapa de acero estampada.\n• Dosificación del producto a través de un dosificador volumétrico.\n• Aplicación a tasa fija ó dosificación Variable, controlada por computadora según mapa.\n• Kit de encausadores o enfocadores orientables para aplicaciones focalizadas en banda.\n• Se puede utilizar para siembra de arroz y pasturas.\n• Tolva y todas las partes en contacto directo con el fertilizante, en acero inoxidable.",
      },
      {
        title: "Equipamiento",
        body: "• Capacidad 6.000 kg\n• Dosis de urea granulada desde 50 hasta 1.000 Kg/Ha\n• Potencia requerida: 75 - 100 HP Trocha 1.8 mt y 2.1 mts\n• Balancín articulado - Cubiertas 14.9 - 24\n• Rodado 12.4 - 36 - Row Crop\n• Rodado 13.6 - 38 - Row Crop\n• Rodado 500/60 R22.5 - Alta Flotación\n• Peso sin carga (varía según el Rodado): 1860 kg aprox.",
      },
      {
        title: "Características técnicas",
        body: "• Ancho de aplicación uniforme y variable desde 12 hasta 36 m.\n• Única máquina del mercado que puede variar la velocidad de los platos por computadora, garantizando excelente uniformidad en todos los anchos de aplicación.\n• Una vez calibrada la máquina, se puede variar la dosis sin tener que modificar la altura de la compuerta trasera.\n• La computadora indica en tiempo real el nivel de producto contenido dentro de la tolva.\n• Sistema de distribución bidisco de 2 ó 4 paletas, según tipo de aplicación.\n• Hidráulica independiente, sin tener que depender de la bomba del tractor.",
      },
      {
        title: "Versiones Griv 6.0",
        body: "Standard mecánica\nMecánica dosis fija: accionamiento de platos con cardán desde la PTO del tractor y control de dosis por rueda copiadora mecánica.\n\nMix tasa fija\nAccionamiento de platos con cardán desde la PTO del tractor y control de dosis electrohidráulica usando hidráulica del tractor, con control por teléfono móvil vía bluetooth.\n\nMix tasa variable\nAccionamiento de platos con cardán desde la PTO del tractor y control de dosis electrohidráulica usando hidráulica del tractor, con computador Vcom.\n\nHidráulica tasa variable\nCon central hidráulica independiente para accionamiento de platos a velocidad variable y cinta con control de dosis electrohidráulica con computador Vcom. Banderillero satelital incluido.",
      },
      {
        title: "Versión 2 productos (2P)",
        body: "Permite aplicar en forma simultánea 2 productos en una misma pasada, variando las proporciones en forma independiente de acuerdo a su necesidad. La tolva se encuentra dividida en dos compartimientos, uno para polvos/granulados y el otro solo para granulados, permitiendo aplicar polvo + granulado ó 2 granulados. El uso de polvos + granulado es ideal para aplicaciones localizadas o hasta 18 metros de ancho de labor.",
      },
      {
        title: "Opcionales",
        body: "• Balanza Electrónica\n• Piloto Automático\n• Lona enrollable\n• Balancín articulado\n• Kit orgánico\n• Kit de ensayo para calibración\n• Reja interior para filtrado de fertilizante",
      },
      {
        title: "VCOM/FERT",
        body: "Computadora con pantalla táctil de 7 pulgadas con múltiples funciones garantizando gran precisión de aplicación independiente de la velocidad de desplazamiento del tractor, logrando una dosificación uniforme en el lote. También es posible realizar aplicaciones a tasa variable con mapas de prescripción. Genera mapas de registro de actividades donde detalla tiempos de trabajo, parada, traslado, velocidad, dosis aplicada y otros para su posterior análisis.",
      },
    ],
  },
  {
    id: "4",
    slug: "griv-7-0",
    name: "Fertilizadora de banda Griv 7.0",
    category: "Fertilizadoras",
    tagline: "7.000 LITROS · ÚNICA QUE APLICA 1 ó 2 PRODUCTOS",
    shortDescription:
      "Fertilizadora de banda de 7000 l de capacidad. Única que aplica 1 ó 2 productos. Apta para polvos, granulados u orgánicos secos. Adaptable a cualquier cultivo.",
    images: ["/images/catalog/griv-7-0/griv-7-0.jpg"],
    longDescription: [
      {
        title: "Características generales",
        body: "Diseñada para realizar aplicaciones precisas con calidad y eficiencia. Presenta un diseño robusto y simple, lo que hace que requiera bajo mantenimiento.\n• Chasis reforzado, fabricado en chapa de acero estampada.\n• Dosificación del producto a través de banda de caucho con compuerta. Para la dosificación del segundo producto por dosificador volumétrico.\n• Aplicación a tasa fija ó dosificación Variable, controlada por computadora según mapa.\n• Kit de encausadores o enfocadores orientables para aplicaciones focalizadas en banda.\n• Se puede utilizar para siembra de arroz y pasturas.\n• Tolva y todas las partes en contacto directo con el fertilizante, en acero inoxidable.",
      },
      {
        title: "Equipamiento",
        body: "• Capacidad 7.500 kg\n• Dosis de urea granulada desde 50 hasta 1.000 Kg/Ha\n• Potencia requerida: 75 - 100 HP\n• Trocha 1.8 mt y 2.1 mts\n• Balancín articulado - Cubiertas 14.9 - 24\n• Rodado 12.4 - 36 - Row Crop\n• Rodado 13.6 - 38 - Row Crop\n• Rodado 500/60 R22.5 - Alta Flotación\n• Peso sin carga (varía según el Rodado): 2350 kg aprox.",
      },
      {
        title: "Características técnicas",
        body: "• Ancho de aplicación uniforme y variable desde 12 hasta 36 m.\n• Única máquina del mercado que puede variar la velocidad de los platos por computadora, garantizando excelente uniformidad en todos los anchos de aplicación.\n• Una vez calibrada la máquina, se puede variar la dosis sin tener que modificar la altura de la compuerta trasera.\n• La computadora indica en tiempo real el nivel de producto contenido dentro de la tolva.\n• Sistema de distribución bidisco de 2 ó 4 paletas, según tipo de aplicación.\n• Hidráulica independiente, sin tener que depender de la bomba del tractor.",
      },
      {
        title: "Versiones Griv 7.0",
        body: "Standard mecánica\nMecánica dosis fija: accionamiento de platos con cardán desde la PTO del tractor y control de dosis por rueda copiadora mecánica.\n\nMix tasa fija\nAccionamiento de platos con cardán desde la PTO del tractor y control de dosis electrohidráulica usando hidráulica del tractor, con control por teléfono móvil vía bluetooth.\n\nMix tasa variable\nAccionamiento de platos con cardán desde la PTO del tractor y control de dosis electrohidráulica usando hidráulica del tractor, con computador Vcom.\n\nHidráulica tasa variable\nCon central hidráulica independiente para accionamiento de platos a velocidad variable y cinta con control de dosis electrohidráulica con computador Vcom, banderillero satelital incluido.",
      },
      {
        title: "Versión 2 productos (2P)",
        body: "Permite aplicar en forma simultánea 2 productos en una misma pasada, variando las proporciones en forma independiente de acuerdo a su necesidad. La tolva se encuentra dividida en dos compartimientos, uno para polvos/granulados y el otro solo para granulados permitiendo de esa manera aplicar polvo + granulado ó 2 granulados. El uso de polvos + granulado es ideal para aplicaciones localizadas o hasta 18 metros de ancho de labor.",
      },
      {
        title: "Opcionales",
        body: "• Balanza Electrónica\n• Piloto Automático\n• Lona enrollable\n• Balancín orientable\n• Kit orgánico\n• Kit de ensayo para calibración\n• Reja interior para filtrado de fertilizante",
      },
      {
        title: "VCOM/FERT",
        body: "Computadora con pantalla táctil de 7 pulgadas con múltiples funciones garantizando gran precisión de aplicación independiente de la velocidad de desplazamiento del tractor logrando una dosificación uniforme en el lote. También es posible realizar aplicaciones a tasa variable con mapas de prescripción. Genera mapas de registro de actividades donde detalla tiempos de trabajo, parada, traslado, velocidad, dosis aplicada y otros para su posterior análisis.",
      },
    ],
  },
  {
    id: "5",
    slug: "griv-10-0",
    name: "Fertilizadora de banda Griv 10.0",
    category: "Fertilizadoras",
    tagline: "10.000 LITROS · ÚNICA QUE APLICA 1 ó 2 PRODUCTOS",
    shortDescription:
      "Fertilizadora de banda de 10000 l de capacidad. Única que aplica 1 ó 2 productos. Apta para polvos, granulados u orgánicos secos. Adaptable a cualquier cultivo.",
    images: ["/images/catalog/griv-10-0/griv-10-0.jpg"],
    longDescription: [
      {
        title: "Características generales",
        body: "Diseñada para realizar aplicaciones precisas con calidad y eficiencia. Presenta un diseño robusto y simple, lo que hace que requiera bajo mantenimiento.\n• Chasis reforzado, fabricado en chapa de acero estampada.\n• Dosificación del producto a través de banda de caucho con compuerta. Para la dosificación del segundo producto por dosificador volumétrico.\n• Aplicación a tasa fija ó dosificación Variable, controlada por computadora según mapa.\n• Kit de encausadores o enfocadores orientables para aplicaciones focalizadas en banda.\n• Se puede utilizar para siembra de arroz y pasturas.\n• Tolva y todas las partes en contacto directo con el fertilizante, en acero inoxidable.",
      },
      {
        title: "Equipamiento",
        body: "• Capacidad 10.700 kg\n• Dosis de urea granulada desde 50 hasta 1.000 Kg/Ha\n• Potencia requerida: 120 - 140 HP\n• Trocha 1.8 mt y 2.1 mts\n• Rodado 23.1 - 26 - Rombo\n• Rodado 380/90 R 46 - Row Crop\n• Rodado 500/60 R22.5 - Alta Flotación\n• Peso sin carga (varía según el Rodado): 2.525 kg aprox.",
      },
      {
        title: "Características técnicas",
        body: "• Ancho de aplicación uniforme y variable desde 12 hasta 36 m.\n• Única máquina del mercado que puede variar la velocidad de los platos por computadora, garantizando excelente uniformidad en todos los anchos de aplicación.\n• Una vez calibrada la máquina, se puede variar la dosis sin tener que modificar la altura de la compuerta trasera.\n• La computadora indica en tiempo real el nivel de producto contenido dentro de la tolva.\n• Sistema de distribución bidisco de 2 ó 4 paletas, según tipo de aplicación.\n• Hidráulica independiente, sin tener que depender de la bomba del tractor.",
      },
      {
        title: "Versiones Griv 10.0",
        body: "Standard mecánica\nMecánica dosis fija: accionamiento de platos con cardán desde la PTO del tractor y control de dosis por rueda copiadora mecánica.\n\nMix tasa fija\nAccionamiento de platos con cardán desde la PTO del tractor y control de dosis electrohidráulica usando hidráulica del tractor, con control por teléfono móvil vía bluetooth.\n\nMix tasa variable\nAccionamiento de platos con cardán desde la PTO del tractor y control de dosis electrohidráulica usando hidráulica del tractor, con computador Vcom.\n\nHidráulica tasa variable\nCon central hidráulica independiente para accionamiento de platos a velocidad variable y cinta con control de dosis electrohidráulica con computador Vcom, banderillero satelital incluido.",
      },
      {
        title: "Versión 2 productos (2P)",
        body: "Permite aplicar en forma simultánea 2 productos en una misma pasada, variando las proporciones en forma independiente de acuerdo a su necesidad. La tolva se encuentra dividida en dos compartimientos, uno para polvos/granulados y el otro solo para granulados permitiendo de esa manera aplicar polvo + granulado ó 2 granulados. El uso de polvos + granulado es ideal para aplicaciones localizadas o hasta 18 metros de ancho de labor.",
      },
      {
        title: "Opcionales",
        body: "• Balanza Electrónica\n• Piloto Automático\n• Lona enrollable\n• Balancín orientable\n• Kit orgánico\n• Kit de ensayo para calibración\n• Reja interior para filtrado de fertilizante",
      },
      {
        title: "VCOM/FERT",
        body: "Computadora con pantalla táctil de 7 pulgadas con múltiples funciones garantizando gran precisión de aplicación independiente de la velocidad de desplazamiento del tractor logrando una dosificación uniforme en el lote. También es posible realizar aplicaciones a tasa variable con mapas de prescripción. Genera mapas de registro de actividades donde detalla tiempos de trabajo, parada, traslado, velocidad, dosis aplicada y otros para su posterior análisis.",
      },
    ],
  },
  {
    id: "6",
    slug: "guia-virtual-7-0",
    name: "Banderillero - Mapeador - Guía virtual",
    category: "Guiado automático",
    tagline: "SU PRIMER PASO EN AGRICULTURA DE PRECISIÓN",
    shortDescription:
      "Uno de los aspectos más importantes de la agricultura de precisión es garantizar la calidad de las aplicaciones, minimizando sobre-aplicaciones y fallas. Para esto, una herramienta indispensable es un sistema de guiado donde a partir de un GPS de precisión que garantizan su trabajo realizado en forma manual.",
    images: ["/images/catalog/guia-virtual-7-0/guia-virtual-7-0.jpg","/images/catalog/guia-virtual-7-0/guia-virtual-7-0-2.jpg"],
    longDescription: [
      {
        title: "Características",
        body: "El kit Guía 7.0 - LC es una herramienta que permite al operador asegurar el paralelismo entre pasadas en aplicaciones de pulverización o fertilización. Se trata de una guía virtual sencilla y práctica, que proporciona una pista en perspectiva donde el operador consigue corregir la posición de la máquina antes de cometer el error obteniendo una cobertura completa del área tratada. El equipo también realiza mapeo en tiempo real que permite al operador conocer el área aplicada y facilitar el regreso al punto de trabajo al realizar recargas de producto. Las secciones del implemento pueden ser configuradas para que el sistema muestre en pantalla cuales de ellas se encuentran sobre-aplicando producto y que el operador pueda desactivarlas manualmente.",
      },
      {
        title: "Registro de trabajo",
        body: "El sistema de guiado virtual genera mapas georeferenciados que permiten conocer al detalle el trabajo realizado por el operador. Datos como fecha, hora de inicio y fin de la labor, velocidades, hectáreas, elevación del terreno, área tratada y sin aplicar; son almacenados durante la operación. Nuestro software Agromapas permite visualizar y analizar todos estos datos generando reportes y mapas de post-aplicación de todas las variables registradas, facilitando la toma de decisiones.",
      },
      {
        title: "Ventajas del VCOM 7.0",
        body: "• Corte manual por secciones y cabeceras, guía virtual.\n• Guiado en pasadas paralelas, curvas o mixtas.\n• Fácil visualización de áreas sin aplicar.\n• El sistema puede ser instalado en cualquier maquinaria agrícola que desee ser guiada por una ruta virtual.\n• Realiza rápidos reportes de la aplicación para archivar y analizar.\n• Rápida instalación y simple uso.\n• Fácil realineado luego de paradas prolongadas.\n• Varias vistas de las pasadas (2D, 3D, vista satelital).\n• Antena de GPS con precisión submétrica.",
      },
    ],
  },
  {
    id: "7",
    slug: "piloto-automatico-hidraulico",
    name: "Piloto automático hidráulico",
    category: "Guiado automático",
    // tagline: "Compatible con todas nuestras aplicaciones para siembra, fertilización y pulverización",
    shortDescription:
      "Compatible con todas nuestras aplicaciones para siembra, fertilización, pulverización y con todas las opciones de nivel de precisión de acuerdo a los requerimientos del cliente.",
    images: ["/images/catalog/piloto-hidraulico/piloto-hidraulico-1.jpg","/images/catalog/piloto-hidraulico/piloto-hidraulico-2.jpg","/images/catalog/piloto-hidraulico/piloto-hidraulico-3.jpg"],
    longDescription: [
      {
        title: "Características del VCOM como controlador de dirección",
        body: "El sistema está preparado para instalarse en cualquier tipo de maquinaria y puede ser utilizado en todas las operaciones agrícolas. Tractores, pulverizadores autopropulsados y cosechadoras, pueden ser equipados con nuestro controlador hidráulico, que se conecta en paralelo con el sistema de dirección hidráulico original del vehículo.\n\nDurante la operación, el sistema de guiado funciona generando las líneas guía para los modos tradicionales, AB recto, AB curvo y curva libre. Puede pre diseñar líneas de guiado en la oficina para lograr un mejor aprovechamiento del área luego exportarlas al Vcom y posteriormente utilizarlas como sistema de guiado para el piloto automático.",
      },
      {
        title: "Selección correcta de componentes",
        body: "Dentro del sistema se identifican tres partes fundamentales: pantalla, receptor de GPS, y manifold de control. Estos componentes deben elegirse específicamente para cada necesidad. Considerando el cultivo y los resultados deseados usted puede combinarlos para obtener una solución a su medida en cuanto a precio y prestaciones.",
      },
      {
        title: "Registro de trabajo y mapas",
        body: "El sistema de piloto automático genera mapas georeferenciados que permiten conocer al detalle el trabajo realizado por el operador. Datos como fecha, hora de inicio y fin de la labor, dosis aplicada, velocidad, hectáreas, elevación del terreno, área trabajada; son almacenados durante la operación. Nuestro software Agromapas permite visualizar y analizar todos estos datos generando reportes y mapas de post-aplicación de todas las variables registradas, facilitando la toma de decisiones.",
      },
    ],
  },
  {
    id: "8",
    slug: "vcom-fertilizacion-solida",
    name: "VCOM - Fertilización Sólida",
    category: "Guiado automático",
    tagline: "CONTROL PARA GRANULADOS, POLVOS Y ORGÁNICOS",
    shortDescription:
      "Sistema adaptable a cualquier máquina con mecanismo dosificador volumétrico para fertilización sólida. Un controlador electrónico acciona una válvula proporcional que varía la velocidad de giro de un motor hidráulico, logrando infinito rango de variación de dosis.",
    images: ["/images/catalog/vcom-fertilizacion-solida/vcom-fertilizacion-solida.jpg","/images/catalog/vcom-fertilizacion-solida/vcom-fertilizacion-solida-2.jpg","/images/catalog/vcom-fertilizacion-solida/vcom-fertilizacion-solida-3.jpg"],
    longDescription: [
      {
        title: "Sistema de control para fertilización sólida",
        body: "El sistema se adapta a cualquier máquina con mecanismo dosificador volumétrico para fertilización sólida, como esparcidoras de cal, cultivadores, fertilizadoras al voleo y otras. Un controlador electrónico acciona una válvula proporcional que varia la velocidad de giro de un motor hidráulico, consiguiendo infinito rango de variación de dosis dentro de los limites máximos y mínimos de giro del motor. Nuestro controlador es altamente utilizado en culturas como caña de azúcar, granos, café, palma, cítricos, forestal y otros.",
      },
      {
        title: "Características del VCOM como controlador de fertilización",
        body: "El software Fértil puede controlar hasta tres productos de forma independiente, con dosis en tasa fija o variable a través de mapas de recomendación. Como accesorios opcionales pueden utilizarse en conjunto sensores para el monitoreo de caída del fertilizante, sistema de guiado, y piloto automático. Además el software cuenta con la posibilidad de realizar corte automático en las áreas ya aplicadas y en cabeceras interactuando con el sistema de guiado. También se proveen configuraciones especiales para accionamiento de platos desparramadores o cintas transportadoras, compuertas, dosificadores o turbinas neumáticas.",
      },
      {
        title: "Ventajas del VCOM 7.0",
        body: "• Control de aplicación a Tasa Fija o Variable, Guía Virtual, Monitoreo.\n• Controla fácilmente varios dosificadores para semillas, granulados, polvos y líquidos.\n• Computador flexible que permite instalar varios software conjuntamente como control de tasa, guía virtual, monitor, piloto automático (eléctrico o hidráulico).\n• Elimina cajas de mando, embragues y cadenas, reduciendo costos de mantenimiento.\n• Visualización de velocidad, hectáreas trabajadas, nivel de tolvas, producto aplicado (Kg, litros o miles).\n• Opción de GPRS, Wifi y Bluetooth para ampliar a nuestro sistema de Gestión Integral de Campo (GIC).",
      },
      {
        title: "Registro de trabajo",
        body: "El sistema genera mapas georeferenciados que permiten conocer al detalle el trabajo realizado por el operador. Datos como fecha, hora de inicio y fin de la labor, dosis aplicada, velocidad, hectáreas, elevación del terreno, área tratada y sin aplicar; son almacenados durante la operación. Nuestro software Agromapas permite visualizar y analizar todos estos datos generando reportes y mapas de post-aplicación de todas las variables registradas, facilitando la toma de decisiones.",
      },
    ],
  },
  {
    id: "9",
    slug: "vcom-siembra",
    name: "VCOM 7.0 - Siembra",
    category: "Siembra",
    tagline: "LA COMBINACIÓN PERFECTA ENTRE CONTROL, CALIDAD Y EFICIENCIA",
    shortDescription:
      "La VCOM7.0 permite al productor realizar aplicaciones de semillas y fertilizantes a \"Tasa Fija\" o \"Tasa Variable\" con gran precisión y ahorro. El sistema puede ser instalado en una amplia variedad de sembradoras, las cuales requieran el control preciso de uno o más productos en simultáneo.",
    images: ["/images/catalog/vcom-siembra/vcom-siembra.jpg","/images/catalog/vcom-siembra/vcom-siembra-2.jpg","/images/catalog/vcom-siembra/vcom-siembra-3.jpg"],
    longDescription: [
      {
        title: "Características del VCOM como controlador de siembra",
        body: "El software PLANTER puede controlar hasta tres productos de forma independiente, con dosis en tasa fija o variable a través de mapas de recomendación. Como accesorios opcionales pueden utilizarse en conjunto sensores para el monitoreo de líneas de semillas, sistema de guiado y piloto automático, monitoreo de RPM y vacío de turbinas neumáticas. Como característica destacada, el sistema soporta corte automático de secciones por 2 vías diferentes, mediante el uso de embragues eléctricos, y a través de motores hidráulicos conectados a las diferentes secciones o sub chasis de la sembradora. Además se puede monitorear el funcionamiento de hasta 3 turbinas neumáticas, conociendo en todo momento su velocidad de giro y el vacío producido en milibares.",
      },
      {
        title: "Registro de trabajo",
        body: "El sistema de siembra genera mapas georeferenciados que permiten conocer al detalle el trabajo realizado por el operador. Datos como fecha, hora de inicio y fin de la labor, dosis aplicada, velocidad, hectáreas, elevación del terreno, área tratada y sin aplicar; son almacenados durante la operación. Nuestro software Agromapas permite visualizar y analizar todos estos datos generando reportes y mapas de post-aplicación de todas las variables registradas, facilitando la toma de decisiones.",
      },
      {
        title: "Ventajas del VCOM 7.0",
        body: "• Control de aplicación a Tasa Fija o Variable, Guía Virtual, Monitoreo.\n• Controla fácilmente varios dosificadores para semillas, granulados, polvos y líquidos.\n• Computador flexible que permite instalar distintos software conjuntamente dosificación variable, guía virtual, monitoreo, piloto automático (hidráulico o eléctrico).\n• Elimina cajas de mando, embragues y cadenas, reduciendo costos de mantenimiento.\n• Visualización de velocidad, hectáreas trabajadas, nivel de tolvas, producto aplicado (Kg, litros o millas).\n• Opción de GPRS, Wifi y Bluetooth para integrar a nuestro sistema de Gestión Integral de Campo (GIC).",
      },
    ],
  },
  {
    id: "10",
    slug: "vcom-tasa-variable",
    name: "VCOM - Tasa Variable",
    category: "Tasa Variable",
    tagline: "LA COMBINACIÓN PERFECTA ENTRE CONTROL, CALIDAD Y EFICIENCIA",
    shortDescription:
      "Nuestras computadoras Vcom pueden controlar hasta 4 productos a tasa variable en forma simultánea siguiendo un mapa de prescripción. Compatible con todas nuestras aplicaciones de software para siembra, fertilización, y pulverización.",
    images: ["/images/catalog/vcom-tasa-variable/vcom-tasa-variable.jpg","/images/catalog/vcom-tasa-variable/vcom-tasa-variable-2.jpg","/images/catalog/vcom-tasa-variable/vcom-tasa-variable-3.jpg"],
    longDescription: [
      {
        title: "Características del VCOM como controlador de tasa",
        body: "• Disponible para todo tipo de productos sólidos y líquidos a través de nuestros controladores dedicados.\n• Controla hasta 4 productos en forma simultánea con mapas independientes.\n• Actualiza la tasa de aplicación 5 veces por segundo.\n• Infinita variación de dosis posibles en cuadros de 0,1 Ha.\n• Ampliación del rango de aplicación en pulverizadoras usando doble barra.\n• Sencilla importación y exportación de mapas de prescripción y resultados utilizando nuestro software libre Agromapas.\n• Compatibilidad con archivos shape lo que permite intercambiar información con todos los sistemas GIS del mercado.\n• Cambio sencillo a dosis fija para realizar ensayos.",
      },
      {
        title: "Funcionamiento de la tasa variable",
        body: "Los mapas de prescripción pueden generarse utilizando cualquier software GIS o incluso de forma sencilla con Agromapas. Una vez creados son exportados al Vcom a través de una memoria USB, no habiendo límites de número de hectáreas o cantidad de mapas. Al cargar el mapa de prescripción en el Vcom este muestra una imagen del mismo, y un punto de ubicación de la máquina dentro de él.\n\nSi la máquina controla más de un producto, puede trabajarse con solo uno a tasa variable y los demás a tasa fija, esto es muy usado variando solamente el fertilizante por ejemplo en sembradoras de granos.\n\nDurante el trabajo, un botón permite seleccionar trabajar con la dosis del mapa o con dosis fija. Los datos de operación y las dosis aplicadas son guardados en el registro de la memoria USB para su posterior análisis.",
      },
      {
        title: "Ventajas del VCOM 7.0",
        body: "• Control de aplicación a Tasa Fija o Variable, Guía Virtual, Monitoreo.\n• Controla fácilmente varios dosificadores para semillas, granulados, polvos y líquidos.\n• Computador flexible que permite instalar varios software conjuntamente como control de tasa, guía virtual, monitor, piloto automático (eléctrico o hidráulico).\n• Elimina cajas de mando, embragues y cadenas, reduciendo costos de mantenimiento.\n• Visualización de velocidad, hectáreas trabajadas, nivel de tolvas, producto aplicado (Kg, litros o miles).\n• Opción de GPRS, Wifi y Bluetooth para ampliar a nuestro sistema de Gestión Integral de Campo (GIC).",
      },
      {
        title: "Registro del trabajo",
        body: "El sistema de aplicación variable genera mapas georeferenciados que permiten conocer al detalle el trabajo realizado por el operador. Datos como fecha, hora de inicio y fin de la labor, dosis programada y aplicada, velocidad, hectáreas, elevación del terreno, área trabajada; son almacenados durante la operación. Nuestro software Agromapas permite visualizar y analizar todos estos datos generando reportes y mapas de post-aplicación de todas las variables registradas, facilitando la toma de decisiones.",
      },
    ],
  },
  {
    id: "11",
    slug: "chcnav-nx612",
    name: "CHCNAV NX612",
    category: "Guiado automático",
    tagline: "Sistema de dirección automática de alta precisión",
    shortDescription:
      "El sistema de dirección automatizado NX612 de CHCNAV ofrece un rendimiento fiable en diversos paisajes agrícolas. Conectado a redes GNSS RTK y al servicio de corrección satelital SkyTrix, logra una precisión de ±2,5 cm incluso en áreas remotas sin cobertura de red.",
    images: ["/images/catalog/chcnav-nx612/CHCNAV%20NX612.jpg"],
    videos: ["/images/catalog/chcnav-nx612/NX612.mp4"],
    longDescription: [
      {
        title: "Descripción general",
        body: "El sistema de dirección automatizado NX612 de CHCNAV ofrece un rendimiento fiable en diversos paisajes agrícolas. Se conecta sin problemas a las redes GNSS RTK y a los servicios de corrección satelital SkyTrix de CHCNAV, todo ello con una precisión de ±2,5 cm incluso en áreas remotas sin cobertura de red, lo que lo hace adecuado para la agricultura de precisión en cualquier lugar. El motor compacto de rueda motriz del sistema ahorra espacio en la cabina y ofrece una mayor comodidad al operador. Su pantalla HD de 12 pulgadas de calidad industrial con iconos grandes, vistas 3D y una interfaz fácil de usar hacen que el funcionamiento sea sencillo y eficaz.",
              
      },
      {
        title: "Características principales",
        body: "• Varios modos GNSS y PPP: SPP, DGPS, RTK, E-PPP, H-PPP y SkyTrix.\n• Rendimiento excepcional: precisión superior a velocidades de 0,1 a 30 km/h.\n• Varios patrones de guía: permite adaptarse a diversos paisajes agrícolas.\n• Muy versátil: incluye funciones para responder a las diferentes necesidades del usuario.",
      },
      {
        title: "Ventajas y rendimientos",
        body: "• Posicionamiento GNSS RTK y SkyTrix: precisión de ±2,5 cm incluso en áreas sin acceso a la red.\n• Compatible con ISOBUS.\n• Giro en U inteligente.\n• Gestión agrícola en línea.\n• Guía de accesorios avanzada.\n• Vista panorámica de control.",
      },
      {
        title: "Especificaciones técnicas",
        body: "Posicionamiento:\n• GNSS: GNSS completo + SkyTrix\n• Precisión máx.: ≤ 2,5 cm\n\nComponentes:\n• Pantalla: 12,1\", Android\n• Control de guía: Integrado\n• Control de dirección: Eléctrico\n• Cámara: 1~4 canales de entrada\n\nConectividad:\n• Inalámbrico: Wi-Fi, Bluetooth\n• Móvil: 4G LTE\n• Módem: 410-470 MHz, Rx\n• Puertos: CAN, RS232",
      },
      {
        title: "Casos de uso",
        body: "• Siembra de precisión.\n• Cultivo de fajas.\n• Pulverización de cultivos.\n• Optimización de la cosecha.",
      },
    ],
  },
  {
    id: "12",
    slug: "chcnav-nx610",
    name: "CHCNAV NX610",
    category: "Guiado automático",
    tagline: "Sistema de dirección automática para zonas sin red",
    shortDescription:
      "El sistema de dirección automatizado NX610 de CHCNAV ofrece un rendimiento fiable en diversos paisajes agrícolas. Conectado a redes GNSS RTK y al servicio PointSky de CHCNAV, logra una precisión de ±2,5 cm incluso en áreas remotas sin cobertura de red.",
    images: ["/images/catalog/chcnav-nx610/chcnav-nx610.jpg"],
    videos: ["/images/catalog/chcnav-nx610/caracteristicas-videos/nx610-1.mp4","/images/catalog/chcnav-nx610/caracteristicas-videos/nx610-5.mp4","/images/catalog/chcnav-nx610/caracteristicas-videos/nx610-3.mp4","/images/catalog/chcnav-nx610/caracteristicas-videos/nx610-4.mp4"],
    longDescription: [
      {
        title: "Descripción general",
        body: "El sistema de dirección automatizado NX610 de CHCNAV ofrece un rendimiento fiable en diversos paisajes agrícolas. Se conecta sin problemas a las redes GNSS RTK y a los servicios PointSky de CHCNAV, lo que garantiza una precisión de ±2,5 cm incluso en áreas sin cobertura de red. Su motor compacto de rueda motriz ahorra espacio en la cabina, y su pantalla HD de 10 pulgadas con vistas 3D y una interfaz fácil de usar hace que el funcionamiento sea más fácil que nunca.",
      },
      {
        title: "Características principales",
        body: "• Varios modos GNSS y PPP: SPP, DGPS, RTK, E-PPP, H-PPP y PointSky.\n• Rendimiento excepcional: precisión superior a velocidades de 0,1 a 30 km/h.\n• Varios patrones de guía: permite adaptarse a diversos paisajes agrícolas.\n• Muy versátil: incluye funciones para responder a las diferentes necesidades del usuario.",
      },
      {
        title: "Ventajas y rendimientos",
        body: "• Posicionamiento GNSS RTK y PointSky: precisión de ±2,5 cm incluso en áreas sin acceso a la red.\n• Compatible con ISOBUS.\n• Giro en U inteligente.\n• Gestión integrada de granjas.\n• Guiado avanzado de implementos.\n• Vista panorámica de control.",
      },
      {
        title: "Especificaciones técnicas",
        body: "Posicionamiento:\n• GNSS: GNSS completo + PointSky\n• Precisión máx.: ±2,5 cm\n\nComponentes:\n• Pantalla: 10,1\", Android\n• Control de guía: Integrado\n• Control de dirección: Eléctrico\n• Cámara: 1~4 canales de entrada\n\nConectividad:\n• Inalámbrico: Wi-Fi, Bluetooth\n• Móvil: 4G LTE\n• Módem: 410-470 MHz, Rx\n• Puertos: CAN, RS232",
      },
      {
        title: "Casos de uso",
        body: "• Esparcimiento de fertilizante.\n• Arado y aporcado.\n• Siembra de precisión.\n• Pulverización de cultivos.",
      },
    ],
  },
  {
    id: "13",
    slug: "chcnav-nx510-se",
    name: "CHCNAV NX510 SE",
    category: "Guiado automático",
    tagline: "Sistema de dirección automatizado integrado para tractores",
    shortDescription:
      "El NX510 SE ofrece una solución de reacondicionamiento asequible, compacta y completa para una amplia gama de vehículos agrícolas. Diseñado para aumentar la productividad en todas las condiciones de visibilidad, con precisión entre pasadas de hasta 2,5 cm.",
    images: ["/images/catalog/chcnav-nx510-se/chcnav-nx510-se.jpg","/images/catalog/chcnav-nx510-se/chcnav-nx510-se-1.jpg","/images/catalog/chcnav-nx510-se/chcnav-nx510-se-2.jpg","/images/catalog/chcnav-nx510-se/chcnav-nx510-se-3.jpg"],
    longDescription: [
      {
        title: "Descripción general",
        body: "El NX510 SE ofrece una solución de reacondicionamiento asequible, compacta y completa para una amplia gama de vehículos agrícolas. Diseñado para aumentar significativamente la productividad, funciona de manera eficiente en todas las condiciones de visibilidad y minimiza la fatiga del operador. Con un controlador de guía que admite constelaciones GNSS completas, ofrece una precisión mejorada y una fiabilidad de navegación óptima, para lograr una precisión entre pasadas de hasta 2,5 cm.",
      },
      {
        title: "Características principales",
        body: "• Compensación del terreno: precisión de dirección de 2,5 cm incluso en terrenos difíciles.\n• Conectividad integrada: H-PPP, módem 4G, radio UHF, WiFi y Bluetooth.\n• Amplia compatibilidad: compatible con la mayoría de marcas y fabricantes de vehículos.\n• Versátil: alta fiabilidad para todas sus operaciones agrícolas.",
      },
      {
        title: "Beneficios y rendimientos",
        body: "• Precisión asequible: acceda a una dirección automatizada de alta precisión a un precio accesible, con importantes ganancias de productividad y ahorros de costes.\n• Dirección de alta precisión: precisión entre pasadas de hasta 2,5 cm.\n• Instalación rápida y sencilla.\n• Interfaz de control intuitiva.\n• Conectividad mejorada.\n• Duradero y fiable.",
      },
      {
        title: "Especificaciones técnicas",
        body: "Posicionamiento:\n• GNSS: GNSS completo\n• Precisión máx.: ≤ 2,5 cm\n\nComponentes:\n• Pantalla: 10,1\", Android\n• Control de guía: Integrado\n• Control de dirección: Eléctrico\n• Cámara: Sí\n\nConectividad:\n• Inalámbrico: Wi-Fi, Bluetooth\n• Móvil: LTE 4G\n• Módem: 410-470 MHz, Rx\n• Puertos: CAN, RS232",
      },
      {
        title: "Casos de uso",
        body: "• Siembra de precisión.\n• Cultivo de fajas.\n• Pulverización de cultivos.\n• Optimización de la cosecha.",
      },
    ],
  },
]

export const categories = [...new Set(products.map((p) => p.category))]
