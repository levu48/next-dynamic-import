import React from 'react';
import loader from '../loader';

export default class Home extends React.Component {
    render() {
        const Comp = loader('components/Article');
        return (
            <Comp />
        )
    }
}