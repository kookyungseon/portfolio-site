import React from 'react';
import { Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <header className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-700 rounded-2xl p-12 md:flex items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 text-white animate-fade-down">
              안녕하세요,<br />구경선입니다!
            </h1>
            <p 
              className="text-xl mb-8 text-gray-200 animate-fade-down"
              style={{ animationDelay: '0.2s' }}
            >
              소프트웨어 & 지구환경과학 전공
            </p>
            <div 
              className="flex flex-col md:flex-row gap-4 justify-center md:justify-start animate-fade-down"
              style={{ animationDelay: '0.4s' }}
            >
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
          
          {/* 대체된 프로필 이미지 섹션 */}
          <div className="hidden md:block relative flex justify-center items-center w-64 h-64 rounded-full bg-gradient-to-r from-indigo-600 to-purple-800 shadow-2xl">
            <div className="w-32 h-32 bg-white rounded-full flex justify-center items-center shadow-xl">
              <span className="text-4xl font-semibold text-gray-800">KG</span>
            </div>
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-purple-500 opacity-20 blur-xl -top-4 -left-4"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
