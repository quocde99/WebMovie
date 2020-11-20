import React from 'react'
import loginimg from "../../../Assets/Img/img-01.png";
import * as yup from "yup";
import { signUp } from "../../../Redux/Actions/user";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

const DangKy = yup.object().shape({
    taiKhoan: yup.string().required("Bắt buộc nhập !"),
    matKhau: yup.string().required("Bắt buộc nhập !").min(6,"Tối thiểu 6 kí tự"),
    email: yup.string().required("Bắt buộc nhập !").email("Không phải email"),
    soDt: yup.string().required("Bắt buộc nhập !").matches(/[0-9]+$/,"Không đúng định dạnh số điện thoại"),
    hoTen: yup.string().required("Bắt buộc nhập !"),
  })
export default function Signup(props) {
    const {handleChangeScreen} = props;
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-signup">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={loginimg} alt="IMG" />
                    </div>
                    <Field
                      initialValues={{
                        taiKhoan: "",
                        matKhau: "",
                        email: "",
                        soDt: "",
                        maNhom: "GP04",
                        maLoaiNguoiDung: "KhachHang",
                        hoTen: ""
                      }}
                      validationSchema={DangKy}
                      render={
                          ()=>{
                              return <Form className="login100-form validate-form">
                              <span className="login100-form-title">
                                  Đăng Ký
      </span>
                              <div className="wrap-input100 validate-input" >
                                  <Field className="input100" type="text" name="taiKhoan" placeholder="Tên đăng nhập" />
                                  <span className="focus-input100" />
                                  <span className="symbol-input100">
                                      <i className="fa fa-envelope" aria-hidden="true" />
                                  </span>
                              </div>
                              <div className="wrap-input100 validate-input">
                                  <Field className="input100" type="password" name="matKhau" placeholder="Mật khẩu" />
                                  <span className="focus-input100" />
                                  <span className="symbol-input100">
                                      <i className="fa fa-lock" aria-hidden="true" />
                                  </span>
                              </div>
                              <div className="wrap-input100 validate-input">
                                  <Field className="input100" type="text" name="hoTen" placeholder="Họ tên" />
                                  <span className="focus-input100" />
                                  <span className="symbol-input100">
                                      <i className="fa fa-lock" aria-hidden="true" />
                                  </span>
                              </div>
                              <div className="wrap-input100 validate-input">
                                  <Field className="input100" type="Email" name="email" placeholder="Email" />
                                  <span className="focus-input100" />
                                  <span className="symbol-input100">
                                      <i className="fa fa-lock" aria-hidden="true" />
                                  </span>
                              </div>
                              <div className="wrap-input100 validate-input">
                                  <Field className="input100" type="tel" name="soDt" placeholder="Số điện thoại" />
                                  <span className="focus-input100" />
                                  <span className="symbol-input100">
                                      <i className="fa fa-lock" aria-hidden="true" />
                                  </span>
                              </div>
                              <div className="container-login100-form-btn">
                                  <button className="login100-form-btn">
                                      Đăng ký
        </button>
                              </div>
                              <div className="text-center p-t-12">
                                  <span className="txt1">
                                      Forgot
        </span>
                                  <a className="txt2" href="#">
                                      Username / Password?
        </a>
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
                    </Field>

                </div>
            </div>
        </div>
    )
}
