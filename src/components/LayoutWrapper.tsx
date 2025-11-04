'use client'

import { styled } from '@mui/material/styles'
import { ReactNode } from 'react'

const OuterContainer = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#1e3a8a',
  width: '100%',
})

const CenteredContent = styled('div')({
  width: 'clamp(90%, 90vw, 1400px)',
  maxWidth: '1400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 1rem',
  boxSizing: 'border-box',

  '@media (min-width: 768px)': {
    width: 'clamp(85%, 85vw, 1400px)',
    padding: '0 1.5rem',
  },

  '@media (min-width: 1024px)': {
    width: '80%',
    padding: '0 2rem',
  },
})

const MainContent = styled('div')({
  flex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
})

const Panel = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  padding: '1.25rem',
  background: theme.palette.mode === 'dark' ? '#424242' : '#ffffff', // dark gray in dark mode
  border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.12)' : '1px solid #e0e0e0',
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 8px 24px rgba(0,0,0,0.35)'
      : '0 4px 12px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  color: theme.palette.text.primary,
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  boxSizing: 'border-box',

  '@media (min-width: 768px)': {
    padding: '1.75rem',
    borderRadius: '16px',
  },

  '@media (min-width: 1024px)': {
    padding: '2rem',
  },
}))

const HeaderPanel = styled('div')({
  width: '100%',
  marginTop: '2.5rem',
  background: 'transparent',
})

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const childrenArray = Array.isArray(children) ? children : [children]
  const [header, pageContent, footer] = childrenArray

  return (
    <OuterContainer>
      <CenteredContent>
        <HeaderPanel>
          {header}
        </HeaderPanel>

        <MainContent>
          <Panel>
            {pageContent}
          </Panel>
        </MainContent>
      </CenteredContent>
      {footer}
    </OuterContainer>
  )
}
