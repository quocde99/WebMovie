import React from 'react'
import loginimg from "../../../Assets/Img/img-01.png";
import * as yup from "yup";
import { signUp } from "../../../Redux/Actions/user";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from 'antd';
import {Redirect } from "react-router-dom"

const DangKy = yup.object().shape({
    taiKhoan: yup.string().required("Bắt buộc nhập !"),
    matKhau: yup.string().required("Bắt buộc nhập !").min(6, "Tối thiểu 6 kí tự"),
    email: yup.string().required("Bắt buộc nhập !").email("Không đúng định dạng email"),
    soDt: yup.string().required("Bắt buộc nhập !").matches(/[0-9]+$/, "Không đúng định dạnh số điện thoại"),
    hoTen: yup.string().required("Bắt buộc nhập !"),
})
export default function Signup(props) {
    const { handleChangeScreen } = props;
    const dispatch = useDispatch();
    const creadential = useSelector(state => state.UserReducer.cretidentals);
    if(creadential!==null){
        return <Redirect to="/" />
     }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-signup">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={loginimg} alt="IMG" />
                    </div>
                    <Formik
                        initialValues={{
                            taiKhoan: "",
                            matKhau: "",
                            email: "",
                            soDt: "",
                            maNhom: "GP04",
                            maLoaiNguoiDung: "KhachHang",
                            hoTen: ""
                        }}
                        onSubmit={(value) => {
                            dispatch(signUp(value))
                        }}
                        validationSchema={DangKy}
                        render={
                            (formikProps) => {
                                return <Form className="login100-form validate-form">
                                    <span className="login100-form-title">
                                        Đăng Ký
      </span>
                                    <div className="wrap-input100 validate-input" >
                                        <Field className="input100" type="text"
                                            onChange={formikProps.handleChange}
                                            name="taiKhoan" placeholder="Tên đăng nhập" />
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
                                        <Field className="input100" type="password"
                                            onChange={formikProps.handleChange}
                                            name="matKhau" placeholder="Mật khẩu" />
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
                                    <div className="wrap-input100 validate-input">
                                        <Field className="input100" type="text"
                                            onChange={formikProps.handleChange}
                                            name="hoTen" placeholder="Họ tên" />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                        <div className="error">
                                            <ErrorMessage
                                                name="hoTen">
                                                {
                                                    (msg) => <Alert message={msg} type="error" />
                                                }
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                        <Field className="input100" type="Email"
                                            onChange={formikProps.handleChange}
                                            name="email" placeholder="Email" />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                        <div className="error">
                                            <ErrorMessage
                                                name="email">
                                                {
                                                    (msg) => <Alert message={msg} type="error" />
                                                }
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                        <Field className="input100" type="tel"
                                            onChange={formikProps.handleChange}
                                            name="soDt" placeholder="Số điện thoại" />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                        <div className="error">
                                            <ErrorMessage
                                                name="soDt">
                                                {
                                                    (msg) => <Alert message={msg} type="error" />
                                                }
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <button type="submit" 
                                        className="login100-form-btn">
                                            Đăng ký
                                        </button>
                                    </div>
                                    <div className="text-center p-t-12">
                                        <span className="txt1">Forgot</span>
                                        <a className="txt2" href="#">Username / Password?</a>
                                    </div>
                                    <div className="text-center p-t-136">
                                        <a className="txt2" onClick={() => { handleChangeScreen() }}>
                                            Đăng nhập
          <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                                        </a>
                                    </div>
                                </Form>
                            }
                        }
                    >
                    </Formik>

                </div>
            </div>
        </div>
    )
}
