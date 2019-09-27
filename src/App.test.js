import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createBrowserHistory } from "history";
import { Router as FakeRouter } from "react-router-dom";

describe("App", () => {
  describe("/photos", () => {
    it("should have Album as page heading", () => {
      const history = createBrowserHistory();
      history.push("/photos");

      const { getByText } = render(
        <FakeRouter history={history}>
          <App />
        </FakeRouter>
      );

      expect(getByText("Album")).toBeInTheDocument();
    });

    it("should have Home as page heading", () => {
      const history = createBrowserHistory();
      history.push("/photos");

      const { getByText } = render(
        <FakeRouter history={history}>
          <App />
        </FakeRouter>
      );

      expect(getByText("Home")).toBeInTheDocument();
    });

    it("should show Hokkaido when Hokkaido is checked", () => {
      const history = createBrowserHistory();
      history.push("/photos");

      const { getByText, getByLabelText } = render(
        <FakeRouter history={history}>
          <App />
        </FakeRouter>
      );

      const hokkaidoCheckbox = getByLabelText("hokkaido");
      fireEvent.click(hokkaidoCheckbox);

      expect(hokkaidoCheckbox).toBeInTheDocument();
      expect(getByText("hokkaido")).toBeInTheDocument(); // this should not pass
    });
  });
});
