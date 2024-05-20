import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon, LoginIcon, MoodHappyIcon, TypographyIcon, UserPlusIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },

    { header: 'Artikel' },
    {
        title: 'Artikel',
        icon: LayoutDashboardIcon,
        to: '/blog'
    },
    {
        title: 'Buat Artikel',
        icon: LayoutDashboardIcon,
        to: '/blog/compose'
    },
    { header: 'Produk' },
    {
        title:"Produk",
        icon:MoodHappyIcon,
        to:'/product'
    },
    {
        title:"Tambah Product",
        icon:MoodHappyIcon,
        to:'/product/create'
    },
    { header: 'Tentang' },
    {
        title:"Tentang Kami",
        icon:MoodHappyIcon,
        to:'/about'
    },
    {
        title:"Informasi Kontak",
        icon:MoodHappyIcon,
        to:'/about/contact'
    },
    {
        title:"Gallery",
        icon:MoodHappyIcon,
        to:'/about/gallery'
    },
    { header: 'utilities' },
    {
        title: 'Typography',
        icon: TypographyIcon,
        to: '/ui/typography'
    },
    {
        title: 'Shadow',
        icon: CopyIcon,
        to: '/ui/shadow'
    },
    { header: 'Extra' },
    {
        title: 'Icons',
        icon: MoodHappyIcon,
        to: '/icons'
    },
    {
        title: 'Sample Page',
        icon: ApertureIcon,
        to: '/sample-page'
    },
];

export default sidebarItem;
