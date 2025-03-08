import { type Component } from 'solid-js';
import { RecordTable } from './components/RecordTable';
import { AddRecord } from './components/AddRecord.tsx';

const App: Component = () => {
  return (
    <div class="container p-4 mx-auto">
      <RecordTable />
      <AddRecord />
    </div>
  );
};

export default App;
