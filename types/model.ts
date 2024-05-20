export type BlogType = {
    content: string | null
    created_at: string
    id: number
    thumbnail: string | null
}

export type ProductType = {
    content: string | null
    created_at: string
    id: number
    product_name: string | null
    thumbnail: string | null
}

export type ProductPriceType = {
    created_at: string
    duration: string | null
    exclude: string | null
    id: number
    include: string | null
    name: string | null
    price: number | null
    product_id: number | null
    product_price_category_id: number | null
    result: string | null
}

export type ProductPriceCategoryType = {
    category_group: string | null
    created_at: string
    id: number
    name: string | null
    value: string | null
}

export type ContactInformationType = {
    created_at: string
    id: number
    key: string | null
    name: string | null
    value: string | null
}

export type AboutType = {
    about: string | null
    about_header: string | null
    about_thumbnail: string | null
    created_at: string
    founder_bio: string | null
    founder_name: string | null
    founder_picture: string | null
    id: number
}