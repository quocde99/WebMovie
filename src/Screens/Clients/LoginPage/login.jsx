import React from 'react'
import loginimg from "../../../Assets/Img/img-01.png";
import * as yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { Alert } from 'antd';
import {useDispatch,useSelector} from "react-redux"
import { signIn } from "../../../Redux/Actions/user";
import {Redirect } from "react-router-dom"
import { message } from 'antd';
const DangNhap = yup.object().shape({
    taiKhoan: yup.string().required('Tên đăng nhập bắt buộc nhập !'),
    matKhau: yup.string().required('Mật khẩu bắt buộc nhập !')
  })
export default function LoginPageClient(props) {
    const {handleChangeScreen} = props;
    const dispatch = useDispatch();
    const creadential = useSelector(state => state.UserReducer.cretidentals);
    if(creadential!==null){
       return <Redirect to="/" />
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={loginimg} alt="IMG" />
                    </div>
                    <Formik initialValues={{
                        taiKhoan: "",
                        matKhau: ""
                    }}
                    onSubmit={(value) => {
                        dispatch(signIn(value))
                      }}
                        validationSchema={DangNhap}
                    >
                        <Form className="login100-form validate-form">
                            <span className="login100-form-title">
                                Đăng Nhập
        </span>
                            <div className="wrap-input100 validate-input" >
                                <Field className="input100" type="text" name="taiKhoan" placeholder="Tên đăng nhập" />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                </span>
                                <div className="error">
                                    <ErrorMessage
                                        name="taiKhoan">
                                        {
                                            (msg) => <Alert message={msg} type="error" />
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="wrap-input100 validate-input">
                                <Field className="input100" type="password" name="matKhau" placeholder="Mật khẩu" />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true" />
                                </span>
                                <div className="error">
                                    <ErrorMessage
                                        name="matKhau">
                                        {
                                            (msg) => <Alert message={msg} type="error" />
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                           
                            <button type="submit" 
                            className="login100-form-btn"> 
                                   Đăng nhập
                            </button>
                           
                            </div>
                            <div className="text-center p-t-12">
                                <span className="txt1">
                                    Quên 
          </span>
                                <a className="txt2">
                                    Tài khoản / Mật khẩu?
          </a>
                            </div>
                            <div className="text-center p-t-136">
                                <a className="txt2" onClick={() => { handleChangeScreen() }} >
                                    Tạo tài khoản
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                                </a>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>

    )
}
