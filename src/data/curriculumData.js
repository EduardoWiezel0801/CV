export const personalInfo = {
  name: "Eduardo Costa Wiezel",
  title: "Coordenador de TI | Desenvolvedor Fullstack | Entusiasta de IAs",
  location: "Santa Rosa de Viterbo, SP",
  age: 34, // Para ser preenchido
  photo: "/src/assets/images/eduardo-photo.jpg", // Placeholder para foto
  contacts: {
    website: "https://www.tesseratointegra.com.br",
    linkedin: "https://www.linkedin.com/in/eduardo-costa-wiezel-aa39151bb/",
    github: "https://github.com/EduardoWiezel0801",
    email: "eduardocostawiezel@gmail.com" // Para ser preenchido se necessário
  }
};

export const summary = {
  main: "Desenvolvedor fullstack e coordenador de TI com sólida experiência em liderança de equipes técnicas e desenvolvimento de soluções inovadoras. Atualmente coordeno um time de 5 profissionais na Chiaperini Industrial, empresa líder no segmento de máquinas e ferramentas com mais de 35 anos de mercado.",
  secondary: "Minha trajetória profissional combina expertise técnica em desenvolvimento de sistemas com habilidades de gestão estratégica. Tenho experiência comprovada em implantação de sistemas ERP/CRM, criação de APIs, automação de processos e desenvolvimento de soluções com inteligência artificial.",
  aiSpecialization: "Atualmente me especializando em inteligência artificial, com foco em desenvolvimento de chatbots inteligentes, sistemas preditivos e automação de processos empresariais utilizando machine learning e processamento de linguagem natural."
};

export const experiences = [
  {
    id: 1,
    title: "Coordenador de TI",
    company: "Chiaperini Industrial LTDA",
    companyUrl: "https://www.chiaperini.com.br/",
    period: "Atual",
    location: "Santa Rosa de Viterbo, SP",
    companyDescription: "Empresa líder no segmento de máquinas e ferramentas, fundada em 1988. Possui mais de 400 colaboradores, 6.000 pontos de venda no Brasil e já entregou mais de 10 milhões de produtos. Especializada em compressores de ar, lavadoras e ferramentas industriais.",
    description: "Lidero uma equipe multidisciplinar de 5 profissionais de TI, sendo responsável pela gestão estratégica de projetos de desenvolvimento e implantação de sistemas corporativos. Minha atuação abrange desde o planejamento técnico até a entrega de soluções que impactam diretamente os resultados do negócio.",
    responsibilities: [
      "Gestão e liderança de equipe técnica multidisciplinar",
      "Desenvolvimento e implantação de sistemas ERP e CRM customizados",
      "Criação de APIs e microserviços para integração de sistemas",
      "Automação de processos industriais e administrativos",
      "Desenvolvimento da biblioteca PLANIT para padronização frontend",
      "Gestão de projetos de TI com metodologias ágeis",
      "Supervisão de sistemas para mais de 6.000 pontos de venda"
    ]
  },
  
  {
    id: 2,
    title: "Desenvolvedor Fullstack",
    company: "Tesserato Integra",
    companyUrl: "https://www.tesseratointegra.com.br/",
    period: "Atual",
    location: "Santa Rosa de Viterbo, SP",
    companyDescription: "Empresa especializada em soluções inteligentes que vão além do ERP tradicional. Desenvolve ferramentas personalizadas para integração com sistemas empresariais, dashboards interativos, apps de campo e automação de processos.",
    description: "Desenvolvimento de soluções tecnológicas inovadoras com foco em sistemas financeiros, automação empresarial e inteligência artificial. Responsável por criar ferramentas que ampliam a eficiência operacional de empresas através de integrações inteligentes.",
    responsibilities: [
      "Desenvolvimento de sistemas financeiros e de gestão empresarial",
      "Implementação de chatbots com inteligência artificial",
      "Criação de dashboards e painéis interativos em tempo real",
      "Desenvolvimento de APIs para integração com sistemas ERP",
      "Automação de processos empresariais e workflows",
      "Desenvolvimento de apps de campo para captura de dados",
      "Criação de interfaces personalizadas para vendas e logística"
    ]
  }
];

export const skills = {
  ai: {
    title: "Inteligência Artificial & Machine Learning",
    items: ["Python", "LangChain", "EvolutionAPI", "Chatbots", "ML Algorithms", "NLP"],
    highlight: true
  },
  programming: {
    title: "Linguagens de Programação",
    items: ["Python", "JavaScript", "TypeScript", "CSS/SCSS", "HTML5"]
  },
  frameworks: {
    title: "Frameworks & Tecnologias",
    items: ["React", "Node.js", "APIs RESTful", "Microserviços", "Git"]
  },
  systems: {
    title: "Sistemas Empresariais",
    items: ["ERP Protheus", "CRM", "Bling", "Automação", "Integrações"]
  },
  management: {
    title: "Gestão & Liderança",
    items: ["Gestão de Equipes", "Gestão de Projetos", "Metodologias Ágeis", "Liderança Técnica"]
  },
  tools: {
    title: "Ferramentas & Plataformas",
    items: ["Dashboards", "Business Intelligence", "Análise de Dados", "DevOps"]
  }
};

export const projects = [
  {
    id: 1,
    title: "WhatsApp AI Bot",
    tech: "Python • IA • NLP",
    description: "Chatbot inteligente para WhatsApp utilizando LangChain e EvolutionAPI. Sistema de automação de atendimento com processamento de linguagem natural, capaz de compreender contexto e fornecer respostas personalizadas. Revolucionou o atendimento ao cliente através de IA conversacional.",
    highlight: true
  },
  {
    id: 2,
    title: "Sistemas de Previsão Empresarial",
    tech: "Python • Machine Learning",
    description: "Desenvolvimento de algoritmos de machine learning para análise preditiva de dados empresariais. Sistema que auxilia na tomada de decisões estratégicas através de previsões baseadas em dados históricos e tendências de mercado.",
    highlight: true
  },
  {
    id: 3,
    title: "API Protheus - Controle de Estoque",
    tech: "JavaScript • API Integration",
    description: "Sistema de integração com ERP Protheus para controle de estoque em tempo real. Interface web com dashboard interativo para monitoramento de produtos, movimentações e relatórios automatizados. Inclui sistema de upload e sincronização de dados."
  },
  {
    id: 4,
    title: "PLANIT - Biblioteca CSS Corporativa",
    tech: "CSS • JavaScript",
    description: "Biblioteca CSS desenvolvida para padronização do desenvolvimento frontend na Chiaperini. Sistema utilizado em TVs internas da empresa, proporcionando consistência visual e agilidade no desenvolvimento de interfaces corporativas."
  },
  {
    id: 5,
    title: "Gestor Financeiro Empresarial",
    tech: "JavaScript • FinTech",
    description: "Sistema completo de gestão financeira para controle e análise de dados financeiros empresariais. Inclui módulos de contas a pagar/receber, fluxo de caixa, relatórios gerenciais e dashboards executivos com visualizações em tempo real."
  },
  {
    id: 6,
    title: "Gerador de Catálogo - Bling",
    tech: "API • E-commerce",
    description: "Integração automatizada com a plataforma Bling para geração de catálogos de produtos. Sistema que sincroniza dados de produtos, preços e estoque, gerando catálogos atualizados automaticamente para diferentes canais de venda."
  }
];

export const education = [
  {
    id: 1,
    title: "Desenvolvimento Web Fullstack",
    institution: "Kenzie Academy Brasil",
    description: "Formação intensiva e prática em desenvolvimento web fullstack. Curso abrangente cobrindo tecnologias modernas como JavaScript ES6+, React, Node.js, SCSS, metodologias ágeis e boas práticas de desenvolvimento. Foco em projetos práticos e preparação para o mercado de trabalho."
  }
];

export const personalInterests = {
  title: "Interesses Pessoais",
  description: "Sou atleta amador de trail running e praticante dedicado de musculação. Essas atividades desenvolveram em mim disciplina, resiliência e foco em metas de longo prazo - características que aplico diretamente em minha carreira profissional. A mentalidade de superação constante no esporte me inspira a buscar sempre a evolução contínua e o aperfeiçoamento de minhas habilidades técnicas e de liderança."
};

export const professionalObjective = {
  title: "Objetivo Profissional",
  description: "Consolidar minha atuação como líder técnico e especialista em inteligência artificial aplicada a sistemas empresariais. Busco oportunidades para liderar projetos inovadores que utilizem IA para transformar processos empresariais, sempre aplicando a mesma dedicação e disciplina que demonstro no esporte para alcançar resultados excepcionais no ambiente corporativo."
};
