import { createContext } from 'react';

// create a context aka global variable
export const RestaurantContext = createContext({res:[], getAllRes:(value) => {}});