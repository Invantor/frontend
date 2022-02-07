import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../../context/globalContext";
import api from "../../api/api";

import Alert from "@mui/material/Alert";
import Banner from "../banner";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Login from "../login";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

const CreateDrinks = ({ drinks, setDrinks, alcohols, mixers }) => {
	const [error, setError] = useState(null);
	const { global } = useContext(GlobalContext);
	const [bannerOpen, setBannerOpen] = useState(false);
	const [newDrinks, setNewDrinks] = useState({
		name: "",
		alcohol_id: alcohols[0].id,
		alcohol_amount: "",
		mixer_id: mixers[0].id,
		mixer_amount: "",
	});
	
  const [bannerDisplay, setBannerDisplay] = useState({
    variant: "outlined",
    severity: "success",
    message: "",
	});
	


  const handleBannerOpen = (severity, message) => {
    setBannerDisplay({
      ...bannerDisplay,
      severity: severity,
      message: message,
    });
    setBannerOpen(true);
  };
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewDrinks({ ...newDrinks, [name]: value });
  };

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newDrink = await api.createDrink(
      newDrinks.name,
			newDrinks.alcohol_id,
			newDrinks.alcohol_amount,
			newDrinks.mixer_id,
			newDrinks.mixer_amount,
			global.user.user_id,
			global.user.jwt,
			(message, data) => {
				setDrinks([...drinks, data]);
				handleBannerOpen("success", message)
			},
      (errorMessage) => handleBannerOpen("error", errorMessage),
      );
  
  setNewDrinks({
			name: "",
			alcohol_id: alcohols[0].id,
			alcohol_amount: "",
			mixer_id: mixers[0].id,
			mixer_amount: ""
		});
  };

	return (
		<>
			<Banner
        bannerOpen={bannerOpen}
        bannerDisplay={bannerDisplay}
        setBannerOpen={setBannerOpen}
      />
			<Box sx={{ minWidth: 120 }}>
				<Typography> Add Drink </Typography>
				{/* <FormControl fullWidth onSubmit={handleSubmit}> */}
				<form className="form" onSubmit={handleSubmit}>
					<div>
						<InputLabel htmlFor="name">Name</InputLabel>
            <Input name="name" value={newDrinks.name} onChange={handleChange}/>
						<InputLabel id="select-alcohol-label">Alcohol</InputLabel>
						<NativeSelect
              name="alcohol_id"
              value={newDrinks.alcohol_id}
              onChange={handleChange}
						>
							{alcohols.map((alcohol, i) => (
								<option value={alcohol.id} key={alcohol.id}>
									{alcohol.name}
								</option>
							))}
						</NativeSelect>
						<InputLabel htmlFor="alcohol_amount">alcohol_amount</InputLabel>
            <Input name="alcohol_amount" value={newDrinks.alcohol_amount} onChange={handleChange}/>
						<InputLabel htmlFor="select-mixer-label">Mixer list</InputLabel>
            <NativeSelect
              name="mixer_id"
              id="mixer_id"
              label="Mixer"
              onChange={handleChange}
              value={newDrinks.mixer_id}
            >
							{mixers.map((mixer, i) => (
								<option value={mixer.id} key={mixer.id}>
									{mixer.name}
								</option>
							))}
						</NativeSelect>
						<Typography htmlFor="mixer_amount">mixer_amount</Typography>
						<Input name="mixer_amount" value={newDrinks.mixer_amount} onChange={handleChange} />
					</div>
					<Button type="submit">Submit</Button>
					{/* </FormControl> */}
				</form>
			</Box>
		</>
	);
};

export default CreateDrinks;
