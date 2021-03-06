import React from 'react';
import {reduxForm} from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input, createField } from '../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import Redirect from 'react-router-dom/Redirect';
import style from './../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
return (
    <form onSubmit={handleSubmit}>

        {createField("Email", "email", [required], Input)}
        {createField("Password", "password", [required], Input, {type: "password"}) }
        {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me") }
        
       {captchaUrl && <img src={captchaUrl} />}

        {error && <div className={style.formSummaryError}>
{error}
        </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
)
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
props.login(formData.email, formData.password, formData.rememberMe);
    }

if (props.isAuth) {
    return <Redirect to={"profile"}/>
}

    return <div>
        <h1>login</h1>
       <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
    }

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);