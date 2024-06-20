const MENU = {
    Home: '[data-cy="nav_a"] > :nth-child(1)',
    News: '[data-cy="nav_a"] > :nth-child(2)',
    Curiosities: '[data-cy="nav_a"] > :nth-child(3)',
    Contact_us: '[data-cy="nav_a"] > :nth-child(4)'

}

const IMAGES = {
    Dandrois: '[data-cy="article_picture1"] > img',
    Russian_illustrator: '[data-cy="article_picture2"] > img',
    Bugdroid: '[data-cy="article_img1"]'
}

const TITLES_SUBTITLES = {
    page_title: '[data-cy="header_title"]',
    page_subtitle: '[data-cy="header_subtitle"]',
    article_title: '[data-cy="article_title"]',
    article_subtitle: '[data-cy="article_subtitle"]',
    article_subtitle1: '[data-cy="article_subtitle1"]',
    aside_subtitle: '[data-cy="aside_subtitle1"]'

}

const TEXTS = {
    Android_mascot_history: '[data-cy="article_p1"]',
    The_first_version_pt1: '[data-cy="article_p2"]',
    The_first_version_pt2: '[data-cy="article_p3"]',

    A_new_mascot_appears_pt1: '[data-cy="article_p4"]',
    A_new_mascot_appears_pt2: '[data-cy="article_p5"]',
    A_new_mascot_appears_pt3: '[data-cy="article_p6"]',

    AndroidQ: '[data-cy="aside_p2"] > strong',
    Bugdroid: '[data-cy="article_p5"] > strong',
    Google: '[data-cy="article_p6"] > strong',


    Table_text:'[data-cy="aside_p1"]',
    Table_text2: '[data-cy="aside_p2"]',
    Table_text3: '[data-cy="aside_p3"]',
    Last_text: '[data-cy="article_p7"]',

    Footer: '[data-cy="footer_p1"]'

} 

const CANDYTABLE = {
    Cupcake: '[data-cy="aside_ul1"] > :nth-child(1)',
    Donut: '[data-cy="aside_ul1"] > :nth-child(2)',
    Eclair: '[data-cy="aside_ul1"] > :nth-child(3)',
    Frovo: '[data-cy="aside_ul1"] > :nth-child(4)',
    Gingerbread: '[data-cy="aside_ul1"] > :nth-child(5)',
    Honeycomb: '[data-cy="aside_ul1"] > :nth-child(6)',
    IceCreamSandwich: '[data-cy="aside_ul1"] > :nth-child(7)',
    JellyBean: '[data-cy="aside_ul1"] > :nth-child(8)',
    KitKat: '[data-cy="aside_ul1"] > :nth-child(9)',
    Lolipop: '[data-cy="aside_ul1"] > :nth-child(10)',
    Marshmallow: '[data-cy="aside_ul1"] > :nth-child(11)',
    Nougat: '[data-cy="aside_ul1"] > :nth-child(12)',
    Oreo: '[data-cy="aside_ul1"] > :nth-child(13)',
    Pie: '[data-cy="aside_ul1"] > :nth-child(14)',

}

export { MENU, IMAGES, TEXTS, TITLES_SUBTITLES, CANDYTABLE}