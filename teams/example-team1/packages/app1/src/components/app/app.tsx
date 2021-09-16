// TODO: clean up
import * as React from 'react';
// import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { ButtonSharedTools } from '@company/core-team__shared-tools';
import { ButtonApp1 } from '../button/button';

// export const App1 = () => {
//   return (
//     <BrowserRouter>
//       <h2>App 1</h2>

//       <div className="navigation">
//         <Link to="/site/example-team1-url/app1-url/nested-page1">Nested Page 1</Link>
//         <Link to="/site/example-team1-url/app1-url/nested-page2">Nested Page 2</Link>
//       </div>

//       <div className="box">
//         <Switch>
//           <Route path="/site/example-team1-url/app1-url/nested-page1">
//             <h3>Nested Page 1</h3>
//             <ButtonApp1 /> <br />
//             <ButtonSharedTools /> <br />
//           </Route>
//           <Route path="/site/example-team1-url/app1-url/nested-page2">
//             <h3>Nested Page 2</h3>
//             <ButtonApp1 /> <br />
//             <ButtonSharedTools /> <br />
//           </Route>
//           <Redirect to="/site/example-team1-url/app1-url/nested-page1" />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// };

export const App1 = () => {
  return (
    <div>
      <h2>App 1</h2>
      <ButtonApp1 /> - regular import<br />
      <ButtonSharedTools /> - imported from shared-tools/dist<br />
    </div>
  );
};

export default App1;
