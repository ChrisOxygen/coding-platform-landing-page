/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useData } from "../DataProvider"

function WorkflowFeature() {
    const [activeTabID,setActiveTabID] = useState(1)
  const {workFlow} = useData()
  const {workFlowFeatures} = workFlow

  function handleActiveTab(id){
    id === activeTabID ? setActiveTabID(null) : setActiveTabID(id)
  }

    return (
        <ul className="features-list">
            {workFlowFeatures.map((feature, index)=> <WorkflowFeatureItem key={index} activeTabID={activeTabID} id={index + 1} title={feature.title} desc={feature.desc} handleActiveTab={handleActiveTab}/>)}
            
            
        </ul>
    )
}


function WorkflowFeatureItem({ activeTabID, id, title, handleActiveTab, desc}) {
    const [isOpen, setIsOpen] = useState(false)

    function handleCheck(){
        setIsOpen((curr)=>!curr)
        handleActiveTab(id)
    }

    

    useEffect(()=>{
        activeTabID === id ? setIsOpen(true) : setIsOpen(false)
    },[activeTabID,id])


    return (
        <li className="features-list__item">
            <div className="toggle-item">
                <button className="toggle-item__trigger" onClick={()=> handleCheck()}>
                <span className="toggle-item__title">
                    {title}
                </span>
                <div className={`open-close-indicator ${isOpen ? 'open-close-indicator--open' : ''}`}>
                    <div  className="bar bar--1" />
                    <div  className="bar bar--2 " />
                </div>
                </button>
                <span className={`toggle-item__content ${!isOpen ? 'toggle-item__content--hidden' : ''}`}>
                    {desc} 
                </span>
            </div>
        </li>
    )
}


export default WorkflowFeature

