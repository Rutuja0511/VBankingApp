import React from "react"
import styles from "./style"

import { Navbar,Hero, GetStarted, Billing, Footer  } from "./components"
function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Billing />
        <GetStarted/>
        <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
