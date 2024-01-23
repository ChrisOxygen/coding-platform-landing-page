import { useState } from "react"
import { useData } from "../DataProvider"

function FaqBlock() {

    const [activeFaqID, setActiveFaqID] = useState(1)

    function handleFaqClicked(id){
        if(activeFaqID === id) return

        setActiveFaqID(id)
    }

    const {faq} = useData()
    return (
        <div className="faq-block__features-and-desc">
                <span className="bg-circle" />
                <ul className="faq-features-list">
                    {faq.map((item, index)=> <li className={`faq-features-list__item ${activeFaqID === (index + 1) ? 'faq-features-list__item--active' : ''}`} key={index} onClick={()=> handleFaqClicked(index + 1)} >{item}</li>)}
                </ul>
                <div className="faq-features-desc">
                  <div className="tab-dots">
                    <span className="dot dot--red" />
                    <span className="dot dot--yellow" />
                    <span className="dot dot--green" />
                  </div>
                  <div className="features-desc-block">
                    <span className="features-desc-block__title">
                      05 Coding Error Found
                    </span>
                    <ul className="features-desc-list">
                      <li className="features-desc-list__item">
                        Create original content that ranks for SEO
                      </li>
                      <li className="features-desc-list__item">
                        Any mechanical keyboard enthusiasts in design?
                      </li>
                      <li className="features-desc-list__item">
                        The More Important the Work, the More Important the Rest
                      </li>
                      <li className="features-desc-list__item">
                        How to design a product that can grow itself 10x in year
                      </li>
                      <li className="features-desc-list__item">
                        Any mechanical keyboard enthusiasts in design?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
    )
}

export default FaqBlock
