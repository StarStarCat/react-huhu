/**
 * Created by xin on 2017/8/14.
 */
import React,{Component} from 'react';

class QForm extends Component{
    constructor() {
        super();
        this.changeHandle = this.changeHandle.bind(this);
        this.changeTextHandle = this.changeTextHandle.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
        this.state = {
            qTitle: ''
        }
    }
    changeHandle(e) {
        this.setState({
            qTitle: e.target.value
        })
    }
    changeTextHandle(e) {
        this.setState({
            qDes: e.target.value
        })
    }
    submitHandle(e) {
        e.preventDefault();
        const { addNewQue } = this.props;
        const newQuestion = {
            title: this.state.qTitle,
            des: this.state.qDes,
            voteCount: 0
        }
        this.setState({
            qTitle: '',
            qDes: ''
        });
        addNewQue(newQuestion);
    }
    render() {
        return (
            <form className="form" action="" onSubmit={this.submitHandle}>
                <label htmlFor="qTitle">问题</label>
                <input id="qTitle" type="text" value={this.state.qTitle} placeholder="问题标题" onChange={this.changeHandle} />
                <textarea name="" id="" cols="30" rows="3" value={this.state.qDes} placeholder="问题内容" onChange={this.changeTextHandle}></textarea>
                <div className="option">
                    <button className="cancel">取消</button>
                    <button>确认</button>
                </div>
            </form>

        );
    }
}

export default QForm;