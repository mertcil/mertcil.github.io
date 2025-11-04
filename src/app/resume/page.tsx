'use client'

import { styled } from '@mui/material/styles'
import LeftSide from './leftSide'
import RightSide from './rightSide'

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
