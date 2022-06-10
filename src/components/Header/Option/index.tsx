import { ArrowDown, ArrowUp } from "assets";
import React, { useEffect, useState } from "react";
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
  isOpen: boolean;
}

export default function Option({ title, options, top, left, width, isOpen }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    if (!isOpen) setIsSelected(false);
  }, [isOpen]);

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
