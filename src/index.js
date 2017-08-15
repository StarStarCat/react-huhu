/**
 * Created by xin on 2017/8/11.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import QList from './components/QList';
import QForm from './components/QForm';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        const data = [
            {
                id:1,
                title: 'aa',
                des: '如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。',
                voteCount: 23
            },{
                id:2,
                title: 'vvvv',
                des: '如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。',
                voteCount: 12
            },{
                id:3,
                title: 'errrt',
                des: 'flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。',
                voteCount: 5
            }
        ];
        this.state = {
            showForm: false,
            questions: data
        };
        this.addNewQue = this.addNewQue.bind(this);
        this.onVote = this.onVote.bind(this);
        this.showFormHandle = this.showFormHandle.bind(this);
    }
    addNewQue(newQue) {
        newQue.id = this.state.questions.length+1;
        this.setState({
            questions:this.state.questions.concat(newQue)
        });
    }
    onVote(id,count) {
        let newQues = this.state.questions;
        newQues.map((item) => {
            if(item.id === id){
                item.voteCount = count;
            }
        });
        this.setState({
            questions:newQues
        })

    }
    showFormHandle() {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render() {
        const display = this.state.showForm ? 'block' : 'none';
        const style = {
            display: display
        };
        return (
            <div className="wrap">
                <div className="head">
                    <h1>React问答</h1>
                    <p><button onClick={this.showFormHandle}>提问</button></p>
                </div>
                <div style={style}>
                    <QForm className="form" addNewQue={this.addNewQue} />
                </div>
                <QList list={this.state.questions} onVote={this.onVote} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);