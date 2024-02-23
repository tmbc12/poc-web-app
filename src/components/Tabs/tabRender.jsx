import React, { useState } from "react";
import styled from "styled-components";

export default function TabRender({ tabs }) {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TabContainer>
        {tabs.map((tab, index) => (
          <TabButton key={index} active={activeTab === index} onClick={() => setActiveTab(index)}>
            <Title active={activeTab === index}>{tab.title}</Title>
            <Indicator active={activeTab === index} />
          </TabButton>
        ))}
      </TabContainer>
      {tabs[activeTab].render()}
    </>
  );
}

const TabContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
`;
const TabButton = styled.button`
//   width: 100%;
  height: 100%;
  padding: 12px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 50px;
  transition: 0.6s;
  color:white;
  background: ${props => (props.active ? "#d1e0e0" : "#000000")};
  &:focus {
    outline: none;
  }
`;
const Title = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bolder;
  color: ${props => (props.active ? "#3e5b5b" : "#333")};
  transition: 0.6s;
`;
const Indicator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-color: ${props => (props.active ? "#3e5b5b" : "#f1f1f1")};
  transition: 0.6s;
`;