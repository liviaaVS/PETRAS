'use client';

import { useState, useTransition } from "react";
import {
  CalculatorOutlined,
  MenuOutlined,
  CloseOutlined
} from "@ant-design/icons";
import PetraButton from "../Button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  const toggleMenu = () => {
    startTransition(() => {
      setOpen((prev) => !prev);
    });
  };

  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Produtos", href: "/#produtos" },
    { label: "Empresa", href: "/#empresa" },
    { label: "Localização", href: "/#localizacao" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <header className="flex container mx-auto p-4 ">
      <nav className="flex w-full justify-between items-center flex-wrap gap-4">

        {/* Logo + hamburguer */}
        <div className="flex w-full justify-between items-center sm:w-auto">
          <Image src="/logo.svg" alt="logo" width={200} height={50} />

          <button
            className="sm:hidden text-2xl"
            onClick={toggleMenu}
            disabled={isPending}
          >
            {open ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {/* Menu */}
        <ul
  className={`
    transition-all duration-300 ease-in-out
    overflow-hidden
    ${open ? "flex max-h-96" : "max-h-0"} 
    flex-col 
    w-full 
    gap-4 
    sm:flex 
    sm:flex-row 
    sm:w-auto 
    sm:gap-8 
    sm:items-center
    sm:max-h-none   // 👈 ESSENCIAL
  `}
>
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

        {/* Botão */}
        <div
          className={`
            transition-all duration-300
            w-full 
            ${open ? "block opacity-100" : "opacity-0 hidden"} 
            sm:block 
            sm:opacity-100
            sm:w-auto
          `}
        >
          <PetraButton
            className="w-full sm:w-auto bg-primary  "
            type="primary"
            size="large"
            loading={false}
            icon={<CalculatorOutlined />}
            onClick={() =>
              (window.location.href =
                "/orcamento")
            }
            iconPlacement="end"
          >
            Simular Orçamento
          </PetraButton>
        </div>

      </nav>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-(--border-color) bg-white/95 p-3 backdrop-blur sm:hidden">
        <PetraButton
          className="w-full bg-primary"
          type="primary"
          size="large"
          loading={false}
          icon={<CalculatorOutlined />}
          onClick={() => (window.location.href = "/orcamento")}
          iconPlacement="end"
        >
          Simular Orçamento
        </PetraButton>
      </div>
    </header>
  );
}