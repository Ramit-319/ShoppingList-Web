import { v4 as uuid } from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "../actions/types";


const initialState = {
  items: [],
  loading: false
}//once we start to get the data ie once we make the request then loading=true
//when we get the data bacl then loading = false

// { id: uuid(), name: 'Eggs' },
// { id: uuid(), name: 'Milk' },
// { id: uuid(), name: 'Steak' },
// { id: uuid(), name: 'Water' },

export default function(state = initialState, action){
  switch(action.type){
    case GET_ITEMS:
      return {
        ...state
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;

  }
}

// ...state.items creates a copy of the original items because we cant mutate items
