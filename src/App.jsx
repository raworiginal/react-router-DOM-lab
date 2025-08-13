import { Route, Routes } from "react-router";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";

const initialMailboxes = [
	{
		_id: 1,
		boxSize: "Small",
		boxOwner: "Alex",
	},
	{
		_id: 2,
		boxSize: "Medium",
		boxOwner: "Steve",
	},
	{
		_id: 3,
		boxSize: "Large",
		boxOwner: "Bobby",
	},
	{
		_id: 4,
		boxSize: "Small",
		boxOwner: "Max",
	},
];
const App = () => {
	const [mailboxes, setMailboxes] = useState(initialMailboxes);

	const addBox = (newMailboxData) => {
		newMailboxData._id = mailboxes.length + 1;
		setMailboxes([...mailboxes, newMailboxData]);
	};

	return (
		<>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<main>
							<h1>Post Office</h1>
						</main>
					}
				/>
				<Route
					path="/mailboxes"
					element={<MailboxList mailboxes={mailboxes} />}
				/>
				<Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
				<Route
					path="/mailboxes/:mailboxId"
					element={<MailboxDetails mailboxes={mailboxes} />}
				/>
				<Route path="*" element={<h2>Whoops, nothing here!</h2>} />
			</Routes>
		</>
	);
};

export default App;
