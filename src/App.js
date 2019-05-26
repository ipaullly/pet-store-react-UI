import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './utils/history'
import NavigationBar from './components/navigation';
import PetList from './components/petList';
import PetDetail from './components/petDetail';
import CreatePet from './components/postPet';
import PetUpdate from './components/updatePet';
import Footer from './components/footer';

const App = () => {
    return(
        <Router history={history}>
            <div className="App">
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={PetList} />
                    <Route path="/create" component={CreatePet} />
                    <Route exact path="/pets/:id" component={PetDetail} />
                    <Route path="/pets/:id/edit" component={PetUpdate} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}
export default App;