class HomeController < ApplicationController
  def index
    @nav = :home
  end

  def about
    @nav = :about
  end
end
