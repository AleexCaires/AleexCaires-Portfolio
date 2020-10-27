import React from 'react'
import HeroStyle from "../styles/components/hero.module.scss"

render() {
    return(
        <hero>
            <div id={HeroStyle.hero}>
                <div className={HeroStyle.container}>
                    <p className={HeroStyle.copyRight}></p>
                </div>
            <button className={HeroStyle.btn}>
                
            </button>
            </div>
        </hero>
    )
}