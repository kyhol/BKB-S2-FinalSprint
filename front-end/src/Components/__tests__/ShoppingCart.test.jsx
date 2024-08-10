import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShoppingCart from '../../Pages/ShoppingCart';
import { useShoppingCart } from '../../Context/ShoppingCartProvider';
import { useProducts } from '../../Context/ProductContext';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../Context/ShoppingCartProvider');
jest.mock('../../Context/ProductContext');

describe('ShoppingCart Component', () => {
  const mockAddToCart = jest.fn();
  const mockRemoveFromCart = jest.fn();
  const mockRemoveAllOfItem = jest.fn();
  const mockEmptyCart = jest.fn();
  const mockCheckout = jest.fn();

  beforeEach(() => {
    useShoppingCart.mockReturnValue({
      cartItems: [],
      addToCart: mockAddToCart,
      removeFromCart: mockRemoveFromCart,
      removeAllOfItem: mockRemoveAllOfItem,
      emptyCart: mockEmptyCart,
      checkout: mockCheckout,
    });
    useProducts.mockReturnValue({ products: [] });
  });

  test('displays empty cart message', () => {
    render(<Router><ShoppingCart /></Router>);
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  test('handles add to cart', () => {
    const mockCartItems = [
      {
        id: '1',
        coverImage: 'image.jpg',
        title: 'Product Title',
        artist: 'Product Artist',
        price: 19.99,
        quantity: 2,
      },
    ];
    useShoppingCart.mockReturnValue({
      cartItems: mockCartItems,
      addToCart: mockAddToCart,
      removeFromCart: mockRemoveFromCart,
      removeAllOfItem: mockRemoveAllOfItem,
      emptyCart: mockEmptyCart,
      checkout: mockCheckout,
    });
    render(<Router><ShoppingCart /></Router>);
    fireEvent.click(screen.getByText('+'));
    expect(mockAddToCart).toHaveBeenCalledWith(mockCartItems[0], 0); // Assuming stock quantity is 0 for simplicity
  });

  test('handles remove from cart', () => {
    const mockCartItems = [
      {
        id: '1',
        coverImage: 'image.jpg',
        title: 'Product Title',
        artist: 'Product Artist',
        price: 19.99,
        quantity: 2,
      },
    ];
    useShoppingCart.mockReturnValue({
      cartItems: mockCartItems,
      addToCart: mockAddToCart,
      removeFromCart: mockRemoveFromCart,
      removeAllOfItem: mockRemoveAllOfItem,
      emptyCart: mockEmptyCart,
      checkout: mockCheckout,
    });
    render(<Router><ShoppingCart /></Router>);
    fireEvent.click(screen.getByText('-'));
    expect(mockRemoveFromCart).toHaveBeenCalledWith(mockCartItems[0].id);
  });

  test('handles proceed to checkout', () => {
    render(<Router><ShoppingCart /></Router>);
    fireEvent.click(screen.getByText(/proceed to checkout/i));
    expect(mockCheckout).toHaveBeenCalled();
  });
});