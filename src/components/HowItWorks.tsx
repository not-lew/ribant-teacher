
import { Video, Users, BookOpen, Music, MessageSquare, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
  const features = [
    {
      icon: Video,
      title: "Plataforma: Google Meet",
      description: "Aulas online ao vivo para você acessar de onde estiver."
    },
    {
      icon: Users,
      title: "Foco total em você",
      description: "Aulas personalizadas. Adaptadas ao seu nível e ritmo."
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
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Como funcionam as minhas <span className="text-[#cc00cc]">aulas</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Metodologia comprovada que já transformou a vida de milhares de alunos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#cc00cc]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-[#cc00cc]" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">{feature.title}</h3>
              <p className="text-sm sm:text-sm lg:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
