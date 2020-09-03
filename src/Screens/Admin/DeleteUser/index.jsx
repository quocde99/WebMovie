import React from 'react'
import {Modal,Result} from "antd"
export default function DeleteUser() {
    return (
        <>
        <Modal
          title="Bạn có chắc chắn xóa người dùng"
          visible={visable}
          onOk={handleOk}
          onCancel={handleCancel}
        >
        </Modal>
      </>
    )
}
