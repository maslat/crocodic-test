export const userReducer = (state,action) => {
    switch(action.type){
        case 'CREATE_USER':
            return{
                ...state,
                user: [...state.user, action.payload]
            };
        
        case 'EDIT_USER':
            const editingUser = action.payload;
            const updatedUser = state.user.map(user=>{
                if(user.id === editingUser.id){
                    return editingUser;
                }
                return user;
            });
            return{
                ...state,
                user: updatedUser
            }

            case 'DELETE_USER':
                return { 
                    ...state,
                    user: state.user.filter(user => user.id !== action.payload)
                };

            default: return state;
    }
} 