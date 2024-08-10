import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductDetails from '../../Pages/ProductDetails';
import { useProducts } from '../../Context/ProductContext';
import { useShoppingCart } from '../../Context/ShoppingCartProvider';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../Context/ProductContext');
jest.mock('../../Context/ShoppingCartProvider');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

describe('ProductDetails Component', () => {
  const mockAddToCart = jest.fn();

  beforeEach(() => {
    useShoppingCart.mockReturnValue({ addToCart: mockAddToCart });
  });

  test('displays error message', () => {
    useProducts.mockReturnValue({ products: [], loading: false, error: 'Error loading products' });
    render(<Router><ProductDetails /></Router>);
    expect(screen.getByTestId('error')).toHaveTextContent('Error: Error loading products');
  });

  test('displays product not found message', () => {
    useProducts.mockReturnValue({ products: [], loading: false, error: null });
    render(<Router><ProductDetails /></Router>);
    expect(screen.getByTestId('no-product')).toHaveTextContent('Product not found.');
  });

  test('displays product details', () => {
    const mockProduct = {
      id: '1',
      coverImage: 'image.jpg',
      title: 'Product Title',
      artist: 'Product Artist',
      price: 19.99,
      description: 'Product Description',
      tracks: ['Track 1', 'Track 2'],
      quantity: 5,
    };
    useProducts.mockReturnValue({ products: [mockProduct], loading: false, error: null });
    render(<Router><ProductDetails /></Router>);
    
    expect(screen.getByTestId('product-title')).toHaveTextContent('Product Title');
    expect(screen.getByTestId('product-artist')).toHaveTextContent('Product Artist');
    expect(screen.getByTestId('product-price')).toHaveTextContent('$19.99');
    expect(screen.getByTestId('product-description')).toHaveTextContent('Product Description');
  });
});