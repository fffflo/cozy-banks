import {
  FETCH_BANK_ACCOUNTS_SUCCESS,
  FETCH_BANK_ACCOUNT_GROUPS_SUCCESS,
  CREATE_BANK_ACCOUNT_GROUPS_SUCCESS,
  UPDATE_BANK_ACCOUNT_GROUPS_SUCCESS,
  DELETE_BANK_ACCOUNT_GROUPS_SUCCESS
} from '../actions'

export const accounts = (state = [], action) => {
  switch (action.type) {
    case FETCH_BANK_ACCOUNTS_SUCCESS:
      return action.accounts
    default:
      return state
  }
}

export const groups = (state = [], action) => {
  switch (action.type) {
    case FETCH_BANK_ACCOUNT_GROUPS_SUCCESS:
      return action.groups
    case CREATE_BANK_ACCOUNT_GROUPS_SUCCESS:
      return [...state, action.group]
    case UPDATE_BANK_ACCOUNT_GROUPS_SUCCESS:
      return state.map(group => (group._id === action.group._id ? action.group : group))
    case DELETE_BANK_ACCOUNT_GROUPS_SUCCESS:
      return state.filter(group => (group._id !== action.group._id))
    default:
      return state
  }
}

export const isShared = account => {
  return account.institutionLabel === 'CIC'
}

export default accounts