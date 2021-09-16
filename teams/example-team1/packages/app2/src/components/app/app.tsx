// TODO: clean up
import * as React from 'react';
// import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { ButtonSharedTools } from '@company/core-team__shared-tools';
import { ButtonApp2 } from '../button/button';

// export const App2 = () => {
//   return (
//     <BrowserRouter>
//       <h2>App 2</h2>

//       <div className="navigation">
//         <Link to="/site-url/example-team1-url/app2-url/nested-page3">Nested Page 3</Link>
//         <Link to="/site-url/example-team1-url/app2-url/nested-page4">Nested Page 4</Link>
//       </div>

//       <div className="box">
//         <Switch>
//           <Route path="/site-url/example-team1-url/app2-url/nested-page3">
//             <h3>Nested Page 3</h3>
//             <ButtonApp2 /> <br />
//             <ButtonSharedTools /> <br />
//           </Route>
//           <Route path="/site-url/example-team1-url/app2-url/nested-page4">
//             <h3>Nested Page 4</h3>
//             <ButtonApp2 /> <br />
//             <ButtonSharedTools /> <br />
//           </Route>
//           <Redirect to="/site-url/example-team1-url/app2-url/nested-page3" />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// };

export const App2 = () => {
  // prettier-ignore
  return (
    <div>
      <h2>App 2</h2>
      <ButtonApp2 /> - regular import<br />
      <ButtonSharedTools /> - imported from shared-tools/dist<br />
    </div>
  );
};

export default App2;
