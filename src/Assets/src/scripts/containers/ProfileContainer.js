/**
 * Created by n0m4dz on 1/25/16.
 */
import React, {Component, PropTypes} from 'react'
import * as DataActions from '../actions/userActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getUsers} from '../api/userApi'


class ProfileContainer extends Component {

    constructor() {
        super();
    }

    componentWillMount() {

    }

    render() {
        const { profile } = this.props;
        return (
            <div>

            </div>
        )
    }
}

ProfileContainer.defaultProps = {
    profile: {}
};

function mapStateToProps(state) {
    const UserStore = state.UserStore;
    return {
        user: UserStore.get('profile').toJS()
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