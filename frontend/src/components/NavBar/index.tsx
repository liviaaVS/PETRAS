import React from "react";
import PetraButton from "../Button";
import { CalculatorOutlined } from "@ant-design/icons";

export default function NavBar() {
  const currentPath = window.location.pathname;

  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Produtos", href: "/produtos" },
    { label: "Empresa", href: "/empresa" },
    { label: "Localização", href: "/localizacao" },
    { label: "Contato", href: "/contact" },
  ];

  return (
    <header className="flex px-[5em] py-[1rem]">
      <nav className="flex w-full justify-between items-center flex-wrap gap-4">
        <img src="/logo.svg" alt="logo" />
        <ul className="flex w-100 justify-around gap-[2rem]">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className={`flex items-center linha-horizontal ${
                currentPath === item.href ? "sublinhado" : ""
              }`}
            >
              <a className="nav-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <PetraButton
          type="primary"
          size="large"
          loading={false}
          icon={<CalculatorOutlined />}
          onClick={() => console.log("clicado")}
          iconPosition="end"
        >
          Simular Orçamento
        </PetraButton>
      </nav>
    </header>
  );
}
