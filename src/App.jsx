import UIComponent from "./components/UIComponent";
import React from "react";
import { notificationsList } from "./components/notificationsList";
export default function App() {
  return <UIComponent notificationsList={notificationsList} />;
}
