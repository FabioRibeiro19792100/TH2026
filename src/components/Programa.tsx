import { Bot, Layers, Cpu, Database, Server, Shield, Workflow, Code2 } from "lucide-react";

export const Programa = () => {
  const topics = [
    {
      icon: Bot,
      title: "Agentes Autônomos",
      questions: [
        "Como construir agentes que realmente funcionam em produção?",
        "Quando vale a pena usar agentes vs modelos tradicionais?",
        "Quais os limites práticos dos agentes hoje?"
      ]
    },
    {
      icon: Layers,
      title: "Modelos Multimodais",
      questions: [
        "Como escolher entre modelos especializados e multimodais?",
        "Que casos de uso se beneficiam de múltiplas modalidades?",
        "Como integrar multimodalidade sem explodir custos?"
      ]
    },
    {
      icon: Cpu,
      title: "Small AI e Edge",
      questions: [
        "Quando rodar modelos localmente faz sentido pro negócio?",
        "Como balancear performance e privacidade?",
        "Quais aplicações ganham mais rodando na borda?"
      ]
    },
    {
      icon: Database,
      title: "RAG",
      questions: [
        "Como estruturar dados para RAG funcionar bem?",
        "Quais os erros mais comuns na implementação?",
        "RAG resolve ou só adia o problema de dados ruins?"
      ]
    },
    {
      icon: Server,
      title: "Infraestrutura",
      questions: [
        "Como escalar inferência sem quebrar o orçamento?",
        "Que arquitetura de dados realmente sustenta IA em produção?",
        "Vale a pena montar infra própria ou usar serviços?"
      ]
    },
    {
      icon: Shield,
      title: "Governança",
      questions: [
        "Como garantir que IA não cria mais risco que valor?",
        "Quais controles são essenciais vs teatrais?",
        "Como estruturar governança sem travar inovação?"
      ]
    },
    {
      icon: Workflow,
      title: "Workflows",
      questions: [
        "Por que tantos pilotos não viram produtos?",
        "Como redesenhar processos pra aproveitar IA de verdade?",
        "Onde IA transforma vs onde só automatiza?"
      ]
    },
    {
      icon: Code2,
      title: "Open vs Closed",
      questions: [
        "Quando open source é melhor que modelos comerciais?",
        "Como avaliar tradeoffs de custo, controle e performance?",
        "Vale a pena fazer fine-tuning ou usar modelos prontos?"
      ]
    }
  ];

  return (
    <section id="programa" className="py-32 md:py-48 px-6 border-t-[3px] border-black font-sans relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)',
        }}
      ></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Título da seção */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-8xl font-light tracking-tight">
            o programa
          </h2>
          <h2 className="text-5xl md:text-8xl font-light tracking-tight">
            <span className="relative inline-block">
              tech hall
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-[#d4ff00]"></span>
            </span>
          </h2>
        </div>

        {/* Grid 2x4 - duas linhas de 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div key={index} className="space-y-6">
                <Icon className="w-16 h-16 stroke-[1]" />
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  {topic.title}
                </h3>
                <ul className="space-y-3">
                  {topic.questions.map((question, qIndex) => (
                    <li key={qIndex} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Nota sobre definição dos temas */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
            A sequência de temas e especialistas será definida ao longo do ciclo pelos alumni do Tech Hall, conforme o contexto e as necessidades do grupo.
          </p>
        </div>
      </div>
    </section>
  );
};
