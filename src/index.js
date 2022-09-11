import {StrictMode} from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

// ✅ now importing from react-dom/client
import {createRoot} from 'react-dom/client';

import App from './App';

// 👇️ IMPORTANT: make sure to specify correct ID
// must be the ID of the div element in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
 <BrowserRouter>
  <Routes>
        <Route path="*" element={<App />} />
      </Routes>
  </BrowserRouter>
);
