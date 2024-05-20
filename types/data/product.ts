
export type ProductForm = {
    content:string,
    thumbnail:File|null,
    productName:string
}

export const productHeader = [
    {
        title: 'Id',
        align: 'start',
        sortable: false,
        key: 'id',
    },
    {
        title: 'Thumbnail',
        align: 'start',
        sortable: false,
        key: 'thumbnail',
    },
    {
        title: 'Nama Produk',
        align: 'start',
        sortable: false,
        key: 'product_name',
    },
    {
        title: 'Tanggal update',
        align: 'start',
        sortable: false,
        key: 'created_at',
    },
    {
        title: 'Aksi',
        align: 'start',
        sortable: false,
        key: 'action',
    }
]