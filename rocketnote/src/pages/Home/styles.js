import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    grid-area: brand;
    justify-content: center;
    align-items: center;
`;

export const Menu = styled.ul`
    grid-area: menu;
    background: blue;
`;

export const Search = styled.div`
    grid-area: search;
    background: pink;
`;

export const Content = styled.div`
    grid-area: content;
    background: white;
`;

export const NewNote = styled.button`
    grid-area: newnote;
    background: green;
`;
