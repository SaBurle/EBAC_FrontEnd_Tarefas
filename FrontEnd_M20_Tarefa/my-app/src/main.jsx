import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App.jsx'

const root = document.getElementById('root');

createRoot(root).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)
