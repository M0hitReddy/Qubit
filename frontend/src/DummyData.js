const dummyData = [
    {
        id: 1,
        name: 'Olivia Martin',
        email: 'olivia.martin@email.com',
        image: '/avatars/01.png',
        avatarFallback: 'OM',
        amount: '+$1,999.00'
    },
    {
        id: 2,
        name: 'Jackson Lee',
        email: 'jackson.lee@email.com',
        image: '/avatars/02.png',
        avatarFallback: 'JL',
        amount: '+$39.00'
    },
    {
        id: 3,
        name: 'Isabella Nguyen',
        email: 'isabella.nguyen@email.com',
        image: '/avatars/03.png',
        avatarFallback: 'IN',
        amount: '+$299.00'
    },
    {
        id: 4,
        name: 'William Kim',
        email: 'will@email.com',
        image: '/avatars/04.png',
        avatarFallback: 'WK',
        amount: '+$99.00'
    },
    {
        id: 5,
        name: 'Sofia Davis',
        email: 'sofia.davis@email.com',
        image: '/avatars/05.png',
        avatarFallback: 'SD',
        amount: '+$39.00'
    },
    {
        id: 6,
        name: 'William Kim',
        email: 'will@email.com',
        image: '/avatars/04.png',
        avatarFallback: 'WK',
        amount: '+$99.00'
    },
    {
        id: 7,
        name: 'William Kim',
        email: 'will@email.com',
        image: '/avatars/04.png',
        avatarFallback: 'WK',
        amount: '+$99.00'
    },
    {
        id: 8,
        name: 'William Kim',
        email: 'will@email.com',
        image: '/avatars/04.png',
        avatarFallback: 'WK',
        amount: '+$99.00'
    },
    {
        id: 9,
        name: 'William Kim',
        email: 'will@email.com',
        image: '/avatars/04.png',
        avatarFallback: 'WK',
        amount: '+$99.00'
    },
    {
        id: 10,
        name: 'William Kim',
        email: 'will@email.com',
        image: '/avatars/04.png',
        avatarFallback: 'WK',
        amount: '+$99.00'
    },
    {
        id: 11,
        name: 'William Kim',
        email: 'will@email.com',
        image: '/avatars/04.png',
        avatarFallback: 'WK',
        amount: '+$99.00'
    },
    {
        id: 12,
        name: 'William Kim',
        email: 'will@email.com',
        image: '/avatars/04.png',
        avatarFallback: 'WK',
        amount: '+$99.00'
    },
    {
        id: 13,
        name: 'William Kim',
        email: 'will@email.com',
        image: '/avatars/04.png',
        avatarFallback: 'WK',
        amount: '+$99.00'
    },
    {
        id: 14,
        name: 'William Kim',
        email: 'will@email.com',
        image: '/avatars/04.png',
        avatarFallback: 'WK',
        amount: '+$99.00'
    }
];

const dummyMessages = [
    {
        id: 1,
        sender: 'me',
        message: 'Hello, how are you?',
        time: '10:30 AM'
    },
    {
        id: 2,
        sender: 'other',
        message: 'I am fine, thank you. How about you?',
        time: '10:32 AM'
    },
    {
        id: 3,
        sender: 'me',
        message: 'I am doing well, thank you.',
        time: '10:33 AM'
    },
    {
        id: 4,
        sender: 'other',
        message: 'Great to hear that.',
        time: '10:34 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 4,
        sender: 'other',
        message: 'Great to hear that.',
        time: '10:34 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 4,
        sender: 'other',
        message: 'Great to hear that.',
        time: '10:34 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 4,
        sender: 'other',
        message: 'Great to hear that.',
        time: '10:34 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 4,
        sender: 'other',
        message: 'Great to hear that.',
        time: '10:34 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    },
    {
        id: 5,
        sender: 'me',
        message: 'Yes, it is a good day today.',
        time: '10:35 AM'
    }
];

export { dummyData, dummyMessages };