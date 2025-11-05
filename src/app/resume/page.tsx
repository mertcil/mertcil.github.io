'use client'

import dynamic from 'next/dynamic'
import { styled } from '@mui/material/styles'

// Code splitting: Load heavy components only when needed
const LeftSide = dynamic(() => import('./leftSide'), {
  loading: () => <LoadingPlaceholder>Loading resume...</LoadingPlaceholder>,
})

const RightSide = dynamic(() => import('./rightSide'), {
  loading: () => <LoadingPlaceholder>Loading experience...</LoadingPlaceholder>,
})

const LoadingPlaceholder = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '200px',
  color: '#666',
  fontSize: '1rem',
  fontStyle: 'italic',
})

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',

  '@media (max-width: 960px)': {
    flexDirection: 'column',
  },
})

export default function Resume() {
  return (
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  )
}
