import React from 'react';
import { Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative pt-24 pb-20 px-4 bg-gradient-to-r from-indigo-500 to-purple-700">
      <div className="max-w-6xl mx-auto text-center flex items-center justify-center h-full">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4 animate-fade-up">
            안녕하세요, 구경선입니다!
          </h1>
          <p className="text-xl mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            소프트웨어 & 지구환경과학 전공
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="mailto:koo0685@naver.com" 
              className="flex items-center justify-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail size={20} />
              이메일 보내기
            </a>
            <a 
              href="https://github.com/kookyungseon" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
              깃허브
            </a>
          </div>
        </div>

        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-purple-500 opacity-20 blur-xl"></div>
      </div>
    </header>
  );
};

export default Hero;
