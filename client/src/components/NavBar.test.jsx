import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

// Mock Next.js Link behavior
jest.mock('next/link', () => {
    return ({ children, href }) => <a href={href}>{children}</a>;
});

describe('NavBar', () => {
    test.todo('renders logo and title', () => {

    })

    test.todo('renders navigation links with correct destinations', () => {
        
    })
})