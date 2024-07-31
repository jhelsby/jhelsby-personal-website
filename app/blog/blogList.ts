interface BlogList {
    slug: string;
    title: string;
    date: string;
}

export const blogList: BlogList[] = [
    {
        slug: 'internships',
        title: 'Internship Applications',
        date: '2024-07-31'
    },
    {
        slug: 'dependencies',
        title: 'Dependencies',
        date: '2024-05-31'
    },
    {
        slug: 'uncertainty',
        title: 'Handling Uncertainty',
        date: '2024-04-26'
    },
    {
        slug: 'first-post',
        title: 'My First Post - Introduction and Motivation',
        date: '2024-04-10'
    },
];