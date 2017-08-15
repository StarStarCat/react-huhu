/**
 * Created by xin on 2017/8/14.
 */
import React,{Component} from 'react';

class QItem extends Component{
    constructor() {
        super();
        this.onVote = this.onVote.bind(this);
        this.state = {
            down: false,
            up: false
        }
    }
    onVote(param) {
        const {item, onVote} = this.props;
        if(param === 'up'){
            if(this.state.up === true){
                onVote(item.id, item.voteCount-1);
                this.state.up = false;
                return;
            }
            onVote(item.id, item.voteCount+1);
            this.state.up = true;
        } else {
            if(this.state.down === true){
                return
            }
            onVote(item.id, item.voteCount-1);
            this.state.down = true;
        }
    }
    render() {
        const {item} = this.props;
        return (
            <li key={item.id}>
                <div className="button">
                    <span className="up" onClick={() => this.onVote('up')}>
                        顶<br/>
                        <b>{item.voteCount}</b>
                    </span>
                    <span className="down" onClick={this.onVote}>踩</span>
                </div>
                <div className="content">
                    <h3>{item.title}</h3>
                    <div className="con">{item.des}</div>
                </div>
            </li>
        );
    }
}

export default QItem;