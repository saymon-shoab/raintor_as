'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import {Code, Home, MapPin, Users} from 'lucide-react'
import {motion} from 'framer-motion'
const Header = () => {
    const pathname = usePathname()
    console.log(pathname)

    const navItems = [
        {path: '/',icon: Home, lebel:'Home'},
        {path: '/location',icon: MapPin, lebel:'Location'},
        {path: '/users',icon: Users, lebel:'Users'},
    ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <Link href='/' className="flex items-center space-x-2">
                <Code className=" w-8 h-8 text-blue-600 dark:text-blue-400"/>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    Raintor Assignment
                  </span>
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map(({path,icon:Icon, lebel})=>(
                        <Link
                         key={path}
                         href={path}
                         className="relative flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:text-blue-400"
                        >
                         <Icon className="w-4 h-4"/>
                         <span>{lebel}</span>
                         {pathname === path && (
                            <motion.div 
                             layoutId="activeTab"
                             className="absolute inset-0 bg-blue-500 dark:bg-blue-900/50 rounded-md -z-10"
                            />
                         )}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header