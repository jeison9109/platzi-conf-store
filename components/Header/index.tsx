import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Checkout, HeaderAlert, HeaderS } from './styles'
import { UseAppContext } from '../../context/AppContext'

const Header = () => {
  const { state } = UseAppContext()
  const { cart } = state
  return (
    <HeaderS>
      <Link href="/">
        <h1>PlatziConf Merch</h1>
      </Link>
      <Checkout>
        <Link href="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <HeaderAlert>{cart.length}</HeaderAlert>}
      </Checkout>
    </HeaderS>
  )
}

export default Header
