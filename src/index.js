import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Cheese from './components/Cheese/Cheese';
import cheese_1 from './assets/cheese_1.png';
import cheese_2 from './assets/cheese_2.png';
import cheese_3 from './assets/cheese_3.png';
import defIMG from './assets/defIMG.png';

class App extends React.Component {

    render() {
        return (
            <div className="page">
                <div className="wrapper">
                    <Header />
                    <main>
                        <Cheese image={cheese_1} defIMG={defIMG}/>
                        <Cheese image={cheese_2} defIMG={defIMG}/>
                        <Cheese image={cheese_3} defIMG={defIMG}/>
                        <Cheese image={cheese_3} defIMG={defIMG}/>
                        <Cheese image={cheese_1} defIMG={defIMG}/>
                    </main>
                </div>
            </div>
        )
    }
}


// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);