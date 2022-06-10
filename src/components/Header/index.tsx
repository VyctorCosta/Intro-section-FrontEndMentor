import React, { useState } from "react";
import {
  IconCalendar,
  IconCloseMenu,
  IconMenu,
  IconPlanning,
  IconReminder,
  IconTodo,
  Logo,
} from "assets";
import { Background, Container, DivLogin, DivNavBar, IconMenuButton, Navbar } from "./styles";
import Option from "./Option";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      {isOpen ? <Background /> : <></>}
      <Container>
        <div id="snap-icon">
          <Logo />
        </div>
        <DivNavBar isOpen={isOpen}>
          <IconMenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IconCloseMenu /> : <IconMenu />}
          </IconMenuButton>
          <Navbar isOpen={isOpen}>
            <Option title="Features" options={featureOptions} top="3.9rem" left="-8.3rem" />
            <Option title="Company" options={companyOptions} top="3.9rem" width="13.5rem" />
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
