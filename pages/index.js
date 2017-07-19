import React from 'react';
import loader from '../loader';

export default class Home extends React.Component {
    render() {
        let str = this.props.url.query.c;
        const Comp = str ? loader(str) : () => (
            <div>
                <div>Please provide a query for dynamic component,</div>
                <div>e.g. localhost:3000?c=components/ThirdPartyComponent</div>
            </div>
        );

        return (
            <div>
                <Comp {...this.props} />
                <div>Properties:</div>
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        )
    }
}