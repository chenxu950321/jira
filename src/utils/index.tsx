import { useEffect, useState } from "react"

export const isFalsy = (value:unknown) => value === 0 ? false : !value
export const cleanObject = (obj : object) => {
    // Object.assign({},obj)
    const res = {...obj}
    Object.keys(res).forEach(key => {
        //@ts-ignore
        const value = res[key]
        if(isFalsy(value)){
            //@ts-ignore
            delete res[key]
        }
    })
    return res
}

export const useDebounce = (value : unknown, delay? : number) : any => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}