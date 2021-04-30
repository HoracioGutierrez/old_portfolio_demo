import React from 'react'

const CursoList = ({cursos}) => {
    return (
        <div>
            {cursos.map(curso=> 
                <CursoItem key={curso._id} curso={curso} editRequest={editRequest} addToTotal={addToTotal} updateCursos={updateCursos}/>
            )}
        </div>
    )
}

export default CursoList
