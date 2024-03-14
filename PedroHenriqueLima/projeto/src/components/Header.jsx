import logo from "../assets/logo.jpg";
import * as S from "./Styled";

export default function Header(){
    return(
    <>

    <S.Header>

        <S.FrameHeader>
            <S.Logo src={logo} alt="logo"></S.Logo>
            
            <S.Menu>
                <S.Menuli>Home</S.Menuli>
                <S.Menuli>Duvidas</S.Menuli>
                <S.Menuli>Contato</S.Menuli>
            </S.Menu>
        </S.FrameHeader>

    </S.Header>
    
    </>)
}