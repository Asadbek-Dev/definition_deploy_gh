import React from 'react'

const Result = ({option,option1,selected}) => {
  return (
        <>
        {option==='eng' && option1==='uz' ?<div className="result">
          <h3 className="result_word">{selected.word_eng}</h3>
          <p className="result_definition">{selected.definition_uz}</p>
      </div>:''}
        {option==='eng' && option1==='eng' ?<div className="result">
          <h3 className="result_word">{selected.word_eng}</h3>
          <p className="result_definition">{selected.definition_eng}</p>
      </div>:''}
        {option==='uz' && option1==='eng' ?<div className="result">
          <h3 className="result_word">{selected.word_uz}</h3>
          <p className="result_definition">{selected.definition_eng}</p>
      </div>:''}
        {option==='uz' && option1==='uz' ?<div className="result">
          <h3 className="result_word">{selected.word_uz}</h3>
          <p className="result_definition">{selected.definition_uz}</p>
      </div>:''}
      </>
  )
}

export default Result