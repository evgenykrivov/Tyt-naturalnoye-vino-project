import S from "./404.module.scss"
import Header from "@/pages/components/Header"
import Footer from "@/pages/components/Footer"

const Custom404 = () => (
  <>
    <Header/>
    <h1 className={S.mainText}> Проси, извини, но такой страницы не существует :(</h1>
    <Footer/>
  </>
)

export default Custom404
