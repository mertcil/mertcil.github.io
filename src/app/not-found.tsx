'use client'

import Link from 'next/link'
import { styled } from '@mui/material/styles'

const NotFoundContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  gap: '2rem',
  textAlign: 'center',
  padding: '2rem',
})

const ErrorCode = styled('h1')(({ theme }) => ({
  fontSize: 'clamp(4rem, 15vw, 8rem)',
  fontWeight: 700,
  margin: 0,
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)'
    : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: 1,
}))

const ErrorTitle = styled('h2')(({ theme }) => ({
  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
  fontWeight: 600,
  margin: 0,
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#1e293b',
}))

const ErrorDescription = styled('p')(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
  maxWidth: '500px',
  margin: 0,
  lineHeight: 1.6,
}))

const NavigationLinks = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1rem',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    gap: '1.5rem',
  },
})

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  fontWeight: 500,
  textDecoration: 'none',
  borderRadius: '8px',
  transition: 'all 0.2s ease',

  '&.primary': {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
    },

    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: theme.palette.primary.main,
      outlineOffset: '2px',
    },
  },

  '&.secondary': {
    backgroundColor: 'transparent',
    color: theme.palette.mode === 'dark' ? '#ffffff' : theme.palette.primary.main,
    border: '2px solid',
    borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : theme.palette.primary.main,

    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(37, 99, 235, 0.05)',
      transform: 'translateY(-2px)',
    },

    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: theme.palette.primary.main,
      outlineOffset: '2px',
    },
  },
}))

export default function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorDescription>
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </ErrorDescription>
      <NavigationLinks>
        <StyledLink href="/" className="primary">
          Go Home
        </StyledLink>
        <StyledLink href="/posts" className="secondary">
          View Blog Posts
        </StyledLink>
      </NavigationLinks>
    </NotFoundContainer>
  )
}
