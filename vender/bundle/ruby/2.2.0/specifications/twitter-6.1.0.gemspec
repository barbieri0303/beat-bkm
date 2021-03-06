# -*- encoding: utf-8 -*-
# stub: twitter 6.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "twitter"
  s.version = "6.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.5") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Erik Michaels-Ober", "John Nunemaker", "Wynn Netherland", "Steve Richert", "Steve Agalloco"]
  s.date = "2017-01-14"
  s.description = "A Ruby interface to the Twitter API."
  s.email = ["sferik@gmail.com"]
  s.homepage = "http://sferik.github.com/twitter/"
  s.licenses = ["MIT"]
  s.required_ruby_version = Gem::Requirement.new(">= 2")
  s.rubygems_version = "2.4.8"
  s.summary = "A Ruby interface to the Twitter API."

  s.installed_by_version = "2.4.8" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<addressable>, ["~> 2.5"])
      s.add_runtime_dependency(%q<buftok>, ["~> 0.2.0"])
      s.add_runtime_dependency(%q<equalizer>, ["= 0.0.11"])
      s.add_runtime_dependency(%q<faraday>, ["~> 0.11.0"])
      s.add_runtime_dependency(%q<http>, ["~> 2.1"])
      s.add_runtime_dependency(%q<http_parser.rb>, ["~> 0.6.0"])
      s.add_runtime_dependency(%q<memoizable>, ["~> 0.4.2"])
      s.add_runtime_dependency(%q<naught>, ["~> 1.1"])
      s.add_runtime_dependency(%q<simple_oauth>, ["~> 0.3.1"])
      s.add_development_dependency(%q<bundler>, ["~> 1.0"])
    else
      s.add_dependency(%q<addressable>, ["~> 2.5"])
      s.add_dependency(%q<buftok>, ["~> 0.2.0"])
      s.add_dependency(%q<equalizer>, ["= 0.0.11"])
      s.add_dependency(%q<faraday>, ["~> 0.11.0"])
      s.add_dependency(%q<http>, ["~> 2.1"])
      s.add_dependency(%q<http_parser.rb>, ["~> 0.6.0"])
      s.add_dependency(%q<memoizable>, ["~> 0.4.2"])
      s.add_dependency(%q<naught>, ["~> 1.1"])
      s.add_dependency(%q<simple_oauth>, ["~> 0.3.1"])
      s.add_dependency(%q<bundler>, ["~> 1.0"])
    end
  else
    s.add_dependency(%q<addressable>, ["~> 2.5"])
    s.add_dependency(%q<buftok>, ["~> 0.2.0"])
    s.add_dependency(%q<equalizer>, ["= 0.0.11"])
    s.add_dependency(%q<faraday>, ["~> 0.11.0"])
    s.add_dependency(%q<http>, ["~> 2.1"])
    s.add_dependency(%q<http_parser.rb>, ["~> 0.6.0"])
    s.add_dependency(%q<memoizable>, ["~> 0.4.2"])
    s.add_dependency(%q<naught>, ["~> 1.1"])
    s.add_dependency(%q<simple_oauth>, ["~> 0.3.1"])
    s.add_dependency(%q<bundler>, ["~> 1.0"])
  end
end
