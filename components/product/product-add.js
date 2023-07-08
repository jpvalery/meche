import cx from 'classnames'

import { useAddItem, useSiteContext } from '@lib/context'

const ProductAdd = ({ productID, quantity = 1, className, children }) => {
  const addItemToCart = useAddItem()
  const { shopifyClient, isLoading, isAdding } = useSiteContext()

  // Check that Shopify is connected
  if (!shopifyClient) {
    return (
      <span className={cx('is-disabled', className)} disabled>
        Indisponible
      </span>
    )
  }

  return (
    <>
      {isLoading ? (
        <button className={cx('is-disabled', className)} disabled>
          Chargement...
        </button>
      ) : (
        <button
          className={cx(className, { 'is-disabled': isAdding })}
          onClick={() => addItemToCart(productID, quantity)}
        >
          {isAdding ? 'Ajout en cours...' : <>{children ? children : 'Ajouter au panier'}</>}
        </button>
      )}
    </>
  )
}

export default ProductAdd
