import { Mail, Home } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  },

  {
    id: 'products',
    title: 'Products',
    icon: <Mail size={20} />,
    children:[
      
  {
    id: 'brand',
    title: 'Brand',
    icon: <Mail size={20} />,
    navLink: '/brand'
  }
]
  }
]
