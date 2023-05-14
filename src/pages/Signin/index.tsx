import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.svg';

function Signin() {
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
              <h1 className="text-3xl text-slate-800 font-bold mb-6">С возвращением</h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password">Пароль</label>
                    <input id="password" className="form-input w-full" type="password" autoComplete="on" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <Link className="text-sm href-primary underline hover:no-underline" to="/reset-password">Забыли пароль?</Link>
                  </div>
                  <Link className="btn-primary ml-3" to="/orders">Войти</Link>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200 ">
                <div className="text-sm text-center text-[#BEBEBF]">
                  Нет аккаунта? <Link className="font-medium href-primary" to="/signup">Зарегистрироваться</Link>
                </div>
                {/* Warning */}
                {/* <div className="mt-5">
                  <div className="bg-amber-100 text-amber-600 px-3 py-2 rounded">
                    <svg className="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      To support you during the pandemic super pro features are free until March 31st.
                    </span>
                  </div>
                </div> */}
              </div>
            </div>

          </div>
        </div>

      </div>

    </main>
  );
}

export default Signin;