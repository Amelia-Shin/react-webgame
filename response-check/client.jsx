import React from 'react';
import { createRoot } from 'react-dom/client';

import ResponseCheck from './ResponseCheck.jsx';

createRoot(document.querySelector('#root')).render(<ResponseCheck />); // React 18 부터 createRoot 사용