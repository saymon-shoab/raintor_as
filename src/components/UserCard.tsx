'use client'

import type { IUser } from '@/types'
import { motion } from 'framer-motion'
import { Building, Mail, MapPin, Phone, GraduationCap } from 'lucide-react'

const UserCard = ({ user, index }: { user: IUser; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200 p-4"
    >
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-16 h-16 rounded-full object-cover border border-gray-300 dark:border-gray-600"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user.company?.title}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
          <GraduationCap className="w-4 h-4 flex-shrink-0" />
          <span>{user.university}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
          <Building className="w-4 h-4 flex-shrink-0" />
          <span>{user.company?.title}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default UserCard
