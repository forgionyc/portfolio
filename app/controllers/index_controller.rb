class IndexController < InertiaController
  def index
    render inertia: "index", props: {
      message: "Hello world"
    }
  end
end