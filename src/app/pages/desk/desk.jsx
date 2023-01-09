import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
//Ant d components
import { Layout, Grid, Watermark } from "antd"
//Custom Components
import DrawerComponent from "./components/drawer"
import HeaderComponent from "./components/header"
import FooterComponent from "./components/footer"

function Desk({ component }) {
    const location = useLocation()
    const navigate = useNavigate()
    const screens = Grid.useBreakpoint()

    const { Header, Content, Footer } = Layout

    const onMobile =
        (screens.xs && !screens.sm) ||
        (screens.md && !screens.lg && !screens.xl) ||
        (screens.sm && !screens.lg && !screens.xl) ||
        (screens.lg && !screens.xl)

    const [hovered, setHovered] = useState("")
    const [showSider, setShowSider] = useState(false)

    const buttonStyle = (btnName) => {
        return location.pathname === "/" + btnName
            ? {
                  height: "auto",
                  boxShadow: "none",
                  backgroundColor: "#000033",
              }
            : { height: "auto", boxShadow: "none" }
    }

    const textStyle = (btnName) => {
        return location.pathname === "/" + btnName
            ? {
                  color: "white",
                  fontSize: 30,
                  fontFamily: "Montserrat",
              }
            : { fontSize: 30, fontFamily: "Montserrat" }
    }

    const hoverStyle = (btnName) => {
        if (btnName === hovered) {
            return { border: "none", fontWeight: "bold" }
        }
        return { border: "none", fontWeight: 400 }
    }

    const handleNavigate = (path) => {
        navigate(path)
        setShowSider(false)
    }

    return (
        // <Watermark content={["clapton orioste", "claptonorioste.com", "clapton.five@gmail.com"]}>
        <Layout>
            {onMobile && (
                <DrawerComponent
                    showSider={showSider}
                    handleNavigate={handleNavigate}
                    buttonStyle={buttonStyle}
                    hoverStyle={hoverStyle}
                    setHovered={setHovered}
                    setShowSider={setShowSider}
                    textStyle={textStyle}
                />
            )}
            <Layout style={{ height: "100vh", background: "white" }}>
                <Header
                    style={
                        onMobile
                            ? {
                                  background: "white",
                                  paddingInline: "25px",
                                  boxShadow: "0 0 5px rgb(0 0 0 / 20%)",
                              }
                            : {
                                  background: "white",
                                  paddingInline: "25px",
                                  boxShadow: "0 0 5px rgb(0 0 0 / 20%)",
                                  height: 100,
                              }
                    }
                >
                    <HeaderComponent
                        onMobile={onMobile}
                        showSider={showSider}
                        handleNavigate={handleNavigate}
                        buttonStyle={buttonStyle}
                        hoverStyle={hoverStyle}
                        setHovered={setHovered}
                        setShowSider={setShowSider}
                        textStyle={textStyle}
                    />
                </Header>
                <Content style={{ margin: "24px 16px 0" }}>{component}</Content>
                <Footer style={{ textAlign: "center", background: "white" }}>
                    <FooterComponent />
                </Footer>
            </Layout>
        </Layout>
        // </Watermark>
    )
}

export default Desk
