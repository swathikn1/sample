function Service() {
  return (
    <section className="services">
      <input type="radio" name="slider" id="s1" defaultChecked />
      <input type="radio" name="slider" id="s2" />
      <input type="radio" name="slider" id="s3" />

      <h2>What We Serve</h2>

      <div className="slider">
        <div className="slides">
          <div className="card">
            <h3>Classic Pizzas</h3>
            <p>Margherita, Pepperoni, Veggie Delight.</p>
          </div>

          <div className="card">
            <h3>Wood Fired</h3>
            <p>Authentic stone oven pizzas.</p>
          </div>

          <div className="card">
            <h3>Fresh Ingredients</h3>
            <p>Organic toppings & premium cheese.</p>
          </div>
        </div>
      </div>

      <div className="controls">
        <label htmlFor="s3" className="prev prev-1">&#10094;</label>
        <label htmlFor="s1" className="prev prev-2">&#10094;</label>
        <label htmlFor="s2" className="prev prev-3">&#10094;</label>

        <label htmlFor="s2" className="next next-1">&#10095;</label>
        <label htmlFor="s3" className="next next-2">&#10095;</label>
        <label htmlFor="s1" className="next next-3">&#10095;</label>
      </div>
    </section>
  )
}

export default Service
