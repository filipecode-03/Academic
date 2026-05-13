import cart from '../images/icon-add-to-cart.svg'

function Produtos({ products, addToCart }) {
  return (
    <section>
      <h1 className="text-[45px] font-bold">
        Desserts
      </h1>
      <div className="grid gap-6">
        {products.map((product) => (
          <div key={product.name}>
            <div className="relative">
              <img src={product.image.mobile} alt={product.name} className="rounded-xl"/>
              <button onClick={() => addToCart(product)}
                    className="
                      absolute
                      bottom-0.5
                      left-1/2
                      -translate-x-1/2
                      translate-y-1/2
                      bg-white
                      border
                      border-[#A38F8E]
                      px-4
                      py-2
                      rounded-full
                      hover:border-red-500
                      hover:text-red-500
                      transition
                      cursor-pointer
                      flex items-center gap-2 font-semibold text-[#312926] shadowB
                    "
                  >
                  <img src={cart} alt="cart" />
                  Add to Cart
              </button>
            </div>
            <div className="mt-10">
              <p className="text-[#A38F8E] text-sm">{product.category}</p>
              <h2 className="font-semibold text-[#312926] text-lg">{product.name}</h2>
                <span className="text-[#C25324] font-bold">${product.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Produtos;