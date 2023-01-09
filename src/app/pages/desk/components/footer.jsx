import React from "react"

import { Typography, Button, Row, Col, Space } from "antd"

import { FacebookFilled, TwitterSquareFilled, InstagramFilled } from "@ant-design/icons"

function FooterComponent() {
    return (
        <Row>
            <Col md={24} sm={24} xs={24} lg={12} xl={12} xxl={12}>
                <Typography.Text style={{ fontSize: 16, color: "#000033", fontWeight: 400, fontFamily: "Montserrat" }}>
                    Designed and created by Group 6
                </Typography.Text>
            </Col>
            <Col md={24} sm={24} xs={24} lg={12} xl={12} xxl={12}>
                <Space>
                    <Typography.Text
                        style={{
                            fontSize: 16,
                            color: "#000033",
                            fontWeight: 400,
                            fontFamily: "Montserrat",
                        }}
                    >
                        Follow us on:
                    </Typography.Text>
                    <Button shape="circle" icon={<FacebookFilled />} />
                    <Button shape="circle" icon={<TwitterSquareFilled />} />
                    <Button shape="circle" icon={<InstagramFilled />} />
                </Space>
            </Col>
        </Row>
    )
}

export default FooterComponent
