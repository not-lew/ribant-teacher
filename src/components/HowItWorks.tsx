
import { Video, Users, BookOpen, Music, MessageSquare, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
  const features = [
    {
      icon: Video,
      title: "Plataforma: Google Meet",
      description: "Aulas online com qualidade profissional, onde você quiser."
    },
    {
      icon: Users,
      title: "Foco total em você",
      description: "Aulas desenhadas sob medida, adaptadas ao seu nível, ritmo e objetivo."
    },
    {
      icon: MessageSquare,
      title: "Conversação real desde o início",
      description: "Aulas dinâmicas com atividades práticas e situações reais."
    },
    {
      icon: BookOpen,
      title: "Material incluso",
      description: "Acesso exclusivo a materiais, vocabulário, gramática e cultura."
    },
    {
      icon: Music,
      title: "Cultura e contexto",
      description: "Música, vídeos, leitura e oralidade com temas atuais."
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento contínuo",
      description: "Feedback individual e suporte via WhatsApp."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como funcionam as <span className="text-[#cc00cc]">aulas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Metodologia comprovada que já transformou a vida de centenas de alunos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-[#cc00cc]/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-[#cc00cc]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
