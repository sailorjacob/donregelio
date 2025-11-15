"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface CartItem {
  id: string
  productId: string
  productName: string
  quantityType: 'single' | '3pack' | '10pack' | 'box'
  price: number
  quantity: number
  image: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'id' | 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize cart from localStorage
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('donregelio_cart')
      if (savedCart) {
        try {
          return JSON.parse(savedCart)
        } catch (e) {
          console.error('Failed to load cart from localStorage:', e)
        }
      }
    }
    return []
  })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isInitialized, setIsInitialized] = useState(true)

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('donregelio_cart', JSON.stringify(items))
    }
  }, [items, isInitialized])

  const addItem = (newItem: Omit<CartItem, 'id' | 'quantity'>) => {
    setItems(prevItems => {
      // Check if item already exists (same product and quantity type)
      const existingItemIndex = prevItems.findIndex(
        item => item.productId === newItem.productId && item.quantityType === newItem.quantityType
      )

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += 1
        return updatedItems
      } else {
        // Add new item
        const cartItem: CartItem = {
          ...newItem,
          id: `${newItem.productId}-${newItem.quantityType}-${Date.now()}`,
          quantity: 1
        }
        return [...prevItems, cartItem]
      }
    })

    // Open cart when item is added
    setIsCartOpen(true)
  }

  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem('donregelio_cart')
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        isCartOpen,
        openCart,
        closeCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

