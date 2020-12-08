import styled from "styled-components";
import { Link } from "react-router-dom";
import qrCode from "../assets/qr-code.svg"
import logo from "../assets/logoHere.png"

// DIGITAL CARD

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  width: 30em;
  border-radius: 20px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    0px 0px 29px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 0px 0px 29px 5px rgba(0, 0, 0, 0);
  @media (max-width: 600px) {
    flex-direction: row;
    width: 23em;
  }
  @media (max-width: 320px) {
    width: 90vw;
    heigh: 30em;
  }
`;

export const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  /* width:18em; */
  /* border: 2px solid red; */
`;
export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 18em;
`;

export const DivIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
`;
export const Name = styled.h4`
  display: flex;
  font-family: "Roboto Slab", serif;
  font-size: 20px;
  margin-bottom: 0px;
`;

export const Title = styled.p`
  font-family: "Inconsolata", monospace;
  font-size: 16px;
  margin-top: 4px;
`;
export const Connect = styled.p`
  font-family: "Inconsolata", monospace;
  font-size: 16px;
  margin-top: 4px;
`;
export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 100px;
  height: 100px;
  margin: 20px;
  border-radius: 40px;
`;

export const QrCode = styled.img.attrs({
  src: `${qrCode}`,
})`
  width: 110px;
  height: 110px;
  margin: 20px;
  object-fit: cover;
`;

export const Email = styled.a`
  font-size: 30px;
  color: rgba(12, 105, 145, 1);
  padding: 5px;
  margin-bottom: 10px;
  &:hover {
    color: rgba(12, 105, 145, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(12, 105, 145, 1);
  }
`;
export const IG = styled.a`
  font-size: 30px;
  color: rgba(193, 53, 132, 1);
  padding: 5px;
  margin-bottom: 10px;
  &:hover {
    color: rgba(193, 53, 132, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(193, 53, 132, 1);
  }
`;
export const FB = styled.a`
  font-size: 30px;
  color: rgba(59, 89, 152, 1);
  padding: 5px;
  margin-bottom: 10px;
  &:hover {
    color: rgba(59, 89, 152, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(59, 89, 152, 1);
  }
`;
export const TW = styled.a`
  font-size: 30px;
  color: rgba(8, 160, 233, 1);
  padding: 5px;
  margin-bottom: 10px;
  &:hover {
    color: rgba(8, 160, 233, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(8, 160, 233, 1);
  }
`;
export const YT = styled.a`
  font-size: 30px;
  color: rgba(196, 48, 43, 1);
  padding: 5px;
  margin-bottom: 10px;
  &:hover {
    color: rgba(59, 89, 152, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(196, 48, 43, 1);
  }
`;
export const GH = styled.a`
  font-size: 30px;
  color: rgba(110, 84, 148, 1);
  padding: 5px;
  margin-bottom: 10px;
  &:hover {
    color: rgba(110, 84, 148, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(110, 84, 148, 1);
  }
`;
export const MD = styled.a`
  font-size: 30px;
  color: rgba(0, 0, 0, 1);
  padding: 5px;
  margin-bottom: 10px;
  &:hover {
    color: rgba(0, 0, 0, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(0, 0, 0, 1);
  }
`;

export const JS = styled.a`
  font-size: 30px;
  color: rgba(240, 219, 79, 1);
  padding: 5px;
  &:hover {
    color: rgba(240, 219, 79, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(240, 219, 79, 1);
  }
`;
export const ReactIcon = styled.a`
  font-size: 30px;
  color: rgba(97, 219, 251, 1);
  padding: 5px;
  &:hover {
    color: rgba(97, 219, 251, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(97, 219, 251, 1);
  }
`;
export const MongoDb = styled.a`
  font-size: 30px;
  color: rgba(77, 179, 61, 1);
  padding: 5px;
  &:hover {
    color: rgba(77, 179, 61, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(77, 179, 61, 1);
  }
`;
export const PythonIcon = styled.a`
  font-size: 30px;
  color: rgba(75, 139, 190, 1);
  padding: 5px;
  &:hover {
    color: rgba(75, 139, 190, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(75, 139, 190, 1);
  }
`;
export const DjangoIcon = styled.a`
  font-size: 30px;
  color: rgba(9, 46, 32, 1);
  padding: 5px;
  &:hover {
    color: rgba(9, 46, 32, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(9, 46, 32, 1);
  }
`;
export const RubyIcon = styled.a`
  font-size: 30px;
  color: rgba(204, 0, 0, 1);
  padding: 5px;
  &:hover {
    color: rgba(204, 0, 0, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(204, 0, 0, 1);
  }
`;
export const NodeIcon = styled.a`
  font-size: 30px;
  color: rgba(60, 135, 58, 1);
  padding: 5px;
  &:hover {
    color: rgba(60, 135, 58, 0.5);
    transform: scale(1.2);
    border-bottom: 1px solid rgba(60, 135, 58, 1);
  }
`;
