import styled from "styled-components/native";

interface Props {
  weight?: "400" | "600" | "700";
  color ?: string;
  size ?: number;
  opacity?: number;
}

export const Text = styled.Text<Props>`
  font-family: ${({ weight, theme }) => weight ? `Poppins-${weight}` : theme.fonts.ptSantsBold};
  color: ${({ color, theme }) => color || theme.colors.white};
  font-size: ${({ size }) => size ? `${size}px}` : "40px"};
  opacity: ${({ opacity }) => opacity || 1 };
`;
