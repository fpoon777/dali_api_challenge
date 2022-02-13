/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/examples/kekehome_logo_larger.png";

function Places() {
  return (
    <MKBox component="section">
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6} justifyContent="center" mx="auto">
            Check my business venture:
          </MKTypography>
        </Grid>
        <Grid container spacing={3} justifyContent="center" mx="auto">
          <Grid item xs={12} sm={3} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="KeKeHome"
              description="Finding U.S. homes for Chinese buyers."
              action={{
                type: "external",
                route: "http://kekekey.com/",
                color: "info",
                label: "learn more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
