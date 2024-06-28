import React from 'react'
import Questions2 from './Questions2'
function QuestionList({questionlist}) {
  // console.log(questionlist)
  return (
    <>
    {questionlist.map((question)=>(
      <Questions2 question={question} key ={question._id}/>
    ))}
    </>
  )
}

export default QuestionList