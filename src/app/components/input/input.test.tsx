import React from "react";
import { render } from "@testing-library/react-native";
import { Input } from "./index";
import { styles } from "./styles";

describe("Input Component", () => {
  it("deve renderizar o componente com os estilos padrão", () => {
    const { getByTestId } = render(<Input testID="input" />);
    const input = getByTestId("input");
    expect(input.props.style).toContainEqual(styles.input);
  });

  it("deve aplicar estilos personalizados quando fornecidos", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByTestId } = render(
      <Input style={customStyle} testID="input" />
    );
    const input = getByTestId("input");
    expect(input.props.style).toContainEqual(styles.input);
    expect(input.props.style).toContainEqual(customStyle);
  });

  it("deve passar outras propriedades para o TextInput", () => {
    const placeholder = "Digite aqui";
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} />
    );
    const input = getByPlaceholderText(placeholder);
    expect(input).toBeTruthy();
  });
});
