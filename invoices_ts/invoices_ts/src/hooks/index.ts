import {useState} from "react"

export const useField = (type:string) => {
    const [value, setValue] = useState<string>('')
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const reset = () => {
        setValue('')
    }

    return {
        type,
        value,
        onChange,
        reset
    }

}