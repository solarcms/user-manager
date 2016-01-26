/**
 * Created by n0m4dz on 1/25/16.
 */
import React, {Component, PropTypes} from 'react'
import * as DataActions from '../actions/userActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getUsers} from '../api/userApi'

import ListHeader from '../components/user/ListHeader';
import UserList from '../components/user/UserList';

class UserContainer extends Component {

    constructor() {
        super();
    }



    componentWillMount() {
        getUsers().then((o)=>{
            if(o.status) {
                this.props.actions.getUsersAction(o.data);
            }
        })
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <ListHeader></ListHeader>
                <div className="p-a-md">
                    <div id="root" className="row row-sm">
                        <UserList data={users} ></UserList>
                    </div>
                </div>
            </div>
        )
    }
}

UserContainer.defaultProps = {
    users: []
};

function mapStateToProps(state) {
    const UserStore = state.UserStore;
    return {
        users: UserStore.get('users').toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DataActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer);