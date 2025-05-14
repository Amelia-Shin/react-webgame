const React = require('react');
const Component = React.Component;

class Try extends Component{
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