import React from 'react';

import DropdownList from 'react-widgets/lib/DropdownList'
export default function MuaNhanh() {
    const colors = ['orange', 'red', 'blue', 'purple']
    return (
        <section className="search">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <DropdownList
                            data={colors}
                            defaultValue={"orange"}
                            disabled={["red", "purple"]}
                            />
                    </div>
                    <div className="col-2">
                        <div className="dropdown">
                            <a className="btn dropdown-toggle" type="button" id="dropdownMenuRap" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Rạp
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuRap">
                                <a className="dropdown-item" href="#">CGV Thủ Đức</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="dropdown">
                            <a className="btn dropdown-toggle" type="button" id="dropdownMenuRap" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Ngày Xem
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuRap">
                                <a className="dropdown-item" href="#">Ngày Mai</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="dropdown">
                            <a className="btn dropdown-toggle" type="button" id="dropdownMenuRap" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Xuất Chiếu
          </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuRap">
                                <a className="dropdown-item" href="#">15:30</a>
                                <a className="dropdown-item" href="#">17:30</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <button className="btn__muave">MUA VÉ NGAY</button>
                    </div>
                </div>
            </div>
        </section>

    )
}
