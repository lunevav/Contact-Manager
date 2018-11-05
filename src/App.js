import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context'

//------------------------------------------------------------
// @COMPONENTS
import Contacts from './Components/Contacts';
import Header from './Components/Header';
import AddContactForm from './Components/AddContactForm';
//------------------------------------------------------------

class App extends Component {
    render() {
        console.log('[App][Render]')
        return (
            <Provider>
                <div className="App">
                    <Header
                        title={"Contact Manager"}
                    />
                    <div className="container">
                        <div className="row">
                            <Contacts/>
                            <AddContactForm/>
                        </div>
                    </div>
                </div>
            </Provider>
        );
      }
}

export default App;
