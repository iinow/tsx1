interface Options {
    message: string
}

export const checked = (value: boolean, options: Options) => {
    if(value !== true){
        return options.message || 'must be checked'
    }
}