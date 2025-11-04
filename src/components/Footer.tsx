'use client'

import { styled } from '@mui/material/styles'

const FooterElement = styled('footer')(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: 'clamp(1rem, 2vw, 1.5rem) 0',
  fontFamily: theme.typography.fontFamily,
}))

const FooterInner = styled('div')({
  container: 'auto',
  margin: '0 auto',
  padding: '0 clamp(1rem, 3vw, 1.5rem)',
  textAlign: 'center',
})

const FooterText = styled('p')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#ffffff',
  margin: 0,
  fontSize: '0.875rem',
}))

export default function Footer() {
  return (
    <FooterElement>
      <FooterInner>
        <FooterText>© 2025 Mevlut Mert CIL. All rights reserved.</FooterText>
      </FooterInner>
    </FooterElement>
  )
}

