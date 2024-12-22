import React from 'react';
import { Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative w-full h-screen bg-gradient-to-r from-teal-400 to-purple-600 flex items-center justify-center text-white">
      <div className="text-center px-6 md:px-12 max-w-4xl w-full relative z-10">
        <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-tight animate-slide-up">
          안녕하세요, <br />
          구경선입니다.
        </h1>
        <p className="text-2xl mb-8 font-semibold opacity-80 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          소프트웨어 & 지구환경과학 전공
        </p>
        
        <div className="flex justify-center gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {/* 이메일 보내기 버튼 */}
          <a
            href="mailto:koo0685@naver.com" // 이메일 주소 링크
            className="flex items-center px-8 py-4 text-lg font-medium bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <Mail size={20} className="mr-2" /> 이메일 보내기
          </a>
          
          {/* GitHub 링크 버튼 */}
          <a
            href="https://github.com/kookyungseon" // GitHub 링크
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-4 text-lg font-medium bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            <Github size={20} className="mr-2" /> 깃허브
          </a>
        </div>
      </div>

      {/* 배경에 추가된 스타일 - 부드러운 블러 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-600 opacity-30 blur-xl z-0"></div>
    </header>
  );
};

export default Hero;
