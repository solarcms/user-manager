/**
 * Created by n0m4dz on 1/26/16.
 */
import React, {Component, PropTypes} from 'react';

class ListHeader extends Component {

    render() {
        return (
            <div className="dker p-x ng-scope">
                <div className="row">
                    <div className="col-sm-6 col-sm-push-6">
                        <div className="p-y text-center text-sm-right"><a href=""
                                                                          className="inline p-x text-center"><span
                            className="h4 block m-a-0">2k</span>
                            <small className="text-xs text-muted">Followers</small>
                        </a> <a href="" className="inline p-x b-l b-r text-center"><span
                            className="h4 block m-a-0">250</span>
                            <small className="text-xs text-muted">Following</small>
                        </a> <a href="" className="inline p-x text-center"><span className="h4 block m-a-0">89</span>
                            <small className="text-xs text-muted">Activities</small>
                        </a></div>
                    </div>
                    <div className="col-sm-6 col-sm-pull-6">
                        <div className="p-y-md clearfix nav-active-primary">
                            <ul className="nav nav-pills nav-sm">
                                <li className="nav-item" aria-expanded="false">
                                    <a className="nav-link active" href=""
                                                                                  data-toggle="tab"
                                                                                  data-target="#tab_1">Бүгд</a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="" data-toggle="tab"
                                                            data-target="#tab_2">Stream</a></li>
                                <li className="nav-item"><a className="nav-link" href="" data-toggle="tab"
                                                            data-target="#tab_3" aria-expanded="true">Friends</a></li>
                                <li className="nav-item"><a className="nav-link" href="" data-toggle="tab"
                                                            data-target="#tab_4">Profile</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ListHeader;