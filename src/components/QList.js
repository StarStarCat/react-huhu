/**
 * Created by xin on 2017/8/14.
 */
import React,{Component} from 'react';

import Qitem from './QItem';

class QList extends Component {
    render() {
        const {list, onVote} = this.props;
        return (
            <ul className="list">
                {
                    list.map((item) => (
                        <Qitem key={item.id} item={item} onVote={onVote} />
                    ))
                }
            </ul>
        );
    }
}

export default QList;