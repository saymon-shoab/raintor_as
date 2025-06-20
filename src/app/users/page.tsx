'use client'
import { ErrorBoundry } from '@/components/ErrorBoundry';
import Header from '@/components/Header';
import UserCard from '@/components/UserCard';
import UserCardLoader from '@/components/UserCardLoader';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react'

const UserPage = () => {
    const {data, loading, error, hasMore, loadMore} = useInfiniteScroll();
    const {targetRef, isIntersecting} = useIntersectionObserver();

    useEffect(()=>{
        if (isIntersecting && hasMore && !loading) {
            loadMore()
        }
    },[isIntersecting, hasMore, loadMore, loading])
  return ( 
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Users Feed
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Infinite scroll implementation with IntersectionObserver API
            </p>

            <div className="flex items-center space-x-4">
              <div className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                <span className="text-sm font-medium">{data.length} users loaded</span>
              </div>

              {loading && (
                <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
                  <span className="text-sm">Loading...</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* 👇 Wrap only the dynamic content in the error boundary */}
          <ErrorBoundry>
            <div className="space-y-6">
              {data.map((user, index) => (
                <UserCard key={index} user={user} index={index % 10} />
              ))}

              {loading && (
                <div className="space-y-6">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <UserCardLoader key={`skeleton-${index}`} />
                  ))}
                </div>
              )}

              {hasMore && (
                <div ref={targetRef} className="h-20 flex items-center justify-center">
                  {!loading && (
                    <p className="text-gray-500 dark:text-gray-400">
                      Scroll down to load more users...
                    </p>
                  )}
                </div>
              )}

              {!hasMore && data.length > 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">
                    That&apos;s all! You&apos;ve reached the end of the feed.
                  </p>
                </div>
              )}
            </div>
          </ErrorBoundry>

          {/* Optional: show fallback error outside if the hook itself fails */}
          {error && (
            <div className="text-center mt-8 text-red-500 dark:text-red-400">
              Error loading users: {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserPage