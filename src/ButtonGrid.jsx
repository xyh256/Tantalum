import React from 'react';
import './ButtonGrid.css'; // 导入组件的样式文件

class ButtonGrid extends React.Component {
    render() {
        return (
            <div className="button-grid">
                <button>创建钱包</button>
                <button>查询余额</button>
                <button>转账</button>
                <br />
                <button>按钮4</button>
                <button>按钮5</button>
                <button>按钮6</button>
            </div>
        );
    }
}

export default ButtonGrid;
