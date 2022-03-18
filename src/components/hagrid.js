
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-heading";
export default function Hagrid() {
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
