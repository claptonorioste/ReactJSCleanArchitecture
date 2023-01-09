import React from "react"

import { Typography, Button, Row, Col } from "antd"

import { SearchOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

function HeaderComponent({
    onMobile,
    showSider,
    handleNavigate,
    setHovered,
    buttonStyle,
    hoverStyle,
    textStyle,
    setShowSider,
}) {
    return (
        <>
            {!onMobile ? (
                <Row style={{ height: "100%" }}>
                    <Col
                        span={5}
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
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
                    </Col>
                    <Col
                        span={3}
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            onMouseEnter={() => setHovered("menu")}
                            onMouseLeave={() => setHovered("")}
                            style={{ ...buttonStyle("menu"), ...hoverStyle("menu") }}
                            onClick={() => handleNavigate("/menu")}
                        >
                            <Typography.Text style={textStyle("menu")}>Menu</Typography.Text>
                        </Button>
                    </Col>
                    <Col
                        span={3}
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            onMouseEnter={() => setHovered("reservation")}
                            onMouseLeave={() => setHovered("")}
                            style={{ ...buttonStyle("reservation"), ...hoverStyle("reservation") }}
                            onClick={() => handleNavigate("/reservation")}
                        >
                            <Typography.Text style={{ ...textStyle("reservation"), ...hoverStyle("reservation") }}>
                                Reservation
                            </Typography.Text>
                        </Button>
                    </Col>
                    <Col
                        span={3}
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            onMouseEnter={() => setHovered("about")}
                            onMouseLeave={() => setHovered("")}
                            style={{ ...buttonStyle("about"), ...hoverStyle("about") }}
                            onClick={() => handleNavigate("/about")}
                        >
                            <Typography.Text style={textStyle("about")}>About</Typography.Text>
                        </Button>
                    </Col>
                    <Col
                        span={3}
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            onMouseEnter={() => setHovered("contact")}
                            onMouseLeave={() => setHovered("")}
                            style={{ ...buttonStyle("contact"), ...hoverStyle("contact") }}
                            onClick={() => handleNavigate("/contact")}
                        >
                            <Typography.Text style={textStyle("contact")}>Contact</Typography.Text>
                        </Button>
                    </Col>
                    <Col
                        span={3}
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            onMouseEnter={() => setHovered("login")}
                            onMouseLeave={() => setHovered("")}
                            style={{ ...buttonStyle("login"), ...hoverStyle("login") }}
                            onClick={() => {
                                console.log("show login")
                            }}
                        >
                            <Typography.Text style={textStyle("login")}>Login</Typography.Text>
                        </Button>
                    </Col>
                    <Col
                        span={4}
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <SearchOutlined style={{ fontSize: 32 }} />
                    </Col>
                </Row>
            ) : (
                <Row style={{ height: "100%" }}>
                    <Col
                        span={12}
                        style={{
                            justifyContent: "left",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div
                            onClick={() => handleNavigate("/")}
                            style={{
                                background: "url('images/xu_logo.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "60px",
                                width: "60px",
                                height: "30px",
                            }}
                        ></div>
                    </Col>
                    <Col
                        span={12}
                        style={{
                            justifyContent: "right",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            onClick={() => {
                                setShowSider(!showSider)
                            }}
                            type="link"
                            shape={"circle"}
                            style={{ height: "auto" }}
                            icon={<MenuUnfoldOutlined />}
                        />
                    </Col>
                </Row>
            )}
        </>
    )
}

export default HeaderComponent
