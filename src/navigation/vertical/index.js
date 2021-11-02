import { Box, PieChart, Circle, Mail, Home, FileText } from 'react-feather'

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
    icon: <FileText size={20} />,
    navLink: '/second-page'
  },

  {
    id: 'products',
    title: 'Products',
    icon: <Box size={20} />,
    children:[
      
  {
    id: 'brand',
    title: 'Brand',
    icon: <Circle size={20} />,
    navLink: '/brand'
  }
]
  },
  {
    id: 'designations',
    title: 'Designations',
    icon: <PieChart size={20} />,
    children:[
      
  {
    id: 'designation',
    title: 'Designation',
    icon: <Circle size={20} />,
    navLink: '/designation'
  }
]
  }
]
