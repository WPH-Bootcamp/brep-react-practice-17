import Dashboard from './materi/1-useEffect';
import { FocusInput } from './materi/2-useRef';
import ListRendering from './materi/3-useMemo';
import { WithoutUseCallback, WithUseCallback } from './materi/4-useCallback';
import LiftingState from './materi/5-Lifting-State';

function App() {
  return (
    <div style={{ height: '500dvh' }}>
      <h1>Materi Class 17 - Advance Hooks</h1>

      <h1>Materi 1 - useEffect</h1>
      <Dashboard />

      <h1>Materi 2 - useRef</h1>
      <FocusInput />

      <h1>Materi 3 - useMemo</h1>
      <ListRendering />

      <h1>Materi 4 - useCallback</h1>
      <WithoutUseCallback />
      <WithUseCallback />

      <h1>Materi 5 - Lifting State</h1>
      <LiftingState />
    </div>
  );
}

export default App;
