import React, { useState } from "react";
import { IconCalendar, IconPlanning, IconReminder, IconTodo, Logo } from "assets";
import { Background, Container, DivLogin, DivNavBar, MenuButton, Navbar } from "./styles";
import Option from "./Option";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [classMenu, setClassMenu] = useState("menu");

  const featureOptions = [
    { optionName: "Todo List", Icon: IconTodo },
    { optionName: "Calendar", Icon: IconCalendar },
    { optionName: "Reminders", Icon: IconReminder },
    { optionName: "Planning", Icon: IconPlanning },
  ];

  const companyOptions = [
    { optionName: "History" },
    { optionName: "Our Team" },
    { optionName: "Blog" },
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setClassMenu(classMenu === "menu" ? "open-menu" : "menu");
  };

  return (
    <>
      {isOpen ? <Background onClick={toggleOpen} /> : <></>}
      <Container>
        <div id="snap-icon">
          <Logo />
        </div>
        <MenuButton onClick={toggleOpen}>
          <div className={classMenu}>
            <span className="line-one" />
            <span className="line-two" />
            <span className="line-three" />
          </div>
        </MenuButton>

        <DivNavBar isOpen={isOpen}>
          <Navbar isOpen={isOpen}>
            <Option
              title="Features"
              options={featureOptions}
              top="3.9rem"
              left="-8.3rem"
              isOpen={isOpen}
            />
            <Option
              title="Company"
              options={companyOptions}
              top="3.9rem"
              width="13.5rem"
              isOpen={isOpen}
            />
            <h2>Careers</h2>
            <h2>About</h2>
          </Navbar>
          <DivLogin isOpen={isOpen}>
            <button>Login</button>
            <button id="register-button">Register</button>
          </DivLogin>
        </DivNavBar>
      </Container>
    </>
  );
}
