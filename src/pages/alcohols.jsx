import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import CreateAlcohols from "../components/alcohols/createAlcohol";
import ShowAlcohols from "../components/alcohols/showAlcohols";

const Alcohols = ({ alcohols, setAlcohols, updateAlcohol }) => {
  return (
    <>
      <div>
        <>
          <Accordion>
            <AccordionSummary>
              <Typography>Create</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CreateAlcohols alcohols={alcohols} setAlcohols={setAlcohols} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography>Show</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ShowAlcohols
                alcohols={alcohols}
                updateAlcohol={updateAlcohol}
                setAlcohols={setAlcohols}
              />
            </AccordionDetails>
          </Accordion>
        </>
      </div>
    </>
  );
};

export default Alcohols;
