import React, { Component } from 'React';

import PizzaImage from '../components/PizzaImage/PizzaImage';

class Pizza extends Component {
    render() {
        return (
            <div>
                <h1>The Pizza</h1>
                <PizzaImage />
            </div>
        );
    }
}

export default Pizza;
