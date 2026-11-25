// Proyectos con IA (casos de uso para empresas). Textos traducibles: { es, en }.
// status: 'idea' | 'en-desarrollo' | 'terminado'. Cuando un caso esté listo,
// rellena `demo` y `repo`, y cambia `impact` por resultados medidos.
const LLM = { es: 'API de LLM', en: 'LLM API' }

export const aiPrinciples = [
  { es: 'Arquitectura y modelo de datos: yo', en: 'Architecture and data model: me' },
  { es: 'Código repetitivo y tests: IA', en: 'Boilerplate and tests: AI' },
  { es: 'Revisión y pruebas: yo', en: 'Review and testing: me' },
]

export const businessCases = [
  {
    id: 'soporte',
    sector: { es: 'Atención al cliente', en: 'Customer support' },
    title: {
      es: 'Asistente de soporte con la documentación de la empresa',
      en: 'Support assistant using company documentation',
    },
    problem: {
      es: 'El equipo de soporte responde una y otra vez las mismas preguntas, y la información está repartida en PDFs, manuales y wikis.',
      en: 'The support team keeps answering the same questions, and the information is spread across PDFs, manuals and wikis.',
    },
    solution: {
      es: 'Un chat que responde usando solo la documentación interna (RAG), cita la fuente y deriva a una persona cuando no está seguro.',
      en: 'A chat that answers using only internal documentation (RAG), cites its source and hands over to a person when unsure.',
    },
    impact: [
      { es: 'Menos tickets repetitivos', en: 'Fewer repetitive tickets' },
      { es: 'Atención 24/7', en: '24/7 support' },
      { es: 'Respuestas con fuente', en: 'Answers with sources' },
    ],
    stack: ['Laravel', 'Vue 3', 'MySQL', LLM, 'Embeddings'],
    me: {
      es: 'Modelo de datos de documentos y conversaciones, API en Laravel, panel en Vue y reglas de derivación a humano.',
      en: 'Data model for documents and conversations, Laravel API, Vue dashboard and human hand-off rules.',
    },
    ai: { es: 'Búsqueda semántica y redacción de las respuestas.', en: 'Semantic search and answer generation.' },
    status: 'idea',
    demo: '',
    repo: '',
  },
  {
    id: 'tickets',
    sector: { es: 'Operaciones', en: 'Operations' },
    title: { es: 'Clasificador automático de tickets y correos', en: 'Automatic ticket and email classifier' },
    problem: {
      es: 'Los correos entrantes se reparten a mano entre departamentos y los urgentes se pierden entre el resto.',
      en: 'Incoming emails are routed to departments by hand, and urgent ones get lost.',
    },
    solution: {
      es: 'Cada correo o ticket se clasifica por categoría, prioridad y sentimiento, y se asigna al equipo adecuado en una cola de Laravel.',
      en: 'Each email or ticket is classified by category, priority and sentiment, and assigned to the right team through a Laravel queue.',
    },
    impact: [
      { es: 'Clasificación automática', en: 'Automatic classification' },
      { es: 'Prioridad por urgencia', en: 'Priority by urgency' },
      { es: 'Métricas por categoría', en: 'Metrics by category' },
    ],
    stack: ['Laravel Queues', 'MySQL', 'Vue 3', LLM],
    me: {
      es: 'Colas y jobs, reglas de negocio, panel de revisión manual y métricas.',
      en: 'Queues and jobs, business rules, manual review dashboard and metrics.',
    },
    ai: { es: 'Clasificación del texto y extracción de la intención.', en: 'Text classification and intent extraction.' },
    status: 'idea',
    demo: '',
    repo: '',
  },
  {
    id: 'facturas',
    sector: { es: 'Administración', en: 'Administration' },
    title: { es: 'Extractor de datos de facturas en PDF', en: 'PDF invoice data extractor' },
    problem: {
      es: 'Administración pasa a mano los datos de cada factura de proveedor a la hoja de cálculo o al ERP.',
      en: 'Admin staff copy each supplier invoice into a spreadsheet or the ERP by hand.',
    },
    solution: {
      es: 'Se sube el PDF, se extraen NIF, fecha, base, IVA y total, se validan y se exportan a CSV o directamente a la base de datos.',
      en: 'The PDF is uploaded, tax ID, date, net amount, VAT and total are extracted, validated and exported to CSV or straight to the database.',
    },
    impact: [
      { es: 'Menos entrada manual de datos', en: 'Less manual data entry' },
      { es: 'Validación de importes e IVA', en: 'Amount and VAT validation' },
      { es: 'Histórico consultable', en: 'Searchable history' },
    ],
    stack: ['Laravel', 'MySQL', 'Vue 3', 'OCR', LLM],
    me: {
      es: 'Flujo de subida, validaciones (los totales cuadran, el NIF es válido), revisión humana y exportación.',
      en: 'Upload flow, validation (totals add up, tax ID is valid), human review and export.',
    },
    ai: { es: 'Lectura del documento y extracción de los campos.', en: 'Reading the document and extracting the fields.' },
    status: 'idea',
    demo: '',
    repo: '',
  },
  {
    id: 'ventas',
    sector: { es: 'Dirección / Ventas', en: 'Management / Sales' },
    title: { es: 'Panel de ventas con resumen semanal automático', en: 'Sales dashboard with automatic weekly summary' },
    problem: {
      es: 'Los datos de ventas están en la base de datos, pero nadie tiene tiempo de analizarlos cada semana.',
      en: 'Sales data is in the database, but nobody has time to analyse it every week.',
    },
    solution: {
      es: 'Un dashboard con gráficas por producto, zona y periodo, y un resumen en lenguaje natural que llega por email cada lunes.',
      en: 'A dashboard with charts by product, region and period, and a plain-language summary emailed every Monday.',
    },
    impact: [
      { es: 'Informe semanal automático', en: 'Automatic weekly report' },
      { es: 'Alertas de caídas o picos', en: 'Alerts for drops or spikes' },
      { es: 'Métricas por producto y zona', en: 'Metrics by product and region' },
    ],
    stack: ['Laravel', 'MySQL', 'Vue 3', 'Chart.js', LLM],
    me: {
      es: 'Consultas SQL y agregaciones, API, dashboard en Vue y tarea programada del informe.',
      en: 'SQL queries and aggregations, API, Vue dashboard and scheduled report task.',
    },
    ai: {
      es: 'Redacción del resumen a partir de los datos ya calculados.',
      en: 'Writing the summary from the pre-computed figures.',
    },
    status: 'idea',
    demo: '',
    repo: '',
  },
  {
    id: 'ecommerce',
    sector: 'E-commerce',
    title: { es: 'Generador de descripciones de producto', en: 'Product description generator' },
    problem: {
      es: 'Una tienda con cientos de productos tiene fichas vacías o copiadas del proveedor, y eso perjudica al SEO.',
      en: 'A shop with hundreds of products has empty or supplier-copied product pages, which hurts SEO.',
    },
    solution: {
      es: 'A partir de los atributos del producto se generan descripciones y metadatos SEO en varios idiomas, que se revisan antes de publicarse.',
      en: 'Descriptions and SEO metadata are generated in several languages from product attributes and reviewed before publishing.',
    },
    impact: [
      { es: 'Fichas de producto completas', en: 'Complete product pages' },
      { es: 'Metadatos SEO', en: 'SEO metadata' },
      { es: 'Multidioma (es / ca / en)', en: 'Multilingual (es / ca / en)' },
    ],
    stack: ['Laravel', 'MySQL', 'Vue 3', LLM],
    me: {
      es: 'Importación del catálogo, cola de generación, editor de revisión y control de versiones de cada texto.',
      en: 'Catalogue import, generation queue, review editor and version history for each text.',
    },
    ai: { es: 'Redacción de las descripciones y traducción.', en: 'Writing and translating the descriptions.' },
    status: 'idea',
    demo: '',
    repo: '',
  },
]
