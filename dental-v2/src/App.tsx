import { Outlet } from 'react-router';
import Session1 from './features/session/session1';
import UseEffects from './features/session/UseEffects';

function App() {

  return (
    <>
      <div className="main-container">
        {/* <UseEffects></UseEffects> */}
        {/* <Session1/> */}
          <Outlet />
      </div>
    </>
  );
}

export default App;
