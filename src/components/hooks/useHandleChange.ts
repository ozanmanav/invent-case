export const useHandleChange = <T>(
    setFunction: React.Dispatch<T>,
    callback?: () => void
) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value as T)

        if (callback) {
            callback()
        }
    }
}
