import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const copyState = [...state]

            if (action.payload === 'up') {
                return copyState.sort((a, b) => a.name.localeCompare(b.name))
            }

            return copyState.sort((a, b) => b.name.localeCompare(a.name))
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}
