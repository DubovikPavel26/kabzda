type ActionType = {
    type: string
}
const AccordionRducer = (state: boolean, action: ActionType) => {
    switch (action.type){
        case "TOOGLE-COLLABSED":
            return !state
        default: return state
    }
}

export const ToogleCollabsedAC = () => {
    return {
        type: "TOOGLE-COLLABSED"
    } as const
}

export default AccordionRducer