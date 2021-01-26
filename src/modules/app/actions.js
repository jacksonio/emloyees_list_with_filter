export const APP_ACTIONS = {
    APP_FILTER_EMPLOYESS: 'APP_FILTER_EMPLOYESS'
}

export function filterEmployees(filterBy) {
    return {
        type: APP_ACTIONS.APP_FILTER_EMPLOYESS,
        payload: filterBy
    }
}
