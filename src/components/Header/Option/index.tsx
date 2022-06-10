import { ArrowDown, ArrowUp } from "assets";
import React, { useState } from "react";
import { DivOption, DivOptions, Title, Item } from "./styles";

type Option = {
  optionName: string;
  Icon?: string;
};

interface Props {
  title: string;
  options: Option[];
  top: string;
  left?: string;
  width?: string;
}

export default function Option({ title, options, top, left, width }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      <DivOption>
        <Title isSelected={isSelected} onClick={toggleSelected}>
          <h2>{title}</h2>
          {isSelected ? <ArrowUp /> : <ArrowDown />}
        </Title>
        {isSelected ? (
          <DivOptions top={top} left={left} width={width}>
            {options.map(({ optionName, Icon }, index) => {
              return (
                <Item key={index}>
                  {Icon ? <Icon /> : <></>}
                  <p>{optionName}</p>
                </Item>
              );
            })}
          </DivOptions>
        ) : (
          <></>
        )}
      </DivOption>
    </>
  );
}
