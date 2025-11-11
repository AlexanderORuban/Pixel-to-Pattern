import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

// Mock Next.js Link behavior
jest.mock('next/link', () => {
    return ({ children, href }) => <a href={href}>{children}</a>;
});

describe('NavBar', () => {
    test('renders logo and title', () => {
        // render NavBar in the vdom
        render(<NavBar />)

        // find elements by their text
        const logo = screen.getByAltText('Logo');
        const title = screen.getByText('Pixel2Pattern');

        // assert that elements are rendered
        expect(logo).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    })

    test.todo('renders navigation links with correct destinations')
})