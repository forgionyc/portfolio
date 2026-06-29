class PortfolioController < InertiaController
  def index
    render inertia: {
      message: "Hello im carlos asdasd"
    }
  end
end