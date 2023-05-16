import { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
// import Header from '../../partials/Header';

import Image from '../../assets/undefine.png';

function AccountPanel() {

  const [sync, setSync] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
        <div className="grow">
        {/* Panel body */}
        <div className="p-6 space-y-6">
            <span className="text-sm font-medium text-secondary" >Настройка пользователя</span>
            <h2 className="text-2xl text-slate-800 font-bold mb-5">Сафонова Л.Д.</h2>
            {/* Picture */}
            <section>
            <div className="flex items-center">
                <div className="mr-4">
                    <img className="w-20 h-20 rounded-full" src={Image} width="142px" height="142px" alt="User upload" />
                </div>
                <button className="btn-primary">Изменить</button>
            </div>
            </section>
            {/* Email */}
            <section>
                <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">Email</h2>
                <div className="text-sm">Отправить заявку на смену Email</div>
                <div className="flex flex-wrap mt-5">
                    <div className="mr-2">
                    <label className="sr-only" htmlFor="email">Business email</label>
                    <input id="email" className="form-input" type="email" />
                    </div>
                    <button className="btn-primary shadow-sm">Изменить</button>
                </div>
            </section>
            {/* Password */}
            <section>
            <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">Пароль</h2>
            <div className="text-sm">Вы можете изменить пароль.</div>
            <div className="mt-5">
                <button className="btn border-slate-200 shadow-sm href-primary">Установить новый пароль</button>
            </div>
            </section>
            
        </div>
        {/* Panel footer */}
        <footer>
            <div className="flex flex-col px-6 py-5 border-t border-slate-200">
            <div className="flex self-end">
                <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">Отменить</button>
                <button className="btn-primary ml-3">Сохранить изменения</button>
            </div>
            </div>
        </footer>
        </div>
      </div>
    </div>
  );
}

export default AccountPanel;