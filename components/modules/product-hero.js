
import BlockContent from '@components/block-content';
import {
  ProductActions, ProductForm, ProductGallery,
  ProductPrice
} from '@components/product';

const ProductHero = ({ product, activeVariant, onVariantChange }) => {
  return (
    <section className="product">
      <div className="product--content">
        <div className="product--gallery">
          <ProductGallery
            photosets={product.photos.main}
            activeVariant={activeVariant}
            hasArrows
            hasCounter
          />
        </div>

        <div className="product--details">
          <div className="product--info">
            <div className="product--header">
              <div className="product--title">
                <h1 className="product--name">{product.title}</h1>
              </div>

              <div className="product--price-stock">
                <div className="flex items-center mt-4">
                  {activeVariant.inStock && !activeVariant.lowStock && (
                    <span className="label">In Stock</span>
                  )}
                  {activeVariant.lowStock && (
                    <span className="label is-active">Low Stock</span>
                  )}

                  {!activeVariant.inStock && (
                    <span className="label is-secondary is-active">
                      Out of Stock
                    </span>
                  )}
                </div>

                <ProductPrice
                  price={activeVariant?.price || product.price}
                  comparePrice={
                    activeVariant?.comparePrice || product.comparePrice
                  }
                />
              </div>
            </div>

            {product.description && (
              <div className="product--desc">
                <BlockContent blocks={product.description} />
              </div>
            )}

            <ProductForm
              product={product}
              activeVariant={activeVariant}
              onVariantChange={onVariantChange}
              className="product--form"
            />
          </div>

          <ProductActions
            activeVariant={activeVariant}
            klaviyoAccountID={product.klaviyoAccountID}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductHero
