interface SkeketonLoaderProps {
    className?: string
    count?: number
}

export function SkeletionLoader({
    className = '',
    count = 1
}: SkeketonLoaderProps) {
    return (
        <>
        {
            Array.from({length:count}).map((_, index)=> (
               <div 
                key={index}
                className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}
               />
            ))
        }
        </>
    )
}

export const UserCardLoader = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-4">
                <SkeletionLoader className="w-12 h-12 rounded-full" />
                <div className="flex-1 space-y-2">
                <SkeletionLoader className="h-4 w-32" />
                <SkeletionLoader className="w-48 h-3" />
                </div>
                <div className="mt-4 space-y-2">
                <SkeletionLoader className="h-3 w-full" />
                <SkeletionLoader className="w-3/4 h-3" />
                </div>
                
            </div>
        </div>
    )
}

export default UserCardLoader