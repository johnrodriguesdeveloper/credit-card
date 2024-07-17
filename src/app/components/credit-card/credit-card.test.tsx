import React from "react";
import { render } from "@testing-library/react-native";
import { CreditCard } from "./index";
import { CARD_SIDE } from "../../types/cardSideProps";
import { SharedValue } from "react-native-reanimated";

// Mock para SharedValue
const mockSharedValue = (value: number): SharedValue<number> => ({
  value,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  isAvailable: jest.fn(),
  setValue: jest.fn(),
  interpolate: jest.fn(),
  interpolateColor: jest.fn(),
});

describe("CreditCard Component", () => {
  const mockData = {
    name: "John Doe",
    number: "1234 5678 9012 3456",
    date: "12/34",
    code: "123",
  };

  it("renderiza o lado frontal corretamente", () => {
    const { getByText } = render(
      <CreditCard cardSide={mockSharedValue(CARD_SIDE.front)} data={mockData} />
    );

    expect(getByText("Meu Cartão")).toBeTruthy();
    expect(getByText("John Doe")).toBeTruthy();
  });

  it("renderiza o lado traseiro corretamente", () => {
    const { getByText } = render(
      <CreditCard cardSide={mockSharedValue(CARD_SIDE.back)} data={mockData} />
    );

    expect(getByText("Número do cartão")).toBeTruthy();
    expect(getByText("1234 5678 9012 3456")).toBeTruthy();
    expect(getByText("Validade")).toBeTruthy();
    expect(getByText("12/34")).toBeTruthy();
    expect(getByText("CVV")).toBeTruthy();
    expect(getByText("123")).toBeTruthy();
  });
});
