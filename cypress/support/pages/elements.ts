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

export { MENU, IMAGES, TEXTS, TITLES_SUBTITLES}