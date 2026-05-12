function Produtos({ products, addToCart }) {
  return (
    <section>
      <h1 className="text-[45px] font-bold">
        Desserts
      </h1>
      <div className="grid gap-6">
        {products.map((product) => (
          <div key={product.name}>
            <img src={product.image.mobile} alt={product.name} className="rounded-xl"/>
            <button onClick={() => addToCart(product)}
                  className="
                    bg-white
                    border
                    border-rose-300
                    px-4
                    py-2
                    rounded-full
                    hover:border-red-500
                    hover:text-red-500
                    transition
                    cursor-pointer
                  "
                >
                Add to Cart
            </button>
            <div className="mt-4">
              <p className="text-rose-400 text-sm">{product.category}</p>
              <h2 className="font-semibold text-lg">{product.name}</h2>
                <span className="text-red-500 font-bold">${product.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Produtos;