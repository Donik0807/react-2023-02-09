export const selectUsersModule = (state) => state.users;

export const selectUserById = (state, { userId }) => selectUsersModule(state).entities[userId];

export const selectUsersIds = (state) => selectUsersModule(state).ids;