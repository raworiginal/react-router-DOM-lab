import { useNavigate } from "react-router";
import { useState } from "react";

const initialState = {
	boxOwner: "",
	boxSize: "small",
};
const MailboxForm = (props) => {
	const [formData, setFormData] = useState(initialState);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		props.addBox(formData);
		setFormData(initialState);
		navigate("/mailboxes");
	};

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="boxOwner">Enter a Boxholder: </label>
				<input
					type="text"
					name="boxOwner"
					id="boxOwner"
					onChange={handleChange}
					value={formData.boxOwner}
				/>

				<label htmlFor="boxSize">Select a Box Size: </label>
				<select
					onChange={handleChange}
					value={formData.boxSize}
					name="boxSize"
					id="boxSize">
					<option value="small">small</option>
					<option value="medium">medium</option>
					<option value="large">large</option>
				</select>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default MailboxForm;
