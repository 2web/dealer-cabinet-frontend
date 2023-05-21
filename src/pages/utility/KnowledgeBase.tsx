import { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function KnowledgeBase() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>

          {/* Search area */}
          <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16 bg-regal-demetra overflow-hidden">
            {/* Glow */}
            <div className="absolute pointer-events-none" aria-hidden="true">
              <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="ill-a">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#FFF" stopOpacity="0" offset="100%" />
                  </radialGradient>
                </defs>
                
              </svg>
            </div>
            {/* Illustration */}
            <div className="relative w-full max-w-2xl mx-auto text-center">
              <div className="mb-5">
                <h1 className="text-2xl md:text-3xl text-white font-bold">Чем мы можем вам помочь?</h1>
              </div>
              <form className="relative">
                <label htmlFor="action-search" className="sr-only">
                  Поиск
                </label>
                <input id="action-search" className="form-input pl-9 py-3 focus:border-slate-300 w-full" type="search" />
                <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                  <svg
                    className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Sections */}
            <div className="space-y-8">

              {/* Popular Topics */}
              <div>
                <div className="mb-5">
                  <h2 className="text-xl text-slate-800 font-bold">Популярные темы</h2>
                </div>
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:sidebar-expanded:grid-cols-2 xl:sidebar-expanded:grid-cols-4 gap-6">
                  
                  {/* Item */}
                  <div className="bg-slate-100 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon1-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fillRule="nonzero" fill="none">
                              <path
                                d="M19.236 21.995h-3.333c-.46 0-.833.352-.833.786v9.428c0 .434.373.786.833.786h4.167V22.78c0-.434-.374-.786-.834-.786Z"
                                fill="#4F46E5"
                                opacity=".88"
                              />
                              <path
                                d="M34.234 20.073a2.393 2.393 0 0 0-.735-.116h-5v-2.609c0-3.325-2.157-4.297-3.298-4.347a.828.828 0 0 0-.611.24.888.888 0 0 0-.257.63v4.032L21 22.077v10.924h10.19c1.1.005 2.073-.744 2.392-1.842l2.308-7.826a2.711 2.711 0 0 0-.181-1.988 2.528 2.528 0 0 0-1.475-1.272Z"
                                fill="url(#icon1-a)"
                                transform="translate(-.93 -.005)"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">Как начать</h3>
                        <div className="text-sm">Основные шаги для работы<br></br> в личном кабинете</div>
                      </div>
                      {/* Link */}
                      <div>
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">
                          Перейти -&gt;
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  
                  {/* Item */}
                  
                  {/* Item */}
                  <div className="bg-slate-100 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon5-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fillRule="nonzero" fill="none">
                              <path
                                d="M31.074 20.692a5.516 5.516 0 0 0-7.878-1.107c-.172.133-.311.293-.463.44-.106-.184-.196-.375-.324-.55a5.516 5.516 0 0 0-7.878-1.108c-2.49 1.932-3 5.56-1.14 8.103l7.142 9.207 9.402-6.882c2.49-1.931 3-5.56 1.139-8.103Z"
                                fill="#4F46E5"
                                opacity=".88"
                              />
                              <path
                                d="M20.353 2.998a5.516 5.516 0 0 0-7.955 0c-.152.156-.268.333-.398.5-.13-.167-.246-.344-.398-.5a5.516 5.516 0 0 0-7.955 0c-2.196 2.26-2.196 5.924 0 8.183L12 19.304l8.353-8.123c2.196-2.26 2.196-5.924 0-8.183Z"
                                fill="url(#icon5-a)"
                                transform="rotate(16 -34.482 60.533)"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">Поддержка</h3>
                        <div className="text-sm">&nbsp;</div>
                      </div>
                      {/* Link */}
                      <div>
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">
                          Перейти -&gt;
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Item */}
                  
                  {/* Item */}
                  
                  {/* Item */}
                  <div className="bg-slate-100 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon8-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fillRule="nonzero" fill="none">
                              <path
                                d="M18.648 35.069c.232.217.46.322.798.31.337-.012.558-.132.775-.365l1.95-2.094c1.028.414 2.504.813 4.076.758 1.798-.063 3.688-.692 5.426-2.441 3.686-3.956 4.05-12.862 4.038-13.199-.012-.337-.136-.67-.368-.888-.233-.217-.574-.317-.91-.306-.338.012-9.405 1.23-12.875 4.953-2.168 2.327-2.41 5.037-1.883 7.27l6.61-3.946-7.804 8.378a1.206 1.206 0 0 0 .167 1.57Z"
                                fill="#554FE8"
                              />
                              <path
                                d="M.353 17.663c.225.224.45.337.787.337s.562-.113.786-.337l2.024-2.026c1.011.45 2.473.9 4.046.9 1.799 0 3.71-.562 5.508-2.25C17.326 10.462 18 1.575 18 1.237c0-.337-.112-.675-.337-.9C17.438.113 17.1 0 16.763 0c-.337 0-9.441.9-13.038 4.5-2.248 2.25-2.585 4.95-2.136 7.2l6.744-3.712-8.093 8.1a1.206 1.206 0 0 0 .113 1.575Z"
                                fill="url(#icon8-a)"
                                transform="rotate(13 -42.427 83.827)"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">Связаться с нами</h3>
                        <div className="text-sm">&nbsp;</div>
                      </div>
                      {/* Link */}
                      <div>
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">
                          Перейти -&gt;
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default KnowledgeBase;