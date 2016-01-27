/**
 * Created by n0m4dz on 1/25/16.
 */
import React, {Component, PropTypes} from 'react'
import * as DataActions from '../actions/userActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getUsers, getProfile, saveUser} from '../api/userApi'
import {getAimag, getSum, getBag} from '../api/locationApi'

import ListHeader from '../components/ListHeader';
import UserList from '../components/UserList';
import UserModal from '../components/UserModal';

class UserContainer extends Component {

    constructor() {
        super();
    }

    getUsers() {
        getUsers().then((o)=> {
            if (o.status) {
                this.props.actions.getUsersAction(o.data);
            }
        })
    }


    getAimag() {
        getAimag().then((o) => {
            if (o.status) {
                this.props.actions.getAimagAction(o.data);
            }
        });
    }

    getSum(id) {
        getSum(id).then((o) => {
            if (o.status) {
                this.props.actions.getSumAction(o.data);
            }
        });
    }

    getBag(id, ids) {
        getBag(id, ids).then((o) => {
            if (o.status) {
                this.props.actions.getBagAction(o.data);
            }
        });
    }

    createUser(o) {
        this.props.actions.createUser(o);
    }

    updateUser() {
        console.log('creating user');
    }

    saveUser() {
        console.log('saving user');
        saveUser(this.props.profile).then((o) => {
            console.log(o);
            location.reload();
        });
    }

    componentWillMount() {
        this.getUsers();
        this.getAimag();
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <ListHeader></ListHeader>
                <div className="p-a-md">
                    <div id="root" className="row row-sm">
                        <UserList data={users}></UserList>
                    </div>

                    <ul className="m-t-none m-b pagination">
                        <li className="pagination-prev"><a href="">«</a></li>
                        <li className="pagination-page current active"><a href="">1</a></li>
                        <li className="pagination-page"><a href="">2</a></li>
                        <li className="pagination-page"><a href="">3</a></li>
                        <li className="pagination-next"><a href="">»</a></li>
                    </ul>
                </div>

                <UserModal
                    aimag={this.props.aimag}
                    sum={this.props.sum}
                    bag={this.props.bag}
                    getSum={this.getSum.bind(this)}
                    getBag={this.getBag.bind(this)}
                    createUser={this.createUser.bind(this)}
                    updateUser={this.updateUser.bind(this)}
                    saveUser={this.saveUser.bind(this)}></UserModal>
            </div>
        )
    }
}

UserContainer.defaultProps = {
    users: [],
    profile: {},
    aimag: [],
    sum: [],
    bag: []
};

function mapStateToProps(state) {
    const UserStore = state.UserStore;
    return {
        users: UserStore.get('users').toJS(),
        profile: UserStore.get('profile').toJS(),
        aimag: UserStore.get('aimag').toJS(),
        sum: UserStore.get('sum').toJS(),
        bag: UserStore.get('bag').toJS()
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