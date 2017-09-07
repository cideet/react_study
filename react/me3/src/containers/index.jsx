/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFromOtherFile from '../actions/index.jsx';

import Util from '../util/index.jsx';
import {CITYNAME} from '../config/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {initDone: false};
    }

    // 在render完成且组件装载完成后调用（比如AJAX请求等）
    componentDidMount() {
        // 从localStorage中获取城市
        let cityName = Util.getLocalStorage(CITYNAME) || '北京';
        console.log(cityName);
        // 将城市信息存储到Redux中
        this.props.userInfoActions.update({
            cityName: cityName
        });
        setTimeout(()=> {
            this.setState({initDone: true});
            Util.setLocalStorage(CITYNAME, '天津');
        }, 1000);
    }

    render() {
        return (
            <div>
                <div>Header</div>
                {
                    this.state.initDone ? this.props.children : <div>正在加载...</div>
                }
                <div>Footer</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/detail/1">detail/1</Link></li>
                    <li><Link to="/detail/2">detail/2</Link></li>
                    <li><Link to="/detail/3">detail/3</Link></li>
                    <li><Link to="/notFound">NotFound</Link></li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
