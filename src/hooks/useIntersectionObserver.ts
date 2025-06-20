import { useEffect, useRef, useState } from "react"


interface UseIntersectionObserverOptions {
    threshold?: number
    rootMargin?: string
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=> {
        const observer = new IntersectionObserver(
            ([entry])=>{
                setIsIntersecting(entry.isIntersecting)
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px'
            }
        )
        const currentTarget = targetRef.current
        if (currentTarget) {
            observer.observe(currentTarget)
        }
        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget)
            }
        }
    },[options.rootMargin, options.threshold])

    return {targetRef,isIntersecting}
}