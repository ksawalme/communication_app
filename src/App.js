// libraries
import React from "react";
import firebase from "firebase";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// components
import ImageGallery from "./components/gallery/ImageGallery";

// style
import logo from "./components/images/logo.jpg";
const classNames = require("./App.css");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      images: []
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <div className="app">
        <div className="content">
          <div className={classNames.app}>
            <header className={classNames.appHeader}>
              <img src={logo} className={classNames.appLogo} alt="logo" />
              <h1 className={classNames.appTitle}>Khaled & Onneil & Justine</h1>
            </header>
            <div>
              <input ref="search" type="search" placeholder="Search image" />
              <button onClick={this.handleClick}>Go</button>
            </div>
            <div className={classNames.appIntro}>
              <ImageGallery user={this.state.user} />
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
  </Switch> */
}

{
  /* </Switch>
        </BrowserRouter> */
}

{
  /* <div>
        <form onSubmit={this.submitForm}>
          <button type="submit">Submit</button>
        </form>
        {fireRedirect && (
          <Redirect to='/search-results'/>
        )}
      </div> */
}

{
  /* <Link to="/search">
                            <Button className="btn btn-lg btn-secondary"> Search</Button>
                        </Link> */
}
{
  /* </header> */
}

{
  /* <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              value={this.props.term}
            />
          </div>
        </form> */
}

{
  /* var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home}/>

    <Route name="entities" handler={Entities}></Route>

    <DefaultRoute handler={Home}/>
  </Route>
); */
}

{
  /* <BrowserRouter>
        <Switch> */
}
{
  /* <Route exact path="/" component={} /> */
}
{
  /* <Route path="/main" component={MainPage} />
          <Route exact path='/search' component={SearchPage} /> */
}
