import React from 'react';

class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        const apiUrl = 'https://codeforces.com/api/user.ratedList?activeOnly=true';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => console.log('This is your data', data));
    }
    render() {
        return <h1>my Component has Mounted, Check the browser 'console' </h1>;
    }
}
export default Practice;