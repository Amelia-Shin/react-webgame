const React = require('react');
const PureComponent = React.PureComponent;

class Try extends PureComponent{
    render() {
        const { tryInfo } = this.props;
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        )
    }
}

module.exports  = Try;