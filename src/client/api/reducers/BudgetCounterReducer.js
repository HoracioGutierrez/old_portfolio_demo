export const BudgetCounterInitState = {
    total : {
        pending : false,
        amount : 0,
        editable : false,
        previous : 0,
        concepts : []
    },
    cursos : {
        pending : false,
        list : []
    },
    form_submit : {
        title : "",
        price : 0,
        cant : 3,
        pending : false
    },
    form_edit : {
        title : "",
        price : 0,
        cant : 3,
        pending : false
    },
    modal : {
        open : false
    }
}

const BudgetCounterReducer = (state,action) => {

    switch(action.type){

        case "DETAIL_MODAL_CLOSE" : 
            return {
                ...state,
                modal : {
                    open : false
                }
            }

        case "DETAIL_MODAL_OPEN" : 
            return {
                ...state,
                modal : {
                    open : true
                }
            }

        case "TOTAL_EDITABLE_SAVE" : 
            return {
                ...state,
                total : {
                    ...state.total,
                    previous : 0,
                    editable : false
                }
            }

        case "TOTAL_INPUT_SET" : 
            return {
                ...state,
                total : {
                    ...state.total,
                    amount : action.nuevo_total
                }
            }

        case "TOTAL_EDITABLE_END" : 
            return {
                ...state,
                total : {
                    ...state.total,
                    amount : state.total.previous,
                    editable : false
                }
            }

        case "TOTAL_EDITABLE_START" : 
            return {
                ...state,
                total : {
                    ...state.total,
                    previous : state.total.amount,
                    editable : true
                }
            }

        case "CURSOS_DELETE_SUCCESS" : 
            return {
                ...state
            }

        case "CURSOS_DELETE_PENDING" : 
            return {
                ...state
            }

        case "TOTAL_UPDATE_SUCCESS" : 
            return {
                ...state,
                total : {
                    ...state.total,
                    amount : state.total.amount + action.price
                }
            }

        case "TOTAL_UPDATE_PENDING" : 
            return {
                ...state,
                total : {
                    ...state.total , 
                    pending : true
                }
            }

        case "CURSOS_REQUEST_SUCCESS" : 
            return {
                ...state,
                cursos : {
                    list : [...action.cursos],
                    pending : false
                }
            }

        case "CURSOS_REQUEST_PENDING" : 
            return {
                ...state,
                cursos : {
                    ...state.cursos,
                    pending : true
                }
            }

        case "TOTAL_REQUEST_SUCCESS" : 
            return {
                ...state,
                total : {
                    ...state.total,
                    amount : action.nuevo_total,
                    pending : false,
                    concepts : action.concepts
                }
            }

        case "TOTAL_REQUEST_PENDING" : 
            return {
                ...state,
                total : {
                    ...state.total,
                    pending : true
                }
            }

        case "CURSO_CREATE_SUCCESS": 
            return {
                ...state,
                cursos : {
                    list : [
                        ...state.cursos.list,
                        action.curso_nuevo
                    ],
                    pending : false
                },
                form_submit : {
                    ...BudgetCounterInitState.form_submit
                }
            }

        case "CURSO_CREATE_ERROR": 
            return {
                ...state,
                form_submit : {
                    ...state.form_submit,
                    pending : false
                }
            }

        case "CURSO_CREATE_PENDING": 
            return {
                ...state,
                form_submit : {
                    ...state.form_submit,
                    pending : true
                }
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