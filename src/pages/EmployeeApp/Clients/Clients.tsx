import { useEffect } from "react";

import { APP_ROUTES } from "constants/routes";

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
        <ClientsLink to={APP_ROUTES.APPLE}>Apple</ClientsLink>
        <ClientsLink to={APP_ROUTES.FACEBOOK}>Facebook</ClientsLink>
        <ClientsLink to={APP_ROUTES.GOOGLE}>Google</ClientsLink>
      </NavContainer>
    </PageWrapper>
  );
}

export default Clients;
