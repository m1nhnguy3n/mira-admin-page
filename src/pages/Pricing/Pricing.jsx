
import { Row, Col, Typography, Card, Breadcrumb } from "antd";
const { Text } = Typography;
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { StarOutlined } from "@ant-design/icons";

export default function Pricing() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <Col className="container mx-auto px-4">
          <h1 className="text-4xl text-white font-bold flex justify-start">
            {t("PRICING.H1_1")}
          </h1>
          <Breadcrumb className="my-4 text-[#376fd0] cursor-pointer">
            <Breadcrumb.Item
              onClick={() => {
                navigate("/analytic");
              }}
            >
              {t("PRICING.H1_2")}
            </Breadcrumb.Item>
            <Breadcrumb.Item
              onClick={() => {
                navigate("/");
              }}
            >
              {t("PRICING.H1_3")}
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="text-white"
              onClick={() => {
                navigate("/pricing");
              }}
            >
              {t("PRICING.H1_4")}
            </Breadcrumb.Item>
          </Breadcrumb>
          <hr className="my-4 text-white" />
        </Col>
        <Row className="flex-start">
          <Col span={24}>
            <Row wrap={false} className="mb-3">
              <Col flex="none">
                <Col style={{ padding: "0 1px" }}></Col>
              </Col>
              <Col flex="auto">
                <Col>
                  <Text className="text-white">{t("PRICING.TEXT1")}</Text>
                </Col>
                <Col>
                  <Text className="text-white">{t("PRICING.TEXT2")}</Text>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={16} justify="center">
              <Col md={15} lg={8} xs={18} className="mt-7 mb-[15px]">
                <Card bordered={false}>
                  <Col className="text-lg font-medium">
                    {t("PRICING.TABLE1_TEXT1")}
                  </Col>
                  <Col className="text-3xl font-bold mb-3">
                    {t("PRICING.TABLE1_TEXT2")}
                    <span className="text-3xl">
                      {t("PRICING.TABLE1_TEXT3")}
                    </span>
                  </Col>
                  <Col className="mt-6 space-y-4">
                    <Col>{t("PRICING.TABLE1_TEXT4")}</Col>
                    <Col>{t("PRICING.TABLE1_TEXT5")}</Col>
                    <Col>{t("PRICING.TABLE1_TEXT6")}</Col>
                    <Col>{t("PRICING.TABLE1_TEXT7")}</Col>
                  </Col>
                  <button className="mt-3 w-full bg-white font-bold text-blue-600 border border-blue-600 rounded-md px-4 py-2 hover:bg-blue-100">
                    {t("PRICING.TABLE1_TEXT8")}
                  </button>
                </Card>
              </Col>
              <Col md={15} lg={8} xs={18}>
                <Card bordered={false} className="h-100">
                  <StarOutlined className="absolute top-2 right-2 text-lg text-yellow-500" />
                  <Col className="text-lg font-medium">
                    {t("PRICING.TABLE2_TEXT1")}
                  </Col>
                  <Col className="text-sm font-medium mb-2">
                    {t("PRICING.TABLE2_TEXT2")}
                  </Col>
                  <Col className="text-3xl font-bold mb-3">
                    {t("PRICING.TABLE2_TEXT3")}
                    <span className="text-3xl">
                      {t("PRICING.TABLE2_TEXT4")}
                    </span>
                  </Col>
                  <Col className="mt-6 space-y-4">
                    <Col>{t("PRICING.TABLE2_TEXT5")}</Col>
                    <Col>{t("PRICING.TABLE2_TEXT6")}</Col>
                    <Col>{t("PRICING.TABLE2_TEXT7")}</Col>
                    <Col>{t("PRICING.TABLE2_TEXT8")}</Col>
                  </Col>
                  <button className="mt-3 w-full bg-blue-600 font-bold text-white rounded-md px-4 py-2">
                    {t("PRICING.TABLE2_TEXT9")}
                  </button>
                </Card>
              </Col>
              <Col md={15} lg={8} xs={18} className="mt-7">
                <Card bordered={false}>
                  <Col className="text-lg font-medium">
                    {t("PRICING.TABLE3_TEXT1")}
                  </Col>
                  <Col className="text-3xl font-bold mb-3">
                    {t("PRICING.TABLE3_TEXT2")}
                    <span className="text-3xl">
                      {t("PRICING.TABLE3_TEXT3")}
                    </span>
                  </Col>
                  <Col className="mt-6 space-y-4">
                    <Col>{t("PRICING.TABLE3_TEXT4")}</Col>
                    <Col>{t("PRICING.TABLE3_TEXT5")}</Col>
                    <Col>{t("PRICING.TABLE3_TEXT6")}</Col>
                    <Col>{t("PRICING.TABLE3_TEXT7")}</Col>
                  </Col>
                  <button className="mt-3 w-full bg-white font-bold text-blue-600 border border-blue-600 rounded-md px-4 py-2 hover:bg-blue-100">
                    {t("PRICING.TABLE3_TEXT8")}
                  </button>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
