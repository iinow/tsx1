export interface Pageable {
    page: number
    size: number
    sort: string
}

export function createPageable(page: number, size: number, sortColumn: string, sortType: string): Pageable{
    return {
        page,
        size,
        sort: `${sortColumn},${sortType}`
    }
}