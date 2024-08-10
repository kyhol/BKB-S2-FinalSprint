import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductList from '../../Pages/ProductList';
import { useShoppingCart } from '../../Context/ShoppingCartProvider';
import { useProducts } from '../../Context/ProductContext';

jest.mock('../../Context/ShoppingCartProvider');
jest.mock('../../Context/ProductContext');

describe('ProductList', () => {
  const mockNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }));

  const productsMock = [
    {id: 1, name: 'Product 1', coverImage: 'url1', quantity: 5, artist: 'Artist 1', title: 'Title 1', price: 10},
    {id: 2, name: 'Product 2', coverImage: 'url2', quantity: 15, artist: 'Artist 2', title: 'Title 2', price: 20}
  ];

  beforeEach(() => {
    useProducts.mockReturnValue({
      products: productsMock,
      loading: false,
      error: null,
    });

    useShoppingCart.mockReturnValue({
      addToCart: jest.fn(),
    });
  });

  test('should display error when there is an error', () => {
    const errorMessage = 'Failed to fetch';
    useProducts.mockReturnValueOnce({ loading: false, error: errorMessage });
    render(<Router><ProductList /></Router>);
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  test('should display list of products correctly', () => {
    render(<Router><ProductList /></Router>);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  test('should handle Add to Cart button click', () => {
    const { addToCart } = useShoppingCart();
    render(<Router><ProductList /></Router>);
    fireEvent.click(screen.getAllByText('Add to Cart')[0]);
    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(productsMock[0], productsMock[0].quantity);
  });
});