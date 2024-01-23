import {motion} from 'framer-motion'
import { useData } from '../DataProvider'

function MobileMenu() {
  const {menuTabs} = useData()

    const menuVariant = {
        hidden: {
            x: '110%', opacity: 0,
            transition: {
                duration: .2,
                when: "afterChildren",
                staggerChildren: .1,
            }


        },
        visible: {
            x: 0, opacity: 1,
            transition: {
                duration: .2,
                when: "beforeChildren",
                staggerChildren: .1,
            }
        },
        end: {
            x: '110%', opacity: 0,
            transition: {
                duration: .2,
                when: "afterChildren",
            }


        }
    }

    const childVariant = {
        hidden: {
            y: '100%', opacity: 0,
            transition: {
                duration: .2,
            }


        },
        visible: {
            y: 0, opacity: 1,
            transition: {
                duration: .2,
            }
            
        }
    }
    return (
        <motion.div className="mobile-menu" variants={menuVariant}  initial='hidden'
        animate='visible'
        exit='hidden'>
            <img src="/assets/logo.svg" alt="" className="mobile-menu__logo" />
            <motion.ul className="mobile-menu-list">
            {menuTabs.map((item, index)=> <motion.li className="mobile-menu-list__item" key={index}  variants={childVariant} >{item}</motion.li>)}
            </motion.ul>
            <button className="mobile-nav-cta-btn">Get Started Free</button>
        </motion.div>
    )
}

export default MobileMenu
