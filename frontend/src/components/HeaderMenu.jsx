import React from "react";
import styled from "styled-components";

// components

// constants
import { COLORS } from "../style_constants";

const Wrapper = styled.div`
  border-color: ${COLORS.BORDER};
`;


export const HeaderContainer = () => (
  <Wrapper>
    <div>ヘッダーこの辺に作る</div>
  </Wrapper>
)


