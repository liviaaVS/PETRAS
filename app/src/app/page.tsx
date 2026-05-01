"use client";
import { FloatButton } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import NavBar from "./components/ui/NavBar";
import Image from "next/image";
import Benefits from "./components/common/Beneficios/indesx";
import LocalizacaoSection from "./components/common/LocalizacaoSection";
import ContatoSection from "./components/common/ContatoSection";
import ProdutosSection from "./components/common/ProdutosSection";
export default function App() {
  return (
    <>
      {" "}
      <NavBar />{" "}
      <main className="container mx-auto p-4">
        {" "}
        <Image
          src="/banner.svg"
          alt=""
          width={1200}
          height={400}
          className="w-full h-auto"
        />{" "}
        <Benefits /> <ProdutosSection /> <LocalizacaoSection />{" "}
        <ContatoSection />{" "}
        <FloatButton
          tooltip={{
            title: "Site em construção. Novidades em breve!",
            color: "#0D0065",
            placement: "left",
            style: { color: "#000" },
          }}
          style={{ width: "70px", height: "70px" }}
          icon={<WarningOutlined />}
          onClick={() => console.log("onClick")}
        />{" "}
      </main>{" "}
    </>
  );
}
