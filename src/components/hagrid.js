
import { jsx, Container, Box } from "theme-ui";
import { useEffect } from "react";

import SectionHeader from "components/section-heading";
export default function Hagrid() {

  useEffect(() => {
    {
      const checkIfConfigScriptExists = document.getElementById(
        "hagrid-config-script"
      );
      if (checkIfConfigScriptExists) {
        return;
      }
      const script = document.createElement("script");
      script.type = "application/javascript";
      script.id = "hagrid-config-script";
      script.innerHTML = 'window.HAGRID_WEBSITE_ID = "eclbjy";';
      document.body.appendChild(script);


      const checkIfHagridScriptExists =
        document.getElementById("hagrid-script");
      if (checkIfHagridScriptExists) {
        return;
      }
      const hagridScript = document.createElement("script");
      hagridScript.type = "application/javascript";
      hagridScript.src = "https://static.hgrd.app/build/main.js";
      hagridScript.async = true;
      hagridScript.id = "hagrid-script";
      document.body.appendChild(hagridScript);
    }
  });
    return  (<Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader
          title="Any specific quesiton ?"
          description="Our support team ready to help you, please contact with them"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -80,
          }}
        >
          <div className="hagrid"></div>
        </Box>
      </Container>
    </Box>)
}
