import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ConfigProvider, theme } from 'antd';
import App from './App';

const customTheme = {
  token: {
    colorPrimary: '#0D0065', // nova cor primária
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    borderRadius: 8,
  },
};

createRoot(document.getElementById('root')).render(
  <ConfigProvider theme={customTheme}>
    <App />
  </ConfigProvider>
  )
