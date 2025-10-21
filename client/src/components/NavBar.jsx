import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          pr: '10%',
          background: 'linear-gradient(90deg, #bbe1ebff 0%, #318397ff 65%)', height: '20%'
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              alt="Logo"
              style={{ margin: '15px', width: '30%', marginRight: '1rem' }}
              src="../logo.png"
            />
          </Box>
          <Typography sx={{ flexGrow: 1, ml: '3rem' }} variant="h3">
            Pixel2Pattern
          </Typography>

          {/* Navigation links */}
          <Box component="nav" sx={{ display: 'flex', gap: '2rem' }}>
            <Link href="/" passHref>
              <Button sx={{ fontSize: '1.5rem', color: 'inherit' }}>Home</Button>
            </Link>
            <Link href="/create" passHref>
              <Button sx={{ fontSize: '1.5rem', color: 'inherit' }}>Create</Button>
            </Link>
            <Link href="/FAQs" passHref>
              <Button sx={{ fontSize: '1.5rem', color: 'inherit' }}>FAQs</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}