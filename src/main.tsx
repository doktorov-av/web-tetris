import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css'
import {MantineProvider} from "@mantine/core";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider defaultColorScheme="dark">
          <App />
      </MantineProvider>
  </StrictMode>,
)
