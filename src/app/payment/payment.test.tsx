import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Payment } from "./index";

// Mock react-native-reanimated
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  let sharedValue = { value: 0 };
  const useSharedValue = jest.fn((value: number) => {
    sharedValue.value = value;
    return sharedValue;
  });
  return {
    ...Reanimated,
    useSharedValue,
  };
});

// Mock CreditCard component
jest.mock("../components/credit-card", () => {
  const { View, Text } = require("react-native");
  return {
    CreditCard: ({
      data,
      cardSide,
    }: {
      data: { name: string; number: string; date: string; code: string };
      cardSide: { value: number };
    }) => {
      return (
        <View>
          <Text>{data.name}</Text>
          <Text>{data.number}</Text>
          <Text>{data.date}</Text>
          <Text>{data.code}</Text>
          <Text testID="cardSide">{cardSide.value}</Text>
        </View>
      );
    },
  };
});

// Mock Input component
jest.mock("../components/input", () => {
  const { TextInput } = require("react-native");
  return {
    Input: ({
      placeholder,
      onChangeText,
      onFocus,
      keyboardType,
      maxLength,
      style,
    }: {
      placeholder: string;
      onChangeText: (text: string) => void;
      onFocus: () => void;
      keyboardType?: string;
      maxLength?: number;
      style?: object;
    }) => (
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={onFocus}
        keyboardType={keyboardType}
        maxLength={maxLength}
        style={style}
      />
    ),
  };
});

describe("Payment Component", () => {
  it("should render correctly", () => {
    const { getByPlaceholderText, getByText } = render(<Payment />);

    expect(getByPlaceholderText("Nome do titular")).toBeTruthy();
    expect(getByPlaceholderText("Nome do cartão")).toBeTruthy();
    expect(getByPlaceholderText("01/02")).toBeTruthy();
    expect(getByPlaceholderText("123")).toBeTruthy();
    expect(getByText("Inverter")).toBeTruthy();
  });

  it("should update card details when inputs change", () => {
    const { getByPlaceholderText, getByText } = render(<Payment />);

    fireEvent.changeText(getByPlaceholderText("Nome do titular"), "John Doe");
    fireEvent.changeText(
      getByPlaceholderText("Nome do cartão"),
      "1234123412341234"
    );
    fireEvent.changeText(getByPlaceholderText("01/02"), "12/34");
    fireEvent.changeText(getByPlaceholderText("123"), "999");

    expect(getByText("John Doe")).toBeTruthy();
    expect(getByText("1234 1234 1234 1234")).toBeTruthy();
    expect(getByText("12/34")).toBeTruthy();
    expect(getByText("999")).toBeTruthy();
  });
});
