import MailboxList from "./components/MailboxList/MailboxList";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

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
			<h1>Mailbox</h1>
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
				{/* <Route path="/new-mailbox" element={<MailboxForm />} /> */}
				<Route
					path="/mailboxes/:mailboxId"
					element={<MailboxDetails mailboxes={mailboxes} />}
				/>
			</Routes>
		</>
	);
};

export default App;
