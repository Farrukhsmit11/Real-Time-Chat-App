import React, { useEffect, useState } from 'react'

const useDebounce = (query, delay) => {
    const [debounce, setDebounce] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(query)
        }, delay)

        return () => clearTimeout(timer)
    }, [query])

    return debounce
}

export default useDebounce