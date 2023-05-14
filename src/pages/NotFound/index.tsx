import { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
// import Header from '../../partials/Header';

import NotFoundImage from '../../assets/404.png';

function PageNotFound() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">

        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <div className="max-w-2xl m-auto mt-16">

              <div className="text-center px-4">
                <div className="inline-flex mb-8">
                  <img src={NotFoundImage} width="300" alt="404" />
                </div>
                <div className="mb-6 text-4xl">Ничего не найдено</div>
                <div className="mb-6">Попробуйте вернуться на главную страницу</div>
                <Link to="/" className="btn-primary px-4">На главную</Link>
              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default PageNotFound;