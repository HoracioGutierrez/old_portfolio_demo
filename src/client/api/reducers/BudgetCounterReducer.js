export const BudgetCounterInitState = {
    total : {
        amount : 0
    },
    cursos : {},
    form_submit : {
        title : "",
        price : 0,
        cant : 3
    },
    form_edit : {}
}

const BudgetCounterReducer = (state,action) => {
    switch(action.type){

        case "CURSO_CREATE_SUCCESS": {
            
        }

        case "CURSO_CREATE_ERROR": {

        }

        case "CURSO_CREATE_PENDING": {

        }

        case "SUBMIT_FORM_CHANGE" : 
            return {
                ...state,
                form_submit : {
                    ...state.form_submit,
                    [action.target] : action.value
                }
            }
    }
}

export default BudgetCounterReducer