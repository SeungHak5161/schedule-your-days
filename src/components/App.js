// component
import Layout from 'components/Layout';
// style
import 'styles/common.scss';
// library
import { create } from 'libs/ddbApi';

export const App = () => {

  return (
    <div className="App">
      <Layout />
      <div style={{ width: 100, height: 100, backgroundColor: 'yellow' }} onClick={create}>
        create
      </div>
    </div >
  );
}

export default App;
