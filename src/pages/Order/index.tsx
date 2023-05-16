import { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import IconProf from '../../assets/icon-profstroy.png';
import DefStatus from '../../assets/default-status.svg';
import IconHtml from '../../assets/icon-html-filetype.svg';
import IconError from '../../assets/error.svg';

function Product() {
  const iconError = (error: string) => {
    if(error === ''){
        return null;
    }else{
        return <img className="ml-2 inline-block" src={IconError} width="38" height="38" alt="" />
    }
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">

            {/* Page content */}
            <div className="max-w-full min-w-full mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">

              {/* Content */}
              <div className="min-w-full">
                <div className="mb-3">
                  <Link className="text-sm font-medium text-secondary" to="/orders">&lt;- Обратно к списку заказов</Link>
                </div>
                <header className="mb-4">
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-[36px] flex flex-row items-center">
                   <img className="inline-block mr-2" src={IconProf} width="26" height="26" alt="N4-122344" />
                   N4-122344
                   {iconError('Ошибка в конструктиве в Профстрое')}
                  </h1>
                </header>
                {/* Product content */}
                <div>
                  <p className="text-base mb-4 flex flex-row">
                    <span className="block basis-48 font-semibold">Менеджер:</span>              
                    <span className="block">Сафонова Л.Д.</span>
                  </p>
                  <p className="text-base mb-4 flex flex-row">
                    <span className="block basis-48 font-semibold">Статус:</span>              
                    <span className="block">Запущен в производство на 21.03.2023</span>
                  </p>
                  <p className="text-base mb-4 flex flex-row">
                    <span className="block basis-48 font-semibold">Примечание:</span>              
                    <span className="block">
                        Доставка в УУ<br/>
                        Пленка<br/>
                        Ручки-скобы<br/>
                    </span>
                  </p>
                  <p className="text-base mb-4  flex flex-row">
                    <span className="block basis-48 font-semibold">Ваши отметки:</span>              
                    <span className="block">Отгрузка клиенту 16.03.</span>
                  </p>
                  <p className="text-base mb-4  flex flex-row">
                    <span className="block basis-48 font-semibold">Дата создания:</span>              
                    <span className="block">15.03.2023</span>
                  </p>
                  <p className="text-base flex flex-row mb-4">
                    <span className="block basis-48 font-semibold">Коммерческое предложение:</span>              
                    <span className="block">
                        <a target="_blank" href="/dealer-cabinet-frontend/assets/komm/komm.html">
                            <img className="inline-block mr-2" src={IconHtml} width="38" height="38" alt="N4-122344" />
                        </a>
                    </span>
                  </p>
                  
                </div>

                <hr className="my-6 border-t border-slate-200" />

                {/* Reviews */}
                <div>
                    <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">История</h2>
                  
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full divide-y divide-slate-200">
                            {/* Table header */}
                            <thead className=" text-slate-500 ">
                            <tr>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5">
                                    <div className="font-semibold text-left">Статус</div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-1/5">
                                    <div className="font-semibold text-left">Дата</div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">Инициатор</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="text-sm">
                                {/* Row */}
                                <tr className="hover:bg-[#F5F5F5] transition-all">
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div className="inline-flex font-medium rounded-[5px] text-left px-2.5 py-0.5 bg-[#F4F5F7]">
                                        <img className="mr-1" src={DefStatus} alt="" />
                                            Рассчитан
                                        </div>
                                    </td>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div>01.03.2023</div>
                                    </td>
                                    
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                        <div>Сафонова Л.Д.</div>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody className="text-sm">
                                <tr className="hover:bg-[#F5F5F5] transition-all">
                                    <td className="px-2 first:pl-5 last:pr-5 py-3">
                                        <div className="inline-flex font-medium rounded-[5px] text-left px-2.5 py-0.5 bg-[#F4F5F7]">
                                        <img className="mr-1" src={DefStatus} alt="" />
                                            В песочнице
                                        </div>
                                    </td>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div>02.03.2023</div>
                                    </td>
                                    
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                        <div>Сафонова Л.Д.</div>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody className="text-sm">
                                <tr className="hover:bg-[#F5F5F5] transition-all">
                                    <td className="px-2 first:pl-5 last:pr-5 py-3">
                                        <div className="inline-flex font-medium rounded-[5px] text-left px-2.5 py-0.5 bg-[#F4F5F7]">
                                        <img className="mr-1" src={DefStatus} alt="" />
                                            Ведется подготовка к производству
                                        </div>
                                    </td>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div>03.03.2023</div>
                                    </td>
                                    
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                        <div>Сафонова Л.Д.</div>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody className="text-sm">
                                <tr className="hover:bg-[#F5F5F5] transition-all">
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 ">
                                        <div className="inline-flex font-medium rounded-[5px] text-left px-2.5 py-0.5 bg-[#F4F5F7]">
                                            <img className="mr-1" src={DefStatus} alt="" />
                                            Запущен в производство на 21.04.2023 (ожидаемая дата отгрузки 22.04.2023)
                                        </div>
                                    </td>
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                        <div>05.03.2023</div>
                                    </td>
                                    
                                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                        <div>Климов З.А.</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="my-6 border-t border-slate-200" />

              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Product;