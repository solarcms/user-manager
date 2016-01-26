/**
 * Created by n0m4dz on 1/25/16.
 */
import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

class UserList extends Component {

    constructor() {
        super();
    }

    render() {

        const { data } = this.props;

        const List = data.map((o, index) =>
            <div key={index} className="col-xs-6 col-md-4 col-lg-3">
                <div className="list-item box r m-b"><a herf="" className="list-left"><span
                    className="w-40 circle blue text-uppercase">{o.name.charAt(0)}</span></a>
                    <div className="list-body">
                        <div className="text-ellipsis"><a href="">{ o.name }</a></div>
                        <small className="text-muted text-ellipsis">{ o.role }</small>
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                { List }
            </div>
        )
    }
}

export default UserList;