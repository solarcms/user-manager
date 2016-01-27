/**
 * Created by n0m4dz on 1/26/16.
 */
import React, {Component, PropTypes} from 'react';

class ListHeader extends Component {

    render() {
        return (
            <div className="dker p-l-md p-r-sm">
                <div className="row">
                    <div className="col-sm-6 col-sm-push-6">
                        <form
                            className="navbar-form form-inline pull-right pull-none-sm navbar-item" role="search">
                            <div className="form-group l-h">
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control p-x b-a rounded"
                                           placeholder="Хайх..."/>
                                    <span className="input-group-btn">
                                    <button type="submit" className="btn white b-a rounded no-shadow">
                                        <i className="material-icons">&#xE8B6;</i>
                                    </button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="col-sm-6 col-sm-pull-6">
                        <div className="p-y-sm clearfix nav-active-primary">
                            <ul className="nav nav-pills nav-sm m-t-xs">
                                <li className="nav-item" aria-expanded="false">
                                    <a className="nav-link active" href="">Бүгд</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Администратор</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Модератор</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Байцаагч</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ListHeader;