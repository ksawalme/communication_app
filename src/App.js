// libraries
import React from 'react';
import firebase from 'firebase';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// components
import SearchPage from './components/SearchPage';
import MainPage from './components/MainPage'
import ImageGallery from './components/gallery/ImageGallery';

// style
import logo from './components/images/logo.jpg';
const classNames = require('./App.css');


export default class App extends React.Component {

  constructor() {
    super();
    //In React, components have state!
    //React state: If change, the component will be reloaded! (Interesting)
    this.state = {
      user: null,
      images: []
    };
  }
  
  

 

  //Life cicle method launched when component is rendered in DOM (Firebase Listener).
  componentWillMount() { 
    firebase.auth().onAuthStateChanged(user => {
      //Awesome ES6 Syntax: If user == new user, will not change and eoc will be overwrited.
      this.setState({ user });
    });
  }
  

  render() {

    
    return (

      <div className="app">

      <div className="content">
    
     

{/* <div>
  <img className="home" src={MainPage}/>
  <label className="home" onClick={this.home}>Home</label>
</div> */}



      <div className={classNames.app}>
        <header className={classNames.appHeader}>
          <img src={ logo } className={classNames.appLogo} alt="logo" />
          <h1 className={classNames.appTitle}>Khaled & Onneil & Justine</h1>
          
          </header>
          <div>
    		<input ref="search" type="search" placeholder="Search image" />
    		<button onClick={this.handleClick}>Go</button>
    	</div>
          {/* const style = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }; */}

     

         
        <div className={classNames.appIntro}>
          <ImageGallery user={ this.state.user } />
          
        </div>
      </div>

       </div>
    </div>

      
    );

  }
}

{
  
  /* <Switch>
<Route exact path="/" component={ImageGallery} />
<Route path="/search" component={SearchPage} />
  </Switch> */}


     {/* </Switch>
        </BrowserRouter> */}

        {/* <div>
        <form onSubmit={this.submitForm}>
          <button type="submit">Submit</button>
        </form>
        {fireRedirect && (
          <Redirect to='/search-results'/>
        )}
      </div> */}


                {/* <Link to="/search">
                            <Button className="btn btn-lg btn-secondary"> Search</Button>
                        </Link> */}
        {/* </header> */}


                {/* <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              value={this.props.term}
            />
          </div>
        </form> */}

        {/* var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home}/>

    <Route name="entities" handler={Entities}></Route>

    <DefaultRoute handler={Home}/>
  </Route>
); */}

  {/* <BrowserRouter>
        <Switch> */}
          {/* <Route exact path="/" component={} /> */}
          {/* <Route path="/main" component={MainPage} />
          <Route exact path='/search' component={SearchPage} /> */}



