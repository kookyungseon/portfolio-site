import React from 'react';
import { BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      school: "충북대학교",
      logo: "CBNU",
      departments: [
        {
          name: "지구환경과학과",
          period: "2020 ~ 현재",
          details: [
            "2020년 지구환경과학과 입학",
            "지구과학 및 지질학 전공",
            "지구물리학 및 지질구조론 학습",
          ]
        },
        {
          name: "소프트웨어학과",
          period: "2023 ~ 현재",
          details: [
            "2023년 소프트웨어학과 복수전공 승인",
            "알고리즘 및 자료구조 이론과 실습",
            "웹/앱 개발 및 서버 프로그래밍 학습"
          ]
        }
      ]
    },
    {
      school: "멀티캠퍼스",
      logo: "Multicampus",
      departments: [
        {
          name: "클라우드 융복합 과정",
          period: "2022",
          details: [
            "MSA 기반 클라우드 서비스 개발",
            "AWS, Docker, Kubernetes 실습",
            "프론트엔드/백엔드 개발 실무 프로젝트 수행"
          ]
        }
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 flex items-center gap-4">
          <BookOpen className="text-indigo-600" size={28} />
          학력사항
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">{edu.school}</h3>
              <div className="space-y-8">
                {edu.departments.map((dept, deptIndex) => (
                  <div key={deptIndex} className="border-l-4 border-indigo-600 pl-4">
                    <h4 className="text-xl font-semibold text-indigo-600 mb-2">{dept.name}</h4>
                    <p className="text-gray-600 mt-1">{dept.period}</p>
                    <ul className="mt-4 space-y-2">
                      {dept.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className="text-gray-700 flex items-center gap-2 before:content-['•'] before:text-indigo-600"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
