import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter,BrowserRouter, Link } from 'react-router-dom';
import {Router} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import './App.css';
import input from "./input";
import { Button } from 'react-bootstrap';
import Homepage from "./HomePage";
import NotFound from "./NotFound"
import AdminLogin from "./components/authentication/AdminLogin";
import createBrowserHistory from 'history/createBrowserHistory'
import search from './search';


// // const App = () => (
  
// // //   <Switch>
// // //     <div>
// // // {/*       
// // //       <ul>
// // //    <li><Link to="/AdminLogin">Admin</Link></li>
// // //    <li><Link to="/about">About</Link></li>
// // //    <li><Link to="/books">Books</Link></li>
// // // </ul>
        

// // //       <hr />  */}

// // //   <Route path='/' component={input}>
// // //     {/* <IndexRoute component={DashBoard} /> */}
// // //     <Route path='/admin' component={AdminLogin} />
// // //     {/* <Route path='login' component={Login} /> */}
// //   <Router>
// // <Switch>
// //     <Route path="/" name="input" component={input} />
// //     <Route path="/admin" name="admin" component={AdminLogin} />

// // </Switch>
// // <Router>


// //     // </div>
  

// //   // </Switch>
// // );

// // // const Home = () => (
// // //   <div>
// // //     <h2>Home</h2>
// // //   </div>
// // // );

// // // const About = () => (
// // //   <div>
// // //     <h2>About</h2>
// // //   </div>
// // // );

// // // const Topics = ({ match }) => (
// // //   <div>
// // //     <h2>Topics</h2>
// // //     <ul>
// // //       <li>
// // //         <Link to={`${match.url}/AdminLogin`}>Rendering to AdminLogin</Link>
// // //       </li>
      
// // //     </ul>

// // //     <Route path={`${match.url}/:AdminLogin`} component={AdminLogin} />
// // //     <Route
// // //       exact
// // //       path={match.url}
// // //       render={() => <h3>Please select a topic.</h3>}
// // //     />
// // //   </div>
// // // );

// // // const Admin = ({ match }) => (
// // //   <div>
// // //     <h3>{match.params.Admin}</h3>
// // //   </div>
// // // );

// // export default withRouter(App);

// export  class App extends React.Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     user: null,
//   //   };
//   // }
//   // login = user => {
//   //   this.setState({ user }, () => this.props.history.push('/input'));
//   //   // Go to input
//   // }
//   render() {
//     return (
//           <div className="app">

//           <div className="content">
//             <Switch>
//             <div>

//               <Route exact path="/" component={input} />
//               <Route path="/admin" component={AdminLogin} />
//               {/* <Route path="/admin" render={props => <Admin onLogin={this.login} />} /> */}
//               {/* <PrivateRoute path="/input" user={this.state.user} component={InputData} /> */}
//               {/* <Route component={NotFound} /> */}
//               </div>

//             </Switch>
//           </div>
//         </div>
//     );
//   }
// }

// export default withRouter(App);



// class App extends Component {
 
//   render() {
//     return (

//           <div className="app">

//           <div className="content">
//           <BrowserRouter>
//      <Switch>
//          <Route exact path="/" component={input} />
//          <Route path="/about" component={AdminLogin} />
//      </Switch>
// </BrowserRouter>
//           </div>
//         </div>

//     );
//   }
// }

// export default withRouter(App);

class App extends Component {
  render() {
    return (

<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/input" component={input} />

    <Route path="/home" component={Homepage} />
    <Route path="/search" component={search} />

  </Switch>
</BrowserRouter>


);
}
}
export default withRouter(App);