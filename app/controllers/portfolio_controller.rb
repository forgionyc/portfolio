class PortfolioController < InertiaController

  def index
    information = Rails.configuration.portfolio.information

    render inertia: {
      first_name: information[:first_name],
      last_name: information[:last_name],
      email: information[:email],
      linkedin: information[:linkedin],
      github: information[:github],
      message: "Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd
      Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd
      Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd
      Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd Hello im carlos asdasd "
    }
  end
end
