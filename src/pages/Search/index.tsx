import { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import DeleteButton from '../../partials/actions/DeleteButton';
import OrdersTable from '../../partials/orders/OrdersTable';

function SearchPanel() {

//   const [sync, setSync] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectedItems = (selectedItems: string[]) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="grow">
          {/* Panel body */}
          <div className="p-6 space-y-6">
              <div className="mb-3">
                <span className="text-sm font-medium text-secondary">Поиск</span>
              </div>
              <header className="mb-4">
                <div className="sm:flex sm:justify-between sm:items-center mb-8">
                  {/* Left: Title */}
                  <div className="mb-4 sm:mb-0">
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-[36px] flex flex-row items-center">Найден 1 заказ</h1>
                  </div>

                  {/* Right: Actions */}
                  <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                    {/* Delete button */}
                    <DeleteButton selectedItems={selectedItems} />                    
                  </div>
                </div>
              </header>
              {/* Block search */}
              <section>
              <div className=" ">
                  <div className="w-full bg-[#F5F5F5] p-8 flex items-center">
                    <input id="search" className="form-input w-full" type="email" />
                    <a className="btn-primary ml-3" href="#/search">Поиск</a>
                  </div>
              </div>
              </section>
              {/* Table search */}
              <OrdersTable selectedItems={handleSelectedItems}  />
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;