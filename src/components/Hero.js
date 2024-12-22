import React from 'react';
import { Github, Mail } from 'lucide-react';
import profileImage from './profil.png';

const Hero = () => {
  return (
    <header className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-pink-300 to-violet-300 rounded-2xl p-12 md:flex items-center justify-between">
          <div className="text-center md:text-left">
            <h1 
              className="text-5xl font-bold mb-4 text-gray-800 animate-fade-down"
            >
              안녕하세요,<br />구경선입니다!
            </h1>
            <p 
              className="text-xl mb-8 text-gray-600 animate-fade-down"
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
          
          <div className="hidden md:block relative">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
              <img 
                src={profileImage}
                alt="구경선 프로필" 
                className="w-[120%] h-[120%] object-cover object-center transform -translate-x-[0%] -translate-y-[10%]"
                style={{
                  objectPosition: '50% 0%' // 이미지 위치 조정
                }}
              />
            </div>
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-blue-500 opacity-20 blur-xl -top-4 -left-4"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
