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
			</Routes>
		</>
	);
};

export default App;
