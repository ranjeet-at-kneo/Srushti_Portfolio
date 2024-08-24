import React from 'react'
import "../styles/CodingSkills.css";
import Skill from './Skill';
const CodingSkills = () => {
    let skills=[{},{},{}];
  return (
    <div>
        {
            skills.map((skill)=>{
                return(
                    <>
                      <Skill skill={skill}/>
                    </>
                )
            })
        }
    </div>
  )
}

export default CodingSkills