

import { useState, useEffect, useCallback } from 'react'
import type { IUser } from '@/types'

interface UseInfiniteScrollResult {
  data: IUser[]
  loading: boolean
  error: string | null
  hasMore: boolean
  loadMore: () => void
}

// const API_URL = 'https://tech-test.raintor.com/api/users/GetUsersList'

export function useInfiniteScroll(): UseInfiniteScrollResult {
  const [data, setData] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)

//   const limit = 10

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return

    setLoading(true)
    setError(null)

    try {
    //   const response = await fetch(`${API_URL}?take=${limit}&skip=${page * limit}`)
      const response = await fetch(`/api/users?take=10&skip=0`)
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const result = await response.json()

      if (result.users.length === 0 || data.length + result.users.length >= result.total) {
        setHasMore(false)
      }

      setData(prev => [...prev, ...result.users])
      setPage(prev => prev + 1)
    } catch (err) {
      setError('Failed to load users')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [page, loading, hasMore, data.length])

  useEffect(() => {
    loadMore()
  }, [])

  return { data, loading, error, hasMore, loadMore }
}
