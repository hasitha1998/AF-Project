import React from "react";
import CustomerRegister from "./CustomerRegister";

import { CustomerProvider } from "../../contexts/CustomerContext";

const index = () => {
  return (
    <>
      <CustomerProvider>
        <CustomerRegister />
      </CustomerProvider>
    </>
  );
};

export default index;
