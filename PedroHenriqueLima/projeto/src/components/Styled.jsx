import styled, { createGlobalStyle, css } from "styled-components";



export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing:border-box; 
    font-family: sans-serif;
}

body {

    background-color: #380a0a;
    color: #380a0a;

}
`


export const Header = styled.header`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;
    background-color: #242323;
    color: #f4f4f8;  

`

export const FrameHeader = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70vw;
    //border: 2px solid red;

`

export const Logo = styled.img`
    width: 50px;
    height: 50px;

`

const Display = css`
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;

    height:50px;
    width: 40vw;
    //border: 2px solid red;

`

export const Menuli = styled.div`

    font-size: 1.2rem;
    color: white;
    font-family: sans-serif;

`

export const FrameMain = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 70%;
    height: 140vh;
    border: 2px solid red;
    background-color: #525252;
    margin: auto;

`


export const Card=styled.div`
    
    width: 18vw;
    height: 380px;
    background-color: #408fe9;
    padding: 10px;
`

export const Footer=styled.footer`
    width: 100%;
    height: 20vh;
    background-color: #f7f7f7;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const p = styled.p `

    font-family: sans-serif;
    font-size: 1.2rem;
    color: #1a1919;
    
`