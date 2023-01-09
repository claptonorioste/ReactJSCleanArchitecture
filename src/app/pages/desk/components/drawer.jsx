import React from "react"
import { Row, Typography, Button, Drawer } from "antd"
import { SearchOutlined } from "@ant-design/icons"

function DrawerComponent({ showSider, handleNavigate, setHovered, buttonStyle, hoverStyle, textStyle, setShowSider }) {
    return (
        <Drawer open={showSider} onClose={() => setShowSider(!showSider)} closable={true} placement={"right"}>
            <Row
                style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    height: 80,
                }}
            >
                <div
                    onClick={() => handleNavigate("/")}
                    style={{
                        background: "url('images/xu_logo.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "120px",
                        width: "120px",
                        height: "60px",
                    }}
                ></div>
            </Row>
            <Row
                style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    height: 80,
                }}
            >
                <Button
                    type="link"
                    onMouseEnter={() => setHovered("menu")}
                    onMouseLeave={() => setHovered("")}
                    style={{ ...buttonStyle("menu"), ...hoverStyle("menu") }}
                    onClick={() => handleNavigate("/menu")}
                >
                    <Typography.Text style={textStyle("menu")}>Menu</Typography.Text>
                </Button>
            </Row>
            <Row
                style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    height: 80,
                }}
            >
                <Button
                    type="link"
                    onMouseEnter={() => setHovered("reservation")}
                    onMouseLeave={() => setHovered("")}
                    style={{ ...buttonStyle("reservation"), ...hoverStyle("reservation") }}
                    onClick={() => handleNavigate("/reservation")}
                >
                    <Typography.Text style={{ ...textStyle("reservation"), ...hoverStyle("reservation") }}>
                        Reservation
                    </Typography.Text>
                </Button>
            </Row>
            <Row
                style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    height: 80,
                }}
            >
                <Button
                    type="link"
                    onMouseEnter={() => setHovered("about")}
                    onMouseLeave={() => setHovered("")}
                    style={{ ...buttonStyle("about"), ...hoverStyle("about") }}
                    onClick={() => handleNavigate("/about")}
                >
                    <Typography.Text style={textStyle("about")}>About</Typography.Text>
                </Button>
            </Row>
            <Row
                style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    height: 80,
                }}
            >
                <Button
                    type="link"
                    onMouseEnter={() => setHovered("contact")}
                    onMouseLeave={() => setHovered("")}
                    style={{ ...buttonStyle("contact"), ...hoverStyle("contact") }}
                    onClick={() => handleNavigate("/contact")}
                >
                    <Typography.Text style={textStyle("contact")}>Contact</Typography.Text>
                </Button>
            </Row>
            <Row
                style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    height: 80,
                }}
            >
                <Button
                    type="link"
                    onMouseEnter={() => setHovered("login")}
                    onMouseLeave={() => setHovered("")}
                    style={{ ...buttonStyle("login"), ...hoverStyle("login") }}
                    onClick={() => {
                        console.log("show login")
                    }}
                >
                    <Typography.Text style={textStyle("login")}>Login</Typography.Text>
                </Button>
            </Row>
            <Row
                style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    height: 80,
                }}
            >
                <SearchOutlined style={{ fontSize: 32 }} />
            </Row>
        </Drawer>
    )
}

export default DrawerComponent
