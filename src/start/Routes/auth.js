/*
  |--------------------------------------------------------------------------
  | Auth
  |--------------------------------------------------------------------------
  */

import ForgetPassword from "../../app/pages/auth/ForgotPassword";
import Login from "../../app/pages/auth/Login";
import Register from "../../app/pages/auth/Register";
import RegisterConfirmation from "../../app/pages/auth/RegisterConfirmation";
import PasswordReset from "../../app/pages/auth/ResetPassword";

export default [
    {
        path: '/verify',
        name: 'Verify',
        icon: null,
        component: RegisterConfirmation,
        private: false,
        exact: true,
    },
    {
        path: '/login',
        name: 'login',
        icon: null,
        component: Login,
        private: false,
        exact: true,
    },
    {
        path: '/recuperar-senha',
        name: 'RecuperarSenha',
        icon: null,
        component: ForgetPassword,
        private: false,
        exact: true,
    },
    {
        path: '/password/reset',
        name: 'RecuperarSenha',
        icon: null,
        component: PasswordReset,
        private: false,
        exact: true,
    },
    {
        path: '/cadastro',
        name: 'Register',
        icon: null,
        component: Register,
        private: false,
        exact: true,
    },
    
]