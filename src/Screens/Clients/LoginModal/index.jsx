import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { Alert } from 'antd';
import { FacebookOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons"
import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signIn,signUp } from "../../../Redux/Actions/user";
import * as yup from "yup";


const DangNhap = yup.object().shape({
  taiKhoan: yup.string().required('Bắt buộc nhập'),
  matKhau: yup.string().required('Bắt buộc nhập')
})
const DangKy = yup.object().shape({
  taiKhoan: yup.string().required("Bắt buộc nhập !"),
  matKhau: yup.string().required("Bắt buộc nhập !").min(6,"Tối thiểu 6 kí tự"),
  email: yup.string().required("Bắt buộc nhập !").email("Không phải email"),
  soDt: yup.string().required("Bắt buộc nhập !").matches(/[0-9]+$/,"Không đúng định dạnh số điện thoại"),
  hoTen: yup.string().required("Bắt buộc nhập !"),
})
export default function Login(props) {
  const dispatch = useDispatch();
  const { show, closePopup } = props;
  const erorrDangNhap = useSelector(state => state.UserReducer.error);
  const [login, setLogin] = useState(true);
  if (login) {
    return (

      <Modal className="login"
        size="sm"
        show={show}
        onHide={() => closePopup(!show)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="login__title">
            <h5>Đăng nhập</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="social">
            <a className="circle github" href="#">
              <GithubOutlined />
            </a>
            <a id="google_login" className="circle google" href="#">
              <GoogleOutlined />
            </a>
            <a id="facebook_login" className="circle facebook" href="#">
              <FacebookOutlined />
            </a>
          </div>
          <div className="form loginBox">
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: ""
              }}
              onSubmit={(value) => {
                dispatch(signIn(value))
              }}
              validationSchema={DangNhap}
              render={({ handleChange }) => {
                return <Form method action acceptCharset="UTF-8">
                  <Field id="text" className="form-control"
                    onChange={handleChange}
                    name="taiKhoan" type="text" placeholder="Tên đăng nhập" />
                  <div className="error">
                    <ErrorMessage
                      name="taiKhoan">
                      {
                        (msg) => <Alert message={msg} type="error" />
                      }
                    </ErrorMessage>
                  </div>
                  <Field id="password" className="form-control"
                    onChange={handleChange}
                    name="matKhau" type="password" placeholder="Mật Khẩu" />
                  <div className="error">
                    <ErrorMessage
                      name="matKhau">
                      {
                        (msg) => <Alert message={msg} type="error" />
                      }
                    </ErrorMessage>
                  </div>
                  {
                    erorrDangNhap ? <div>
                      <Alert message='Tên đăng nhập hoặc mật khẩu không hợp lệ !'></Alert>
                    </div> : null
                  }
                  <button
                    className="btn btn-default btn-login"
                    type="submit"
                  >Đăng Nhập</button>
                </Form>
              }}
            />
          </div>
          <div className="text__register">
            <p>Nếu bạn chưa có tài khoản ?<a onClick={() => { setLogin(false) }}>Đăng ký</a></p>
          </div>
        </Modal.Body>
      </Modal>

    )
  }
  else {
    return (
      <Modal className="login"
        size="sm"
        show={show}
        onHide={() => closePopup(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm" className="login__title">
            <h5>Đăng ký</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="form loginBox">
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
                //console.log(value);
              }}
              validationSchema={DangKy}
              render={(formikProps) => {
                return <Form method action acceptCharset="UTF-8">
                  <Field className="form-control" type="text"
                    placeholder="Tên tài khoản" name="taiKhoan"
                    onChange={formikProps.handleChange} />
                  <div className="error">
                    <ErrorMessage
                      name="taiKhoan">
                      {
                        (msg) => <Alert message={msg} type="error" />
                      }
                    </ErrorMessage>
                  </div>
                  <Field className="form-control" type="password"
                    placeholder="Mật Khẩu" name="matKhau"
                    onChange={formikProps.handleChange}
                  />
                  <div className="error">
                    <ErrorMessage
                      name="matKhau">
                      {
                        (msg) => <Alert message={msg} type="error" />
                      }
                    </ErrorMessage>
                  </div>
                  <Field className="form-control" type="text"
                    placeholder="Họ tên" name="hoTen"
                    onChange={formikProps.handleChange}
                  />
                  <div className="error">
                    <ErrorMessage
                      name="hoTen">
                      {
                        (msg) => <Alert message={msg} type="error" />
                      }
                    </ErrorMessage>
                  </div>
                  <Field className="form-control" type="text"
                    placeholder="Email" name="email"
                    onChange={formikProps.handleChange}
                  />
                  <div className="error">
                    <ErrorMessage
                      name="email">
                      {
                        (msg) => <Alert message={msg} type="error" />
                      }
                    </ErrorMessage>
                  </div>
                  <Field className="form-control" type="phone"
                    placeholder="Số điện thoại" name="soDt"
                    onChange={formikProps.handleChange}
                  />
                  <div className="error">
                    <ErrorMessage
                      name="soDt">
                      {
                        (msg) => <Alert message={msg} type="error" />
                      }
                    </ErrorMessage>
                  </div>
                  <button
                    className="btn btn-default btn-login"
                    type="submit"
                  >Đăng Ký</button>
                </Form>
              }}
            ></Formik>
          </div>
          <div className="text__register">
            <p>Nếu bạn đã có tài khoản ?<a onClick={() => { setLogin(true) }}>Đăng nhập</a></p>
          </div>

        </Modal.Body>
      </Modal>
    )
  }

}
