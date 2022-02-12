import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import CreateMixers from "../components/mixers/createMixer";
import ShowMixers from "../components/mixers/showMixers";
import CreateForm from "../components/sharedComponents/createForm";

const Mixers = ({ mixers, setMixers, updateMixer }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary>
          <Typography>Create</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CreateMixers mixers={mixers} setMixers={setMixers} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography>Show</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ShowMixers
            mixers={mixers}
            updateMixer={updateMixer}
            setMixers={setMixers}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Mixers;
