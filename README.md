# 📄 CV - Currículo Digital

Sistema completo de currículo digital desenvolvido com arquitetura full-stack moderna. Aplicação web profissional para exibição de informações de carreira, experiências, habilidades e projetos.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 🚀 Tecnologias

### Frontend
- **React** 18.2.0 - Biblioteca JavaScript para interfaces
- **Vite** 5.0.11 - Build tool moderna e rápida
- **React Router DOM** 6.21.3 - Roteamento client-side
- **TailwindCSS** 4.0.0 - Framework CSS utility-first
- **Axios** 1.6.5 - Cliente HTTP
- **Lucide React** - Biblioteca de ícones

### Backend
- **Django** 5.0.1 - Framework web Python
- **Django REST Framework** 3.14.0 - API RESTful
- **Django CORS Headers** - Gerenciamento de CORS
- **Pillow** - Processamento de imagens
- **Python Decouple** - Gerenciamento de variáveis de ambiente

---

## 📋 Funcionalidades

- ✅ **Informações Pessoais** - Nome, título, localização, foto, links sociais
- ✅ **Resumo Profissional** - Apresentação e especialização
- ✅ **Experiências Profissionais** - Histórico de cargos com detalhes
- ✅ **Habilidades** - Categorizadas por área (IA/ML, Programação, Frameworks, etc.)
- ✅ **Projetos** - Portfólio de projetos desenvolvidos
- ✅ **Formação Acadêmica** - Títulos e instituições
- ✅ **Interesses Pessoais** - Hobbies e interesses
- ✅ **Objetivos Profissionais** - Metas de carreira
- ✅ **API RESTful** - Endpoints para gerenciamento de dados
- ✅ **Painel Admin** - Interface administrativa do Django

---

## 🛠️ Instalação

### Pré-requisitos

- Python 3.11+
- Node.js 18+
- pnpm (ou npm/yarn)

### 1. Clone o Repositório

```bash
git clone https://github.com/EduardoWiezel0801/CV.git
cd CV
```

### 2. Configurar Backend

```bash
cd backend

# Criar ambiente virtual
python -m venv venv

# Ativar ambiente virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Executar migrações
python manage.py migrate

# Criar superusuário (opcional)
python manage.py createsuperuser

# Rodar servidor
python manage.py runserver
```

O backend estará disponível em `http://localhost:8000`

### 3. Configurar Frontend

```bash
cd frontend

# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
cp .env.example .env
# O .env já vem configurado para desenvolvimento local

# Rodar servidor de desenvolvimento
pnpm dev
```

O frontend estará disponível em `http://localhost:5173`

---

## 🔧 Configuração

### Variáveis de Ambiente - Backend

Crie um arquivo `.env` no diretório `backend/` com:

```env
SECRET_KEY=sua-chave-secreta-aqui
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

### Variáveis de Ambiente - Frontend

Crie um arquivo `.env` no diretório `frontend/` com:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Currículo Eduardo
```

---

## 📁 Estrutura do Projeto

```
CV/
├── backend/                 # Backend Django
│   ├── api/                # App principal da API
│   │   ├── migrations/     # Migrações do banco de dados
│   │   ├── models.py       # Modelos de dados
│   │   ├── serializers.py  # Serializers DRF
│   │   ├── views.py        # Views da API
│   │   ├── urls.py         # URLs da API
│   │   └── admin.py        # Configuração do admin
│   ├── config/             # Configurações do Django
│   │   ├── settings.py     # Settings principais
│   │   ├── urls.py         # URLs principais
│   │   └── wsgi.py         # WSGI config
│   ├── manage.py           # CLI do Django
│   └── requirements.txt    # Dependências Python
│
└── frontend/               # Frontend React
    ├── src/
    │   ├── components/     # Componentes reutilizáveis
    │   │   ├── layout/     # Layout (Header, Footer, Navbar)
    │   │   └── shared/     # Componentes compartilhados
    │   ├── contexts/       # Context API (estado global)
    │   ├── hooks/          # Custom hooks
    │   ├── pages/          # Páginas da aplicação
    │   │   ├── Admin/      # Painel administrativo
    │   │   ├── Curriculum/ # Página do currículo
    │   │   ├── Home/       # Página inicial
    │   │   └── NotFound/   # Página 404
    │   ├── routes/         # Configuração de rotas
    │   ├── services/       # Serviços de API
    │   ├── utils/          # Utilitários
    │   ├── App.jsx         # Componente principal
    │   └── main.jsx        # Entry point
    ├── package.json        # Dependências Node.js
    └── vite.config.js      # Configuração do Vite
```

---

## 🔌 API Endpoints

### Base URL: `http://localhost:8000/api/`

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/personal-info/` | GET, POST, PUT, DELETE | Informações pessoais |
| `/summary/` | GET, POST, PUT, DELETE | Resumo profissional |
| `/experiences/` | GET, POST, PUT, DELETE | Experiências de trabalho |
| `/skills/` | GET, POST, PUT, DELETE | Habilidades |
| `/skills/by_category/` | GET | Habilidades agrupadas por categoria |
| `/projects/` | GET, POST, PUT, DELETE | Projetos |
| `/education/` | GET, POST, PUT, DELETE | Formação acadêmica |
| `/personal-interests/` | GET, POST, PUT, DELETE | Interesses pessoais |
| `/professional-objectives/` | GET, POST, PUT, DELETE | Objetivos profissionais |

### Exemplo de Requisição

```javascript
// Buscar todas as experiências
fetch('http://localhost:8000/api/experiences/')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🎨 Modelos de Dados

### PersonalInfo
- name, title, location, age
- photo, website, linkedin, github, email

### Experience
- title, company, company_url, period, location
- company_description, description
- responsibilities (JSON)
- order

### Skill
- category, name, highlight, order

### Project
- title, tech, description
- highlight, order

### Education
- title, institution, description, order

---

## 🧪 Testes

```bash
# Backend (Django)
cd backend
python manage.py test

# Frontend (React)
cd frontend
pnpm test
```

---

## 🚀 Deploy

### Backend (Django)

1. Configure variáveis de ambiente de produção
2. Colete arquivos estáticos: `python manage.py collectstatic`
3. Configure servidor (Gunicorn, uWSGI)
4. Configure proxy reverso (Nginx, Apache)

### Frontend (React)

1. Build de produção: `pnpm build`
2. Deploy pasta `dist/` para servidor estático
3. Configure variáveis de ambiente de produção

### Opções de Deploy

- **Vercel** - Frontend
- **Railway** / **Render** - Backend
- **Heroku** - Full-stack
- **AWS** / **DigitalOcean** - VPS

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👤 Autor

**Eduardo Costa Wiezel**

- GitHub: [@EduardoWiezel0801](https://github.com/EduardoWiezel0801)
- LinkedIn: [Eduardo Wiezel](https://linkedin.com/in/eduardo-wiezel)
- Website: [www.tesseratointegra.com.br](https://www.tesseratointegra.com.br)

---



---

## 🎯 Roadmap

- [ ] Adicionar autenticação JWT
- [ ] Implementar testes automatizados
- [ ] Adicionar modo de impressão/PDF
- [ ] Implementar internacionalização (i18n)
- [ ] Adicionar dark mode
- [ ] Criar dashboard de analytics
- [ ] Implementar cache com Redis
- [ ] Adicionar CI/CD com GitHub Actions

---

