import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.svg';

function Signup() {
  return (
    <main className="bg-white">

      <div className="relative md:flex">

        {/* Content */}
        <div className="md:w-1/2 flex-auto">
          <div className="min-h-screen h-full flex flex-col after:flex-1">

            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-6">
                {/* Logo */}
                <Link className="block" to="/">
                <img className="h-8 w-auto" src={LogoImage} alt="" />
                </Link>
              </div>
            </div>

            <div className="max-w-sm mx-auto px-4 py-8">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">Создать аккаунт</h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-rose-500">*</span></label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Полное имя <span className="text-rose-500">*</span></label>
                    <input id="name" className="form-input w-full" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="role">Ваша роль <span className="text-rose-500">*</span></label>
                    <select id="role" className="form-select w-full">
                      <option>Дилер</option>
                      <option>Менеджер</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password">Пароль</label>
                    <input id="password" className="form-input w-full" type="password" autoComplete="on" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="checkbox-primary" />
                      <span className="text-sm ml-2">Сообщать о новостях продукта.</span>
                    </label>
                  </div>
                  <Link className="btn-primary ml-3 whitespace-nowrap" to="/">Создать</Link>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm text-center text-[#BEBEBF]">
                  Есть аккаунт? <Link className="font-medium href-primary" to="/signin">Войти</Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </main>
  );
}

export default Signup;