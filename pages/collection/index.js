import styles from "./winesCollection.module.scss"
import Header from "../components/Header"
import Footer from "@/pages/components/Footer"
import React from "react"

const index = () => (
  <>
    <Header/>
    <h1 className={styles.mainText}>Здесь будут все коллекции</h1>
    <Footer/>
  </>
)
export default index
