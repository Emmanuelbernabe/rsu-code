import './styles/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ScrollSmoother } from 'gsap/all'


import home from './home'
import offline from './offline'
import ecommerce from './ecommerce'
import rp from './rp'
import partnerships from './partnerships'
import careers from './careers'
import startups from './startups'

let isHome = document.querySelector('body').classList.contains('body--home')
if(isHome){
  home()
}

let isOffline = document.querySelector('body').classList.contains('body--offline')
if(isOffline){
  offline()
}

let isPartnerships = document.querySelector('body').classList.contains('body--partnerships')
if(isPartnerships){
  partnerships()
}

let isEcommerce = document.querySelector('body').classList.contains('body--ecommerce')
if(isEcommerce){
  ecommerce()
}

let isRp = document.querySelector('body').classList.contains('body--rp')
if(isRp){
  rp()
}

let isCareers = document.querySelector('body').classList.contains('body--careers')
if(isCareers){
  careers()
}

let isStartups = document.querySelector('body').classList.contains('body--startups')
if(isStartups){
  startups()
}

