import './App.css';
import { useState } from 'react';

// UI Components
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Button } from './components/ui/button';

// Custom Components
import Navbar from './components/Navbar';
import FadeInSection from './components/FadeInSection';
import Modal from './components/Modal';
import FloatingButtons from './components/FloatingButtons';

// Icons - React Icons
// Font Awesome
import {
    FaIdBadge,
    FaWhatsapp,
    FaLaptopCode,
    FaServer,
    FaTools,
    FaProjectDiagram,
    FaGlobeAmericas,
    FaCertificate,
    FaMobileAlt,
    FaShieldAlt,
    FaCloudSun,
    FaDocker,
    FaLanguage,
    FaBookOpen,
    FaEnvelope,
    FaBookmark,
    FaLinkedin,
    FaExclamationTriangle,
    FaUserCheck,
    FaGithub,
    FaExternalLinkAlt,
    FaDatabase,
    FaCode,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs
} from 'react-icons/fa'

import {
    SiDotnet,
    SiMysql,
    SiPostgresql
} from "react-icons/si";

// Feather Icons
import {
    FiHome,
    FiBriefcase,
    FiBookOpen,
    FiAward,
    FiCpu,
    FiFolder,
    FiMail,
    FiChevronDown
} from 'react-icons/fi'

import {
    SiReact,
    SiGraphql
} from '@icons-pack/react-simple-icons'

import { motion } from "framer-motion";

import Typewriter from "./components/Typewriter";
export default function App() {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const BASE_PATH = import.meta.env.BASE_URL

    const validarCamposInterno = () => {
        if (!name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
            setErro("Por favor, preencha todos os campos antes de enviar.")
            return false
        }

        // Validação simples de e-mail
        if (!email.includes("@")) {
            setErro("Informe um e-mail válido.")
            return false
        }

        return true
    }

    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState("")

    const enviarParaWhatsapp = () => {

        // Resetar mensagem de erro
        setErro("")

        if (!validarCamposInterno()) return

        setLoading(true)

        const texto = `Olá, meu nome é ${name}. ${message} | Telefone: ${phone}, E-mail: ${email}`
        const numero = '5515996697754'
        const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`

        // Simular breve carregamento (para aparecer o spinner)
        setTimeout(() => {
            window.open(link, '_blank')
            setLoading(false)
        }, 700)
    }

    // 🔹 State e função do accordion
    const [aberto, setAberto] = useState(null)

    const toggle = (index) => {
        setAberto(aberto === index ? null : index)
    }

    const [expandedImage, setExpandedImage] = useState(null);

    const experiencias = [
        {
            cargo: 'Analista de Sistemas e Desenvolvimento',
            empresa: 'A. Hansen Restaurant · Freelancer · Projeto internacional',
            periodo: 'maio 2025 - janeiro 2026',
            local: 'Hafnarfjörður, Islândia · Remota',
            pais: 'is', // código ISO do país
            descricao: `• Desenvolvimento de soluções customizadas para gestão do restaurante, incluindo controle de mesas, 
            ordens de produção e aplicativo de reservas (App Booking), utilizando C# .NET, ASP.NET Core, ASP.NET Core Web API,
            Blazor, MVC, HTML e CSS com Razor Pages
            • Desenvolvimento e implementação de endpoints de API
            • Integração com API do Twilio (SMS) para envio de notificações a clientes
            • Implementação de notificações push utilizando Google Firebase
            • Análise e melhoria de sistemas
            • Levantamento e documentação de requisitos
            • Implantação da aplicação em servidor local utilizando Microsoft IIS
            • Implantação em servidor web dedicado com ambiente .NET (MonsterASP)
            • Configuração de domínio, subdomínio e certificados SSL`,
            descricaoLonga: `• Desenvolvimento de soluções customizadas para gestão do restaurante, incluindo controle de mesas, 
            ordens de produção e aplicativo de reservas (App Booking), utilizando C# .NET, ASP.NET Core, ASP.NET Core Web API,
            Blazor, MVC, HTML e CSS com Razor Pages
            • Desenvolvimento e implementação de endpoints de API
            • Integração com API do Twilio (SMS) para envio de notificações a clientes
            • Implementação de notificações push utilizando Google Firebase
            • Análise e melhoria de sistemas
            • Levantamento e documentação de requisitos
            • Implantação da aplicação em servidor local utilizando Microsoft IIS
            • Implantação em servidor web dedicado com ambiente .NET (MonsterASP)
            • Configuração de domínio, subdomínio e certificados SSL`,
        },
        {
            cargo: 'Analista de Sistemas JR',
            empresa: 'Sitio da Mata',
            periodo: 'setembro 2024 - abril 2025',
            local: 'Tietê-SP · Presencial · Temporário',
            pais: 'br',
            descricao: `• Desenvolvimento e manutenção de aplicações web (Ecommerce) em HTML, CSS, React, C# e ASP.NET Core, arquitetura MVC e em Camadas 
            • Criação e consumo de APIs REST para comunicação entre serviços
            • Levantamento de requisitos
            • Gestão de backlog e priorização de demandas
            • Modelagem de sistemas e processos utilizando UML
            • Execução de testes manuais para validação de funcionalidades e garantia de qualidade`,
            descricaoLonga: `• Desenvolvimento e manutenção de aplicações web (Ecommerce) em HTML, CSS, React, C# e ASP.NET Core, arquitetura MVC e em Camadas 
            • Criação e consumo de APIs REST para comunicação entre serviços
            • Levantamento de requisitos
            • Gestão de backlog e priorização de demandas
            • Modelagem de sistemas e processos utilizando UML
            • Execução de testes manuais para validação de funcionalidades e garantia de qualidade`,
        },
        {
            cargo: 'Analista de Desenvolvimento PL',
            empresa: 'PPI-Multitask WEG',
            periodo: 'junho 2022 - julho 2024',
            local: 'São Paulo-SP · Remota',
            pais: 'br',
            descricao: `• Analista N1 soluções PC-Factory MES Industria 4.0 (Manufacturing Execution System)
            • Desenvolvimento e manutenção de aplicações web e desktop (Industria) em .NET, ASP.NET Core, JavaScript, arquitetura MVC
            • Implementação de arquitetura de microserviços para separação de módulos do sistema
            • Integração entre serviços utilizando RabbitMQ para mensageria e processamento assíncrono
            • Criação e consumo de APIs REST para comunicação entre serviços
            • Apoio no desenvolvimento de integração utilizando Web APIs, integrando sistemas Movidesk e ServiceNow
            • Implementação, manutenção e otimização de consultas em banco de dados SQL Server
            • Publicação e configuração de aplicações web em Microsoft IIS
            • Integrações e análise de incidentes , investigação de logs e suporte à correção de problemas em ambiente produção
            • Execução de testes manuais para validação de funcionalidades`,
            descricaoLonga: `• Analista N1 soluções PC-Factory MES Industria 4.0 (Manufacturing Execution System)
            • Desenvolvimento e manutenção de aplicações web e desktop (Industria) em .NET, ASP.NET Core, JavaScript, arquitetura MVC
            • Implementação de arquitetura de microserviços para separação de módulos do sistema
            • Integração entre serviços utilizando RabbitMQ para mensageria e processamento assíncrono
            • Criação e consumo de APIs REST para comunicação entre serviços
            • Apoio no desenvolvimento de integração utilizando Web APIs, integrando sistemas Movidesk e ServiceNow
            • Implementação, manutenção e otimização de consultas em banco de dados SQL Server
            • Publicação e configuração de aplicações web em Microsoft IIS
            • Integrações e análise de incidentes , investigação de logs e suporte à correção de problemas em ambiente produção
            • Execução de testes manuais para validação de funcionalidades`,
        },
        {
            cargo: 'Analista de Desenvolvimento JR',
            empresa: 'Um Ponto Dois Software de Gestão',
            periodo: 'setembro 2019 - maio 2022',
            local: 'Laranjal Paulista-SP · Presencial',
            pais: 'br',
            descricao: `• Desenvolvimento e manutenção de aplicações web e desktop (Comércio e Industria) em NET, ASP.NET Core e GeneXus, arquitetura MVC e em Camadas 
            • Implementação de arquitetura de microserviços para separação de módulos do sistema
            • Criação e consumo de APIs REST para comunicação entre serviços
            • Implementação, manutenção e otimização de consultas em bancos de dados SQL Server, MySQL e PostgreSQL
            • Publicação e configuração de aplicações web em Microsoft IIS
            • Implantação de sistemas de gestão para comércios e indústrias
            • Conversão, migração e validação de dados entre bases de clientes`,
            descricaoLonga: `• Desenvolvimento e manutenção de aplicações web e desktop (Comércio e Industria) em NET, ASP.NET Core e GeneXus, arquitetura MVC e em Camadas 
            • Implementação de arquitetura de microserviços para separação de módulos do sistema
            • Criação e consumo de APIs REST para comunicação entre serviços
            • Implementação, manutenção e otimização de consultas em bancos de dados SQL Server, MySQL e PostgreSQL
            • Publicação e configuração de aplicações web em Microsoft IIS
            • Implantação de sistemas de gestão para comércios e indústrias
            • Conversão, migração e validação de dados entre bases de clientes`,
        },
        {
            cargo: 'Analista de Suporte SR',
            empresa: 'Coam Informática',
            periodo: 'janeiro 2014 - julho 2019',
            local: 'Tietê-SP · Presencial',
            pais: 'br',
            descricao: `• Implantação e suporte de sistemas para Comércios
            • Treinamento de usuários
            • Manutenção em bancos de dados SQL Server, MySQL e PostgreSQL
            • Conversão, migração e validação de dados entre bases de clientes
            • Execução de testes manuais para validação de funcionalidades
            • Suporte técnico em infraestrutura de TI (Hardwares e Redes corporativas)`,
            descricaoLonga: `• Implantação e suporte de sistemas para Comércios
            • Treinamento de usuários
            • Manutenção em bancos de dados SQL Server, MySQL e PostgreSQL
            • Conversão, migração e validação de dados entre bases de clientes
            • Execução de testes manuais para validação de funcionalidades
            • Suporte técnico em infraestrutura de TI (Hardwares e Redes corporativas)`,
        },
        {
            cargo: 'Estagiário de TI',
            empresa: 'Microcamp',
            periodo: 'janeiro 2009 - dezembro 2012',
            local: 'Tietê-SP · Presencial',
            pais: 'br',
            descricao: `• Suporte técnico em infraestrutura de TI (Hardwares e Redes)`,
            descricaoLonga: `• Suporte técnico em infraestrutura de TI (Hardwares e Redes)`,
        }
    ]

    const formacoes = [
        {
            titulo: "Bacharelado em Engenharia de Software",
            instituicao: "UniCesumar",
            pais: 'br',
            periodo: "2021 - 2024",
            descricaoLonga: `Formação focada em arquitetura de software, engenharia de requisitos, testes, modelagem, qualidade e desenvolvimento de sistemas completos.`,
        },
        {
            titulo: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
            instituicao: "Universidade Paulista (UNIP)",
            pais: 'br',
            periodo: "2017 - 2020",
            descricaoLonga: `Base sólida em Analise, programação, estruturas de banco de dados, infraestrutura, lógica aplicada e desenvolvimento de aplicações reais.`,
        }
    ]

    const certificados = [
        {
            nome: "Web API ASP .NET Core Essencial (.NET 8 / .NET9)",
            org: "Udemy",
            ano: 2025,
            link: "https://www.linkedin.com/in/eliveltonalmeida/overlay/1758029684592/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs" // Link do LinkedIn ou imagem
        },
        {
            nome: "Gestão da Qualidade e o Ciclo do Desenvolvimento de Software",
            org: "Udemy",
            ano: 2025,
            link: "https://www.linkedin.com/in/eliveltonalmeida/details/certifications/1744112575972/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs"
        },
        {
            nome: "Gestão de Projetos em Engenharia de Software",
            org: "Udemy",
            ano: 2025,
            link: "https://www.linkedin.com/in/eliveltonalmeida/details/certifications/1736562202660/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs"
        },
        {
            nome: "Fundamentos do Six SIGMA e Análise de Requisitos de Software",
            org: "Udemy",
            ano: 2025,
            link: "https://www.linkedin.com/in/eliveltonalmeida/details/certifications/1743962129597/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs"
        },
        {
            nome: "Metodologias Ágeis (XP, Scrum, Lean e Kanban)",
            org: "Udemy",
            ano: 2025,
            link: "https://www.linkedin.com/in/eliveltonalmeida/details/certifications/1736455059818/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs"
        },
        {
            nome: "Foundational C# with Microsoft",
            org: "freeCodeCamp",
            ano: 2024,
            link: "https://www.linkedin.com/in/eliveltonalmeida/details/certifications/1723218380852/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs"
        },
        {
            nome: "Responsive Web Design HTML/CSS",
            org: "freeCodeCamp",
            ano: 2024,
            link: "https://www.linkedin.com/in/eliveltonalmeida/details/certifications/1723900641045/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs"
        },
        {
            nome: "Qualidade no atendimento",
            org: "WEG",
            ano: 2023,
            link: "https://www.linkedin.com/in/eliveltonalmeida/details/certifications/1635550690044/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs"
        },
        {
            nome: "Linguagem C#, POO + Projetos",
            org: "Udemy",
            ano: 2022,
            link: "https://www.linkedin.com/in/eliveltonalmeida/details/certifications/1635553700369/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs"
        },
        {
            nome: "Projeto de Ensino - Ambientação em Lógica de Programação",
            org: "UniCesumar",
            ano: 2022,
            link: "https://www.linkedin.com/in/eliveltonalmeida/details/certifications/1713490261811/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs"
        },
        {
            nome: "Projeto de Ensino - Cibersegurança voltada a Segurança de Dados",
            org: "UniCesumar",
            ano: 2022,
            link: "https://www.linkedin.com/in/eliveltonalmeida/details/certifications/1713490412004/single-media-viewer/?profileId=ACoAAC06FHoB-hfA9tl25JEMzhc153cDA8selNs"
        },
        {
            nome: "GeneXus 16/17",
            org: "Udemy",
            ano: 2021,
            link: null
        }
    ]

    const skills = [
        {
            icon: <FaCode className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Backend",
            items: ".NET • ASP.NET Core • MVC • Web API • C# • C++ • EF Core • LINQ",
            level: "70%" // nível de proficiência
        },
        {
            icon: <FaLaptopCode className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Frontend",
            items: "Windows Forms • Razor Pages • Blazor • HTML • CSS • JavaScript • TypeScript • React",
            level: "80%"
        },
        {
            icon: <FaDatabase className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Banco de Dados",
            items: "SQL Server • MySQL • PostgreSQL • SQLite",
            level: "100%"
        },
        {
            icon: <FaTools className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Ferramentas",
            items: "Microsoft Visual Studio • VS Code • Git • GitHub • JIRA • Kanban • Movidesk • Servicedesk • ServiceNow",
            level: "100%"
        },
        {
            icon: <FaServer className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Infraestrutura",
            items: "Microsoft IIS • Hospedagem • Implantação • Deploy • Configurações ambientes Web • Servidor Dedicado .NET",
            level: "100%"
        },
        {
            icon: <FaTools className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Suporte Técnico",
            items: "Suporte técnico em hardware • Redes • Sistemas para Comércios e Industrias • " +
                "Diagnóstico e troubleshooting de incidentes • Manutenção preventiva/corretiva • Suporte remoto",
            level: "100%"
        },
        {
            icon: <FaGlobeAmericas className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Idiomas",
            items: "Inglês — estudo contínuo, com foco em leitura técnica e conversação",
            level: "50%"
        }
    ]

    const learning = [
        {
            icon: <FaMobileAlt className="text-4xl text-green-500 mx-auto mb-4" />,
            title: "React Native",
            items: "Desenvolvimento de apps mobile nativos para iOS e Android",
            level: "Em andamento"
        },
        {
            icon: <FaBookmark className="text-4xl mx-auto mb-4" style={{ color: '#0078D7' }} />,
            title: "Azure DevOps",
            items: "Serviços em nuvem, CI/CD e deploy de aplicações",
            level: "Em andamento"
        },
        {
            icon: <SiReact className="text-4xl mx-auto mb-4" style={{ color: '#61DAFB' }} />,
            title: "React",
            items: "Aprofundando em desenvolvimento web front-end",
            level: "Em andamento"
        },
        {
            icon: <FaLanguage className="text-4xl text-yellow-500 mx-auto mb-4" />,
            title: "Inglês",
            items: "Estudo contínuo de inglês técnico e conversação pela WiseUp",
            level: "Em andamento"
        }
    ]

    const projetos = [
        {
            title: 'Software de Backups SQL',
            description: 'Sistema automatizado para backup de bases de dados com logs detalhados e verificação de integridade.',
            problem: 'Automatizar backups de bancos SQL, garantindo consistência dos dados e rastreabilidade por meio de logs. Facilitar a restauração de dados.',
            approach: 'A aplicação permite agendar backups automáticos de até 4 bases de dados ao mesmo tempo, configurar diretórios de cópia, ' +
                'importar(restaurar) as bases rapidamente, registrar logs detalhados e validar a integridade dos dados.A arquitetura em camadas facilita manutenção e escalabilidade, e foram implementados testes unitários para maior confiabilidade.',
            contribution: 'Desenvolvi toda a lógica de backup, integração com SQL Server e MySQL, além do sistema de logs e monitoramento de consistência.',
            technologies: ['.NET 4.8', 'Windows Desktop', 'SQL Server', 'MySQL'],
            github: null,
            live: '', // se houver versão online
            icon: <FaServer className="text-3xl mb-2 text-blue-500" />,
            images: [
                BASE_PATH + 'images/swbackup1.jpg',
                BASE_PATH + 'images/swbackup2.jpg',
                BASE_PATH + 'images/swbackup3.jpg',
                BASE_PATH + 'images/swbackup4.jpg',
                BASE_PATH + 'images/swbackup5.jpg',
                BASE_PATH + 'images/swbackup6.jpg',
            ],
            video: BASE_PATH + 'videos/swbackup.mp4',
            level: 'Finalizado'
        },
        {
            title: 'Migração de Dados',
            description: 'Ferramenta para conversão/exportação e migração de dados entre sistemas de tickets.',
            problem: 'Migrar dados de forma segura e automatizada do Servicedesk para o Movidesk, evitando perda de informações e retrabalho manual.',
            approach: 'O software conecta-se a diferentes bases de dados SQL Server, realiza consultas customizadas e transfere os dados de forma estruturada, registrando logs de execução para auditoria.',
            contribution: 'Desenvolvi as classes para conexão com SQL Server, leitura e escrita de dados via queries, além do sistema de logs para acompanhamento e rastreabilidade das migrações.',
            technologies: ['.NET 4.8', 'Windows Desktop', 'SQL Server'],
            github: 'https://github.com/EliveltonProgrammer/Exportacao-dados-SQL',
            live: '', // se houver versão online
            icon: <FaServer className="text-3xl mb-2 text-blue-500" />,
            images: [
                BASE_PATH + 'images/swmigracao1.jpg',
                BASE_PATH + 'images/swmigracao2.jpg',
                BASE_PATH + 'images/swmigracao3.jpg',
                BASE_PATH + 'images/swmigracao4.jpg',
                BASE_PATH + 'images/swmigracao5.jpg'
            ],
            video: BASE_PATH + 'videos/swmigracao.mp4',
            level: 'Finalizado'
        },
        {
            title: 'Gestão de Restaurantes',
            description:
                'Aplicação Desktop e Web completa para gestão operacional de restaurantes, incluindo controle de mesas, lançamento de comandas/mesas, consultas, vendas, delivery, cadastros, impressão automática de ' +
                'ordens de produção por setor e finalização de conta.',
            problem:
                'Restaurantes enfrentam desafios como demora no atendimento, erros de lançamento, falhas de comunicação entre setores ' +
                'e dificuldade no controle das comandas/mesas simultaneamente dos clientes. O objetivo foi criar um sistema centralizado e confiável que reduzisse erros e acelerasse o fluxo de atendimento.',
            approach:
                'Desenvolvi uma aplicação organizada por setores, permitindo que cada pedido seja automaticamente direcionado para impressão conforme sua categoria ' +
                '(Cozinha, Bebidas / Bar ou Caixa). O sistema inclui gestão de mesas disponíveis, controle de consumo por cliente, reimpressões, status em tempo real e finalização ' +
                'da conta. Também foram implementadas rotinas de sincronização, regras de negócio para lançamentos, monitoramento das impressoras e interfaces responsivas.',
            contribution:
                'Fui responsável por toda a arquitetura do sistema, incluindo backend, lógica de negócios, controle das impressões automáticas por setor e interface de gestão de mesas. ' +
                'Implementei também o módulo de comandas, consumo do cliente, fechamento da conta e tratamento de falhas nas impressoras.',
            technologies: ['C#', 'ASP.NET Core', 'Windows Desktop / Web', 'EF Core', 'SQL Server', 'HTML', 'CSS'],
            github: null,
            live: '',
            icon: <FaProjectDiagram className="text-3xl mb-2 text-blue-500" />,
            images: [
                BASE_PATH + 'images/appmesas1.jpg',
                BASE_PATH + 'images/appmesas2.jpg',
                BASE_PATH + 'images/appmesas3.jpg',
                BASE_PATH + 'images/appmesas4.jpg',
                BASE_PATH + 'images/appmesas5.jpg',
                BASE_PATH + 'images/appmesas6.jpg',
                BASE_PATH + 'images/appmesas7.jpg',
                BASE_PATH + 'images/appmesas8.jpg',
                BASE_PATH + 'images/appmesas9.jpg',
                BASE_PATH + 'images/appmesas10.jpg',
                BASE_PATH + 'images/appmesas11.jpg'
            ],
            video: BASE_PATH + 'videos/appmesas.mp4',
            level: 'Finalizado'
        },
        {
            title: 'Booking',
            description: 'Sistema completo de Gestão de Reservas de mesas com notificações SMS, e-mail e integração mobile.',
            problem: 'Reduzir erros manuais na organização de reservas do Restaurante e centralizar notificações para clientes e equipe.',
            approach: 'O projeto contempla três frentes: Gestão de Reservas, Aplicativo Booking para clientes e API central. ' +
                'A aplicação web foi desenvolvida em C#, ASP.NET Core 8.0, Razor e Blazor Server, garantindo uma interface responsiva com HTML e CSS. ' +
                'O backend MVC gerencia reservas, regras de negócio e integração com notificações SMS, Push e e-mail automático.',
            contribution: 'Desenvolvi toda a arquitetura backend da API REST, incluindo Controllers, Services e Models, além do frontend responsivo da plataforma de Gestão e do aplicativo Booking.',
            technologies: ['ASP.NET Core 8.0 MVC', 'ASP.NET Core Razor', 'Blazor Server', 'WebAPI', 'EF Core', 'SQL Server', 'HTML', 'CSS'],
            github: null,
            live: '',
            icon: <FaProjectDiagram className="text-3xl mb-2 text-blue-500" />,
            images: [
                BASE_PATH + 'images/reservas1.jpg',
                BASE_PATH + 'images/reservas2.jpg',
                BASE_PATH + 'images/reservas3.jpg',
                BASE_PATH + 'images/reservas4.jpg',
                BASE_PATH + 'images/reservas5.jpg',
                BASE_PATH + 'images/reservas6.jpg',
                BASE_PATH + 'images/reservas7.jpg',
                BASE_PATH + 'images/reservas8.jpg',
                BASE_PATH + 'images/reservas9.jpg'
            ],
            video: BASE_PATH + 'videos/reservas.mp4',
            level: 'Finalizado'
        },
        {
            title: 'WeatherNow App',
            description: 'Aplicação web de previsão do tempo em tempo real com gráficos interativos, consumo de API externa e arquitetura cloud-ready com deploy automatizado.',

            problem: 'Disponibilizar uma aplicação moderna para consulta de clima em tempo real, integrando dados externos e apresentando informações de forma visual e intuitiva para o usuário.',

            approach: 'O projeto foi desenvolvido com arquitetura baseada em API REST utilizando ASP.NET Core 9.0. ' +
                'O backend consome dados de uma API pública de clima, realiza o mapeamento das respostas e expõe endpoints próprios para consumo do frontend. ' +
                'A aplicação foi containerizada com Docker e publicada no Render, enquanto o frontend foi hospedado na Netlify. ' +
                'O sistema inclui endpoint de previsão atual e forecast, além de gráficos dinâmicos para visualização de temperatura e condições climáticas.',

            contribution: 'Desenvolvi toda a API REST em ASP.NET Core 9.0, incluindo integração com API externa, modelagem de dados, Services, Controllers e tratamento de erros. ' +
                'Realizei a configuração de Docker, deploy em ambiente Linux (Render) e integração contínua via GitHub. Também desenvolvi o frontend responsivo e integração com os endpoints.',

            technologies: [
                'React',
                'Tailwind',
                'JavaScript',
                'HTML5',
                'CSS3',
                'Docker',
                'Render (Cloud Deploy)',
                'Netlify',
                'REST API',
                'HTTP Client',
                'JSON',
                'Chart.js'
            ],

            github: 'https://github.com/elivelton-almeida/WeatherNow-web',
            live: 'https://weathernow-elivelton.netlify.app/',

            icon: <FaCloudSun className="text-3xl mb-2 text-blue-500" />,

            images: [
                BASE_PATH + 'images/weathernow1.jpg',
                BASE_PATH + 'images/weathernow2.jpg',
                BASE_PATH + 'images/weathernow3.jpg',
                BASE_PATH + 'images/weathernow4.jpg',
                BASE_PATH + 'images/weathernow5.jpg',
                BASE_PATH + 'images/weathernow6.jpg',
                BASE_PATH + 'images/weathernow7.jpg',
                BASE_PATH + 'images/weathernow8.jpg'
            ],

            video: BASE_PATH + 'videos/weathernow.mp4',

            level: 'Finalizado'
        },
        {
            title: 'WeatherNow API',

            description: 'API REST para consulta de previsão do tempo em tempo real, com integração a serviço externo de clima, arquitetura em camadas e deploy containerizado em ambiente Linux.',

            problem: 'Criar uma API robusta e organizada para centralizar o consumo de dados meteorológicos externos, abstraindo regras de negócio, tratamento de erros e padronização de respostas para clientes consumidores.',

            approach: 'A API foi desenvolvida utilizando ASP.NET Core 9.0 seguindo arquitetura em camadas (Controllers, Services e Models). ' +
                'O serviço consome uma API pública de clima através de HttpClient, realiza o mapeamento dos DTOs e expõe endpoints próprios para consulta de clima atual e previsão (forecast). ' +
                'O projeto inclui tratamento de exceções, validação de parâmetros e padronização de respostas JSON. ' +
                'A aplicação foi containerizada com Docker e publicada no Render em ambiente Linux.',

            contribution: 'Desenvolvi toda a estrutura da API REST, incluindo definição de endpoints OpenWeather, implementação da camada de serviços, modelagem de respostas (DTOs), integração com API externa e tratamento de erros. ' +
                'Configurei o Dockerfile, realizei o processo de build e publish com .NET 9 e efetuei o deploy em cloud utilizando Render.',

            technologies: [
                'ASP.NET Core 9.0 Web API',
                'C#',
                'REST',
                'HttpClient',
                'JSON',
                'Docker',
                'Render',
                'Linux Environment'
            ],

            github: 'https://github.com/elivelton-almeida/WeatherNow.API',

            live: null,

            icon: <FaCloudSun className="text-3xl mb-2 text-blue-500" />,

            images: [
                BASE_PATH + 'images/weathernow-api1.jpg',
                BASE_PATH + 'images/weathernow-api2.jpg',
                BASE_PATH + 'images/weathernow-api3.jpg',
                BASE_PATH + 'images/weathernow-api4.jpg',
                BASE_PATH + 'images/weathernow-api5.jpg'
            ],

            video: null,

            level: 'Finalizado'
        }
    ]

    /*const projetosFuturos = [
        {
            title: 'Sistema & App de Alerta em Tempo Real',
            description: 'Sistema de monitoramento de ocorrências em escolas com alertas sonoros, localização do local via GPS, e aplicativo mobile para envio de Alertas, informações importantes e chat.',
            problem: 'Melhorar a segurança escolar e permitir resposta rápida dos Serviços de Emergências (GCM). As escolas enfrentam dificuldades ' +
                'para acionar rapidamente os serviços de emergência em situações críticas. Isso reduz a capacidade de resposta e compromete a segurança de ' +
                'alunos e funcionários. Muitas prefeituras ainda não adotam soluções tecnológicas que poderiam agilizar esse atendimento.',
            approach: 'Planejo criar backend em .NET 8 WebAPI, app em React Native e alertas push.',
            contribution: 'Projeto proposto sem fins lucrativos. Ainda será submetido à prefeitura para autorização e avaliação de adesão antes da possível implementação.',
            technologies: ['ASP.NET Core 8', 'WebAPI', 'React Native', 'SQL Server', 'Push Notifications'],
            github: null,
            live: null,
            icon: <FaShieldAlt className="text-3xl mb-2 text-red-500" />,
            images: null,
            level: "Planejamento"
        }
    ]*/

    const openModal = (project) => {
        setSelectedProject(project)
        setModalOpen(true)
    }

    const closeModal = () => {
        setSelectedProject(null)
        setModalOpen(false)
    }

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Botões flutuantes */}
            <FloatingButtons />

            {/* NAVBAR */}
            <Navbar />

            {/* HERO */}
            <section
                id="inicio"
                className="relative min-h-screen md:h-screen flex items-start md:items-center justify-center bg-black/50 text-white px-6 pt-10 overflow-x-hidden"
            >
                <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl mx-auto">

                    {/* FOTO */}
                    <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-xl border-4 border-white/20 flex items-center justify-center shrink-0">
                        <img
                            src={BASE_PATH + "foto.jpg"}
                            alt="Elivelton Almeida"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* TEXTO */}
                    <div className="text-center md:text-left max-w-xl w-full">

                        <h1 className="text-5xl font-bold mb-3">
                            <Typewriter
                                words={["Elivelton Almeida"]}
                                typingSpeed={90}
                                loop={false}
                            />
                        </h1>

                        <p className="text-xl mb-4">
                            <Typewriter
                                words={[
                                    "Desenvolvedor Full Stack .NET",
                                    "Analista de Sistemas",
                                    "Especialista em Suporte TI"
                                ]}
                                typingSpeed={70}
                                deletingSpeed={40}
                                delay={2000}
                                loop={true}
                            />
                        </p>

                        <p className="text-gray-300 mb-8 break-words whitespace-normal leading-relaxed">
                            Profissional de Tecnologia da Informação com mais de 10 anos de experiência,
                            atuando em desenvolvimento de software, análise de sistemas e suporte técnico
                            em ambientes corporativos e industriais. Especialista no ecossistema .NET,
                            com experiência em desenvolvimento Full Stack, criação e integração de APIs,
                            manipulação e migração de dados e sustentação de aplicações.
                            Sólida vivência em levantamento de requisitos, modelagem de sistemas, integração
                            entre plataformas e resolução de incidentes, além de atuação com bancos de dados
                            relacionais e arquiteturas modernas como MVC e aplicações em camadas.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">

                            <Button
                                onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
                                className="flex items-center gap-2 transition-all duration-300 hover:brightness-125 hover:-translate-y-1 active:scale-95"
                            >
                                <FaIdBadge />
                                Ver Portfólio
                            </Button>

                            <Button
                                asChild
                                className="flex items-center gap-2 transition-all duration-300 hover:brightness-125 hover:-translate-y-1 active:scale-95"
                            >
                                <a
                                    href="https://wa.me/5515996697754"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    Fale comigo
                                </a>
                            </Button>

                            <Button
                                asChild
                                className="flex items-center gap-2 transition-all duration-300 hover:brightness-125 hover:-translate-y-1 active:scale-95"
                            >
                                <a href="mailto:eliveltoncarriel.almeida@hotmail.com">
                                    <FaEnvelope className="text-xl" />
                                    E-mail
                                </a>
                            </Button>

                            <Button
                                asChild
                                className="flex items-center gap-2 transition-all duration-300 hover:brightness-125 hover:-translate-y-1 active:scale-95"
                            >
                                <a
                                    href="https://www.linkedin.com/in/eliveltonalmeida/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className="text-xl" />
                                    LinkedIn
                                </a>
                            </Button>

                        </div>
                    </div>
                </div>

            </section>

            {/* TECNOLOGIAS */}
            <FadeInSection>
                <section className="relative bg-black text-gray-300 py-16 px-6 overflow-hidden">

                    {/* FUNDO GRADIENTE */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 animate-gradient"></div>

                    {/* CONTEÚDO */}
                    <div className="relative max-w-5xl mx-auto text-center">

                        <h2 className="text-3xl font-bold text-white mb-10 flex items-center justify-center gap-3">
                            <FaLaptopCode className="text-blue-400" />
                            Tecnologias
                        </h2>

                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">

                            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
                                <FaCode className="text-4xl text-purple-400" />
                                <span>C#</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
                                <SiDotnet className="text-4xl text-purple-500" />
                                <span>.NET</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
                                <FaCode className="text-4xl text-purple-500" />
                                <span>GeneXus</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
                                <FaReact className="text-4xl text-cyan-400" />
                                <span>React</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
                                <FaJs className="text-4xl text-yellow-400" />
                                <span>JavaScript</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
                                <FaHtml5 className="text-4xl text-orange-500" />
                                <span>HTML</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
                                <FaCss3Alt className="text-4xl text-blue-400" />
                                <span>CSS</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
                                <FaDatabase className="text-4xl text-green-400" />
                                <span>SQL Server</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
                                <SiMysql className="text-4xl text-blue-500" />
                                <span>MySQL</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
                                <SiPostgresql className="text-4xl text-blue-300" />
                                <span>PostgreSQL</span>
                            </div>

                        </div>

                    </div>

                </section>
            </FadeInSection>

            {/* Experiencias */}
            <FadeInSection>
                <section id="experiencias" className="py-20 container mx-auto px-4">
                    <div className="flex flex-col items-center gap-1">
                        <h2 className="text-4xl font-bold flex items-center gap-3">
                            <FiBriefcase className="text-blue-400" />
                            Experiências
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">Clique para ver as Responsabilidades</p>
                    </div>

                    {/* Barra Vertical Animada */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative border-l-2 border-blue-500 ml-4 origin-top"
                    >
                        {experiencias.map((exp, index) => (
                            <div key={index} className="mb-8 ml-6 relative">

                                {/* Bolinha Animada */}
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="absolute -left-4 top-4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"
                                ></motion.span>

                                {/* Botão */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full text-left"
                                >
                                    <h3 className="text-xl font-semibold flex items-center justify-between">
                                        {exp.cargo}
                                        <span
                                            className={`text-blue-600 text-xl transition-transform duration-300 ${aberto === index ? "rotate-180" : "rotate-0"
                                                }`}
                                        >
                                            <FiChevronDown />
                                        </span>
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {exp.empresa} · {exp.periodo} · {exp.local}
                                        <img
                                            src={`https://flagcdn.com/w40/${exp.pais}.png`}
                                            alt={exp.pais}
                                            className="w-5 h-4 rounded-sm"
                                        />
                                    </p>
                                </button>

                                {/* Conteúdo expandido */}
                                {aberto === index && (
                                    <div className="mt-3 p-4 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                                        <p className="text-gray-700 whitespace-pre-line">
                                            {exp.descricaoLonga ||
                                                "Em breve adicionarei mais detalhes sobre esta experiência."}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </section>
            </FadeInSection>

            {/* Formação */}
            <FadeInSection>
                <section id="formacoes" className="py-20 container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                        <FiBookOpen className="text-blue-400" />
                        Formação
                    </h2>

                    {/* Barra Vertical Animada */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative border-l-2 border-blue-500 ml-4 origin-top"
                    >
                        {formacoes.map((form, index) => (
                            <div key={index} className="mb-8 ml-6 relative">

                                {/* Bolinha Animada */}
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="absolute -left-4 top-4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"
                                ></motion.span>

                                {/* Botão */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full text-left"
                                >
                                    <h3 className="text-xl font-semibold flex items-center justify-between">
                                        {form.titulo}
                                        <span
                                            className={`text-blue-600 text-xl transition-transform duration-300 ${aberto === index ? "rotate-180" : "rotate-0"
                                                }`}
                                        >
                                            <FiChevronDown />
                                        </span>
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {form.instituicao} · {form.periodo}
                                        <img
                                            src={`https://flagcdn.com/w40/${form.pais}.png`}
                                            alt={form.pais}
                                            className="w-5 h-4 rounded-sm"
                                        />
                                    </p>
                                </button>

                                {/* Conteúdo expandido */}
                                {aberto === index && (
                                    <div className="mt-3 p-4 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                                        <p className="text-gray-700 whitespace-pre-line">
                                            {form.descricaoLonga}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </section>
            </FadeInSection>

            {/* Cursos e Certificados */}
            <FadeInSection>
                <section id="certificacoes" className="py-20 container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                        <FiAward className="text-blue-400" />
                        Certificados
                    </h2>

                    {/* Barra Vertical Animada */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative border-l-2 border-blue-500 ml-4 origin-top"
                    >
                        {certificados.map((cert, index) => (
                            <div key={index} className="mb-8 ml-6 relative">

                                {/* Bolinha Animada */}
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="absolute -left-4 top-4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"
                                ></motion.span>

                                <div>
                                    <h3 className="text-xl font-semibold flex items-center justify-between">
                                        {cert.nome}

                                        {/* Botão (abre certificado com ícone) */}
                                        {cert.link && (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <FaCertificate size={20} />
                                            </a>
                                        )}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {cert.org} · {cert.ano}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>
            </FadeInSection>

            {/* Skills com % */}
            <FadeInSection>
                {(isVisible) => (
                    <section id="skills" className="py-20 container mx-auto px-4">
                        <div className="flex flex-col items-center gap-1">
                            <h2 className="text-4xl font-bold flex items-center gap-3">
                                <FiCpu className="text-blue-400" />
                                Skills
                            </h2>
                            <p className="text-sm text-gray-500 mb-7">Minhas habilidades</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl">
                                    <div className="flex flex-col items-center mb-4">
                                        {skill.icon}
                                        <h3 className="text-xl font-semibold mt-2">{skill.title}</h3>
                                    </div>

                                    {/* texto de tecnologias */}
                                    <p className="text-sm text-gray-500 mb-4">{skill.items}</p>

                                    {/* Barra animada */}
                                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                        <div
                                            className="bg-blue-400 h-4 rounded-full transition-all duration-[1500ms] ease-out"
                                            style={{
                                                width: isVisible ? (skill.level || "70%") : "0%",
                                            }}
                                        ></div>
                                    </div>

                                    {/* texto do % */}
                                    <p className="text-sm text-right mt-1 font-medium">
                                        {skill.level || "70%"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </FadeInSection>

            {/* Estudando */}
            <FadeInSection>
                <section id="learning" className="py-20 container mx-auto px-4">
                    <div className="flex flex-col items-center gap-1">
                        <h2 className="text-4xl font-bold flex items-center gap-3">
                            <FaBookOpen className="text-blue-400" />
                            Aprendizado atual
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">Estudando atualmente</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {learning.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl">
                                <div className="flex flex-col items-center mb-4">
                                    {item.icon}
                                    <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                                </div>

                                <p className="text-sm text-gray-500 mb-4">{item.items}</p>

                                <p className="text-sm text-right mt-1 font-medium text-green-500">
                                    {item.level}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeInSection>

            {/* Projetos */}
            <FadeInSection>
                <section id="projetos" className="py-20 container mx-auto px-4">
                    <div className="flex flex-col items-center gap-1">
                        <h2 className="text-4xl font-bold flex items-center gap-3">
                            <FaLaptopCode className="text-blue-400" />
                            Projetos
                        </h2>
                        <p className="text-sm text-gray-500 mb-7">Clique para mais detalhes dos projetos</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projetos.map((proj, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
                                onClick={() => openModal(proj)}
                            >
                                <CardHeader>
                                    {proj.icon}
                                    <CardTitle>{proj.title}</CardTitle>
                                    <CardDescription>{proj.technologies.join(' • ')}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{proj.description}</p>
                                    <p className="text-sm text-right mt-2 font-medium text-green-500">
                                        {proj.level}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </FadeInSection>

            {/*
<FadeInSection>
    <section id="projetos-futuros" className="py-20 container mx-auto px-4">
        <div className="flex flex-col items-center gap-1">
            <h2 className="text-4xl font-bold flex items-center gap-3">
                <FaLaptopCode className="text-red-400" />
                Projetos Futuros
            </h2>
            <p className="text-sm text-gray-500">Ideias futuras</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
            {projetosFuturos.map((proj, index) => (
                <Card
                    key={index}
                    className="hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
                    onClick={() => openModal(proj)}
                >
                    <CardHeader>
                        {proj.icon}
                        <CardTitle>{proj.title}</CardTitle>

                        {proj.technologies && proj.technologies.length > 0 && (
                            <CardDescription>
                                {proj.technologies.join(' • ')}
                            </CardDescription>
                        )}
                    </CardHeader>

                    <CardContent>
                        <p>{proj.description}</p>

                        <p className="text-sm text-right mt-2 font-medium text-green-500">
                            {proj.level}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
</FadeInSection>
*/}

            {/* Modal Projetos */}
            {selectedProject && (
                <Modal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    title={selectedProject.title}
                    images={selectedProject.images}
                    onImageClick={setExpandedImage}   // ENVIA PARA O MODAL
                >
                    <div className="space-y-6">

                        {/* Problema */}
                        <div>
                            <p className="font-semibold flex items-center gap-2 text-lg">
                                <FaExclamationTriangle className="text-yellow-500" />
                                Problema / Objetivo
                            </p>
                            <p className="text-gray-700 mt-1">{selectedProject.problem}</p>
                        </div>

                        {/* Abordagem */}
                        <div>
                            <p className="font-semibold flex items-center gap-2 text-lg">
                                <FaTools className="text-blue-500" />
                                Abordagem / Processo
                            </p>
                            <p className="text-gray-700 mt-1">{selectedProject.approach}</p>
                        </div>

                        {/* Tecnologias */}
                        <div>
                            <p className="font-semibold flex items-center gap-2 text-lg">
                                <FaLaptopCode className="text-green-600" />
                                Tecnologias utilizadas
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {selectedProject.technologies?.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* GitHub */}
                        {selectedProject.github && (
                            <p className="flex items-center gap-2">
                                <FaGithub className="text-gray-800" />
                                Código-fonte:{" "}
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    className="text-blue-600 underline"
                                >
                                    GitHub
                                </a>
                            </p>
                        )}

                        {/* Projeto online */}
                        {selectedProject.live && (
                            <p className="flex items-center gap-2">
                                <FaExternalLinkAlt className="text-gray-800" />
                                Projeto online:{" "}
                                <a
                                    href={selectedProject.live}
                                    target="_blank"
                                    className="text-blue-600 underline"
                                >
                                    Acessar
                                </a>
                            </p>
                        )}

                        {/* Contribuição */}
                        <div>
                            <p className="font-semibold flex items-center gap-2 text-lg">
                                <FaUserCheck className="text-purple-600" />
                                Minha contribuição
                            </p>
                            <p className="text-gray-700 mt-1">{selectedProject.contribution}</p>
                        </div>

                        {/* Imagens */}
                        {selectedProject.images && selectedProject.images.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                {selectedProject.images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`Screenshot ${i}`}
                                        className="w-full h-32 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                        onClick={() => setExpandedImage(img)}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Vídeo local */}
                        {selectedProject.video && (
                            <div className="mt-4">
                                <video controls className="w-full rounded">
                                    <source src={selectedProject.video} type="video/mp4" />
                                    Seu navegador não suporta vídeo.
                                </video>
                            </div>
                        )}
                    </div>
                </Modal>
            )}

            {/* Miniatura das imagens Modal */}
            {/* Imagem expandida (Lightbox) */}
            {expandedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4 overflow-auto"
                    onClick={() => setExpandedImage(null)}
                >
                    <div className="relative">
                        <img
                            src={expandedImage}
                            alt="Imagem ampliada"
                            className="w-auto max-w-full h-auto max-h-[95vh] rounded shadow-xl cursor-zoom-in transition-transform duration-200"
                            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
                        />
                        {/* Botão de fechar */}
                        <button
                            className="absolute top-2 right-2 text-white text-2xl font-bold"
                            onClick={() => setExpandedImage(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            {/* Contato */}
            <FadeInSection>
                <section id="contato" className="py-20 container mx-auto px-4">
                    <div className="flex flex-col items-center gap-1">
                        <h2 className="text-4xl font-bold flex items-center gap-3">
                            <FiMail className="text-blue-400" />
                            Contato
                        </h2>
                        <p className="text-sm text-gray-500 mb-7">Entre em contato comigo</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <Card className="transition-transform hover:scale-105 hover:shadow-lg">
                            <CardHeader>
                                <CardTitle>Contate-me</CardTitle>
                                <CardDescription>
                                    Preencha o formulário abaixo com sua mensagem.

                                    {erro && (
                                        <p className="text-red-500 font-medium mt-2">
                                            {erro}
                                        </p>
                                    )}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Nome Completo</label>
                                    <Input placeholder="Seu nome completo" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Telefone</label>
                                    <Input placeholder="(11) 99999-9999" value={phone} onChange={e => setPhone(e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">E-mail</label>
                                    <Input type="email" placeholder="email@dominio.com" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Mensagem</label>
                                    <Textarea placeholder="Sua mensagem..." rows={4} value={message} onChange={e => setMessage(e.target.value)} />
                                </div>
                                <Button
                                    onClick={enviarParaWhatsapp}
                                    disabled={loading}
                                    className={`w-full bg-sky-600 text-white hover:bg-green-600 flex items-center justify-center transition-colors ${loading ? "opacity-70 cursor-not-allowed" : ""
                                        }`}
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <FaWhatsapp className="h-4 w-4 mr-2" />
                                            Enviar
                                        </>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </FadeInSection>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-white py-12 mt-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-10">

                        {/* LINKS */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Links</h4>
                            <ul className="space-y-2 text-gray-400">

                                <li>
                                    <a
                                        href="https://github.com/elivelton-almeida"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/eliveltonalmeida"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <FaLinkedin />
                                        LinkedIn
                                    </a>
                                </li>

                                <li className="flex flex-col gap-2">
                                    <a
                                        href="https://drive.google.com/file/d/1wddhVTZA1JKC7GoANBuFLydI53EM9DFz/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <FaBookOpen />
                                        Currículo (PT-BR)
                                    </a>
                                </li>

                                <a
                                    href="https://drive.google.com/file/d/1c6smU3mFDXZ425Uo9Pxx-Fmhsg1yl2We/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    <FaBookOpen />
                                    Resume (EN)
                                </a>

                            </ul>
                        </div>

                        {/* CONTATO */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contatos</h4>

                            <div className="space-y-2 text-gray-400">

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/5515996697754"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    <FaWhatsapp />
                                    +55 (15) 99669-7754
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:eliveltoncarriel.almeida@hotmail.com"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    <FaEnvelope />
                                    eliveltoncarriel.almeida@hotmail.com
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
                        <p>
                            &copy; {new Date().getFullYear()} Desenvolvido por Elivelton C. de Almeida
                        </p>

                        <a
                            href="https://github.com/elivelton-almeida"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 mt-2 hover:text-white transition-colors"
                        >
                            <FaGithub />
                            Implantado com GitHub Pages
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}