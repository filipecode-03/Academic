import cartIcon from '../images/icon-add-to-cart.svg'

function Produtos({
  products,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
}) {

  function getProductQuantity(productName) {
    const product = cart.find(
      (item) => item.name === productName
    )

    return product ? product.quantity : 0
  }

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">
        Desserts
      </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => {

          const quantity = getProductQuantity(product.name)

          return (
            <div key={product.name}>

              {/* IMAGE */}
              <div className="relative">

                <img
                  src={product.image.mobile}
                  alt={product.name}
                  className={`
                    rounded-xl
                    w-full
                    ${quantity > 0 ? 'border-2 border-[#C83B0E]' : ''}
                  `}
                />

                {/* BUTTON */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">

                  {quantity === 0 ? (

                    <button
                      onClick={() => addToCart(product)}
                      className="
                        bg-white
                        border
                        border-[#AD8A85]
                        hover:border-[#C83B0E]
                        hover:text-[#C83B0E]
                        transition
                        rounded-full
                        px-6
                        py-3
                        flex
                        items-center
                        gap-2
                        font-semibold
                        shadow-md
                        cursor-pointer
                        whitespace-nowrap
                      "
                    >
                      <img src={cartIcon} alt="cart" />
                      Add to Cart
                    </button>

                  ) : (

                    <div
                      className="
                        bg-[#C83B0E]
                        text-white
                        rounded-full
                        px-4
                        py-3
                        flex
                        items-center
                        gap-10
                        shadow-md
                      "
                    >

                      <button
                        onClick={() =>
                          decreaseQuantity(product.name)
                        }
                        className="
                          w-5
                          h-5
                          border
                          border-white
                          rounded-full
                          flex
                          items-center
                          justify-center
                          hover:bg-white
                          hover:text-[#C83B0E]
                          transition
                          cursor-pointer
                        "
                      >
                        -
                      </button>

                      <span className="font-semibold">
                        {quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(product.name)
                        }
                        className="
                          w-5
                          h-5
                          border
                          border-white
                          rounded-full
                          flex
                          items-center
                          justify-center
                          hover:bg-white
                          hover:text-[#C83B0E]
                          transition
                          cursor-pointer
                        "
                      >
                        +
                      </button>

                    </div>

                  )}

                </div>
              </div>

              {/* TEXT */}
              <div className="mt-10">
                <p className="text-[#AD8A85] text-sm">
                  {product.category}
                </p>

                <h2 className="font-semibold text-lg">
                  {product.name}
                </h2>

                <span className="text-[#C83B0E] font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Produtos