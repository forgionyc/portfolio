class PortfolioController < InertiaController
  def index
    render inertia: {
      first_name: "Carlos",
      last_name: "Forgiony",
      message: "Hello im carlos asdasd"
    }
  end
end
