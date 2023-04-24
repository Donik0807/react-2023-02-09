export const selectMenuModule = (state) => state.menu;

export const selectDishById = (state, { dishId }) => selectMenuModule(state).entities[dishId];

export const selectDishIds = (state) => selectMenuModule(state).ids;