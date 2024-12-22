import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "픽셀아이 주식회사",
      position: "소프트웨어 개발 인턴",
      period: "2024.07.29 ~ 2024.08.26",
      description: "유학 관련 웹사이트 리뉴얼 프로젝트에 참여하여 다국어 지원 시스템 개발 및 성능 최적화를 수행했습니다.",
      achievements: [
        "그누보드와 FTP를 활용한 유학 사이트 리뉴얼 작업 수행",
        "자동 번역 기능 개발 및 고정 문구 번역 시스템 구현",
        "번역 API 연동 및 번역 지연 최소화를 위한 로직 설계",
        "다국어 지원 시스템의 성능 최적화 및 사용자 경험 개선"
      ],
      technologies: ["PHP", "GnuBoard", "Translation API", "FTP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 flex items-center gap-4">
          <Briefcase className="text-indigo-600" size={28} />
          경력사항
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:translate-y-1 transform">
              <div className="md:flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{exp.company}</h3>
                  <p className="text-indigo-600 mt-1">{exp.position}</p>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <Calendar className="text-indigo-600" size={16} />
                  <span className="text-gray-600">{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{exp.description}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-800">주요 성과:</h4>
                <ul className="space-y-2 text-gray-600">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={16} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">사용 기술:</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-indigo-600 bg-opacity-10 text-indigo-600 text-sm px-4 py-2 rounded-full transition-colors duration-300 hover:bg-indigo-600 hover:text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
