import Head from "next/head"
import Header from "../Header"
import Footer from "../Footer"
import WidgetSize from "pages/components/WidgetSize"

const MainLayout = ({ children }) => (<>
  <Head>
    <meta charSet="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    <title>Тут вкусное вино</title>

    <meta name="description" content="Next project"></meta>
    <meta name="keywords" content="html, css, javascript< Next, NextJS"></meta>
    <meta name="author" content="Evgeny Tryzo"></meta>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
  </Head>

  <WidgetSize/>
  <Header/>
  <main>
    { children }
  </main>
  <Footer/>
</>)

export default MainLayout
