interface categoriesArrayProps {
    name: string,
    id: number,
    action: () => void,
}

export const categoriesArray: categoriesArrayProps[] = [
    {
        id: 0,
        name: 'Capinhas',
        action: () => {
            console.log('capinhas')
        }
    },

    {
        id: 1,
        name: 'Películas',
        action: () => {
            console.log('películas')
        },
    },
    {
        id: 2,
        name: 'Cabos',
        action: () => {
            console.log('capinhas')
        }
    },

    {
        id: 3,
        name: 'Acessórios',
        action: () => {
            console.log('películas')
        },
    },
    {
        id: 4,
        name: 'Displays',
        action: () => {
            console.log('capinhas')
        }
    },
];

