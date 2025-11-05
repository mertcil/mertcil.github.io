'use client'

import { styled } from '@mui/material/styles'

const LoadingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  gap: '1.5rem',
})

const Spinner = styled('div')(({ theme }) => ({
  width: '48px',
  height: '48px',
  border: '4px solid',
  borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
  borderTopColor: theme.palette.primary.main,
  borderRadius: '50%',
  animation: 'spin 0.8s linear infinite',

  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
}))

const LoadingText = styled('p')(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
  fontStyle: 'italic',
  margin: 0,
}))

export default function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  )
}
