// Soluciones para empresas (desarrollo asistido con IA).
// status: 'idea' | 'en-desarrollo' | 'terminado'. Cuando un caso esté listo,
// rellena `demo` y `repo`, y cambia `impact` por resultados medidos.
export const aiPrinciples = [
  {
    icon: '🧭',
    title: 'Yo diseño',
    text: 'Arquitectura, modelo de datos, endpoints y decisiones técnicas salen de mí, no del modelo.',
  },
  {
    icon: '⚡',
    title: 'La IA acelera',
    text: 'Boilerplate, tests, prompts y primeras versiones: lo repetitivo va más rápido.',
  },
  {
    icon: '🔍',
    title: 'Yo reviso y respondo',
    text: 'Cada línea se lee, se prueba y se entiende antes de entrar en el repo. Si falla, sé por qué.',
  },
]

export const businessCases = [
  {
    id: 'soporte',
    sector: 'Atención al cliente',
    title: 'Asistente de soporte con la documentación de la empresa',
    problem:
      'El equipo de soporte responde una y otra vez las mismas preguntas, y la información está repartida en PDFs, manuales y wikis.',
    solution:
      'Un chat que responde usando solo la documentación interna (RAG), cita la fuente y deriva a una persona cuando no está seguro.',
    impact: ['Menos tickets repetitivos', 'Respuestas 24/7', 'Cada respuesta enlaza su fuente'],
    stack: ['Laravel', 'Vue 3', 'MySQL', 'API de LLM', 'Embeddings'],
    me: 'Modelo de datos de documentos y conversaciones, API en Laravel, panel en Vue y reglas de derivación a humano.',
    ai: 'Búsqueda semántica y redacción de las respuestas.',
    status: 'idea',
    demo: '',
    repo: '',
  },
  {
    id: 'tickets',
    sector: 'Operaciones',
    title: 'Clasificador automático de tickets y correos',
    problem: 'Los correos entrantes se reparten a mano entre departamentos y los urgentes se pierden entre el resto.',
    solution:
      'Cada correo o ticket se clasifica por categoría, prioridad y sentimiento, y se asigna al equipo adecuado en una cola de Laravel.',
    impact: ['Triage en segundos', 'Urgentes arriba de la cola', 'Métricas por categoría'],
    stack: ['Laravel Queues', 'MySQL', 'Vue 3', 'API de LLM'],
    me: 'Colas y jobs, reglas de negocio, panel de revisión manual y métricas.',
    ai: 'Clasificación del texto y extracción de la intención.',
    status: 'idea',
    demo: '',
    repo: '',
  },
  {
    id: 'facturas',
    sector: 'Administración',
    title: 'Extractor de datos de facturas en PDF',
    problem: 'Administración pasa a mano los datos de cada factura de proveedor a la hoja de cálculo o al ERP.',
    solution:
      'Se sube el PDF, se extraen NIF, fecha, base, IVA y total, se validan y se exportan a CSV o directamente a la base de datos.',
    impact: ['Menos tecleo manual', 'Validación de importes e IVA', 'Histórico consultable'],
    stack: ['Laravel', 'MySQL', 'Vue 3', 'OCR', 'API de LLM'],
    me: 'Flujo de subida, validaciones (los totales cuadran, el NIF es válido), revisión humana y exportación.',
    ai: 'Lectura del documento y extracción de los campos.',
    status: 'idea',
    demo: '',
    repo: '',
  },
  {
    id: 'ventas',
    sector: 'Dirección / Ventas',
    title: 'Panel de ventas con resumen semanal automático',
    problem: 'Los datos de ventas están en la base de datos, pero nadie tiene tiempo de analizarlos cada semana.',
    solution:
      'Un dashboard con gráficas por producto, zona y periodo, y un resumen en lenguaje natural que llega por email cada lunes.',
    impact: ['Decisiones con datos', 'Alertas de caídas o picos', 'Informe sin trabajo manual'],
    stack: ['Laravel', 'MySQL', 'Vue 3', 'Chart.js', 'API de LLM'],
    me: 'Consultas SQL y agregaciones, API, dashboard en Vue y tarea programada del informe.',
    ai: 'Redacción del resumen a partir de los datos ya calculados.',
    status: 'idea',
    demo: '',
    repo: '',
  },
  {
    id: 'ecommerce',
    sector: 'E-commerce',
    title: 'Generador de descripciones de producto',
    problem: 'Una tienda con cientos de productos tiene fichas vacías o copiadas del proveedor, y eso perjudica al SEO.',
    solution:
      'A partir de los atributos del producto se generan descripciones y metadatos SEO en varios idiomas, que se revisan antes de publicarse.',
    impact: ['Catálogo completo', 'Mejor posicionamiento', 'Multidioma (es / ca / en)'],
    stack: ['Laravel', 'MySQL', 'Vue 3', 'API de LLM'],
    me: 'Importación del catálogo, cola de generación, editor de revisión y control de versiones de cada texto.',
    ai: 'Redacción de las descripciones y traducción.',
    status: 'idea',
    demo: '',
    repo: '',
  },
]
