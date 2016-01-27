/**
 * Created by n0m4dz on 1/26/16.
 */
import React, {Component, PropTypes} from 'react';
import Immutable from 'immutable';

class UserModal extends Component {

    constructor() {
        super();
        this.aimag = '';
        this.sum = '';
        this.bag = '';
        this.isEnabled = 'hide';
    }

    changeHandler(o) {
        console.log(this.isEnabled);
        var key = o.target.getAttribute('data-key');
        var value = o.target.value;
        var profile = {
            'key': key,
            'value': value
        };

        if(key == "type"){
            if(value == 3) {
                this.isEnabled = "";
            }else{
                this.isEnabled = "hide";
            }
        }

        this.props.createUser(profile);
    }

    locationHandler(o) {
        this.aimag = o.target.value;
        this.props.getSum(this.aimag);

        var key = o.target.getAttribute('data-key');
        var profile = {
            'key': key,
            'value': this.aimag
        };

        this.props.createUser(profile);
    }

    locationHandlerSum(o) {
        this.sum = o.target.value;
        this.props.getBag(this.aimag, this.sum);
    }

    submitForm(o) {
        o.preventDefault();
        console.log('submitting');
        this.props.saveUser();
    }

    render() {

        const {createUser, updateUser, saveUser, aimag, getSum, sum, getBag, bag} = this.props;
        const aimagList = aimag.map((o, index) =>
            <option key={index} value={o.id}> {o.aimagname} </option>
        );

        const sumList = sum.map((o, index) =>
            <option key={index} value={o.id}> {o.sumname} </option>
        );

        const bagList = bag.map((o, index) =>
            <option key={index} value={o.id}> {o.bagname} </option>
        );


        return (
            <div className="modal fade inactive" id="right-panel" data-backdrop="true">
                <div className="right w-xxl white b-l">
                    <div className="row-col ng-scope">
                        <a data-dismiss="modal" className="pull-right text-muted text-lg p-a-sm m-r-sm">×</a>
                        <div className="p-a b-b">
                            <span className="h5">Хэрэглэгч</span>
                        </div>
                        <div className="row-row">
                            <div className="row-body padding">
                                <form>
                                    <div className="form-group">
                                        <select className="form-control form-control-sm" defaultValue={null}
                                                data-key="type" onChange={this.changeHandler.bind(this)}>
                                            <option value="1000" disabled>Хэрэглэгчийн төрөл</option>
                                            <option value="2">Модератор</option>
                                            <option value="3">Байцаагч</option>
                                            <option value="4">Хэрэглэгч</option>
                                        </select>
                                    </div>
                                    <div className={this.isEnabled}>
                                        <div className="form-group">
                                            <select className="form-control form-control-sm" defaultValue={null} data-key="aimag_id"
                                                    onChange={this.locationHandler.bind(this)}>
                                                <option value="" disabled>Аймаг</option>
                                                {aimagList}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <select className="form-control form-control-sm" defaultValue={null} data-key="sum_id"
                                                    onChange={this.locationHandlerSum.bind(this)}>
                                                <option value="" disabled>Сум</option>
                                                {sumList}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <select className="form-control form-control-sm" defaultValue={null} data-key="bag_id" onChange={this.changeHandler.bind(this)}>
                                                <option value="" disabled>Баг</option>
                                                {bagList}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-sm" placeholder="Имайл"
                                               data-key="email" onChange={this.changeHandler.bind(this)}/>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-sm"
                                               placeholder="Хэрэглэгчийн нэр" data-key="name"
                                               onChange={this.changeHandler.bind(this)}/>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-sm"
                                               placeholder="Нууц үг" data-key="password"
                                               onChange={this.changeHandler.bind(this)}/>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-sm"
                                               placeholder="Нууц үг давтах" onChange={this.changeHandler.bind(this)}/>
                                    </div>

                                    <div className="form-group">
                                        <button onClick={this.submitForm.bind(this)} className="btn btn-primary">
                                            Хадгалах
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserModal;