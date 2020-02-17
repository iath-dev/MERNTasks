export const PROJECT_LIST = [
    {
        name: 'MiPLSV',
        id: '1',
    },
    {
        name: 'MiPESV',
        id: '2',
    }
]

export const TASKS_LIST = [
    {
        name: 'Elegir Plataforma',
        state: true,
        id: '1',
        pid: "2",
    },
    {
        name: 'Elegir Tema',
        state: false,
        id: '2',
        pid: "1",
    },
    {
        name: 'Elegir Plataforma de pago',
        state: false,
        id: '3',
        pid: "1",
    },
    {
        name: 'Elegir Hosting',
        state: true,
        id: '4',
        pid: "2",
    },
]

export default { PROJECT_LIST, TASKS_LIST }
