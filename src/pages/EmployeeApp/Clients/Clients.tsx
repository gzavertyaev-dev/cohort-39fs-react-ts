import { useEffect } from "react";

import { PageWrapper, NavContainer, ClientsLink } from "./styles";

function Clients() {
  useEffect(() => {
    // Unmounting
    return () => {
      console.log("Unmounting Clients Component");
    };
  }, []);
  
  return (
    <PageWrapper>
      <NavContainer>
        <ClientsLink to="/clients/apple">Apple</ClientsLink>
        <ClientsLink to="/clients/facebook">Facebook</ClientsLink>
        <ClientsLink to="/clients/google">Google</ClientsLink>
      </NavContainer>
    </PageWrapper>
  );
}

export default Clients;
