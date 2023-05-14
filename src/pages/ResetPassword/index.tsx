import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.svg';

function ResetPassword() {
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
              <h1 className="text-3xl text-slate-800 font-bold mb-6">Сброс пароля</h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-rose-500">*</span></label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="btn-primary whitespace-nowrap">Отправить на почту ссылку на сброс</button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>

    </main>
  );
}

export default ResetPassword;