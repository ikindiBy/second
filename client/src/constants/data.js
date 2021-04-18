
export const groups = [
    {
        groupId: 10,
        name: 'Саженцы',
        subGroup: [
            {
                subGroupId: 101,
                name: 'Петуния',
            },
            {
                subGroupId: 102,
                name: 'Лабелия',
            },
            {
                subGroupId: 103,
                name: 'Астра',
            },
            {
                subGroupId: 'begonia',
                name: 'Бегония',
            },
        ]
    },
    {
        groupId: 20,
        name: 'Вазоны и подвесы',
        subGroup: [
            {
                subGroupId: 201,
                name: 'Петуния в подвесах',
            },
        ]
    },
    // {
    //     groupId: 30,
    //     name: 'Другое',
    // }
];

export const products = [
    {
        productId: 1029,
        title: 'Петуния вегетативная среднецветковая',
        imageSrc: '/img/img_1_01.jpg',
        imagesGallery: [
            '/img/img_1_01.jpg',
            '/img/img_1_02.jpg',
        ],
        description: 'Кустовая петуния.',
        price: 2.5,
        groupId: 10,
        subGroupId: 101,
        type: 'Вегетативная',
        isPopular: true,
        durationFlowering: '6 - 9',
        hight: '25см',
        diametrBush: '30 - 50см',
        bright: 'яркий солнечный свет',
        ground: 'Плодородная, чернозем, слабокислая',
        enimies: 'Тля, белокрылка, паутинный клещ',
        diseas: 'Мучная роса, черная ножка',
    },
    {
        productId: 2001,
        groupId: 20,
        subGroupId: 201,
        title: 'Петуния розовая в подвесном вазоне',
        imageSrc: '/img/pot_petun_pink.jpg',
        imagesGallery: [
            '/img/pot_petun_pink.jpg',
        ],
        description: 'Кустовая петуния.',
        price: 5,
    }
];

export const slides = [
    {
        slideId: 3001,
        articleId: 2001,
        imageSlideSrc: '/img/img_slider_002.jpg',
    },
    {
        slideId: 3002,
        articleId: 2001,
        imageSlideSrc: '/img/img_slider_003.jpg',
    },
];

export const articles = [
    {
        articleId: 2001,
        title: 'Сайт работает в тестовом режиме.',
        imageSrc: '/img/img_1_02.jpg',
        description: 'Сайт работает в тестовом режиме.',
        content: 'Сайт работает в тестовом режиме.',
    },
];