import React from "react";
import {
  ClientAudiophile,
  ClientDatabiz,
  ClientMaker,
  ClientMeet,
  ImgHeroDesktop,
  ImgHeroMobile,
} from "assets";
import { DivClients, DivInfo, LearnMoreButton, Main, Picture, Title } from "./styles";

export default function Body() {
  return (
    <>
      <Main>
        <DivInfo>
          <Title>
            <span>Make</span>
            <span>remote work</span>
          </Title>
          <p id="description">
            Get your team in sync, no matter your location. Streamline processes, create team
            rituals, and watch productivity soar.
          </p>
          <LearnMoreButton>Learn more</LearnMoreButton>
          <DivClients>
            <ClientDatabiz />
            <ClientAudiophile />
            <ClientMeet />
            <ClientMaker />
          </DivClients>
        </DivInfo>
        <Picture>
          <source media="(max-width: 900px)" srcSet={ImgHeroMobile} />
          <img src={ImgHeroDesktop} alt="Homem usando notebook" />
        </Picture>
      </Main>
    </>
  );
}
