import { useParams } from "react-router";

const MailboxDetails = (props) => {
	const { mailboxId } = useParams();
	const mailbox = props.mailboxes.find((box) => {
		return box._id === Number(mailboxId);
	});
	if (!mailbox) {
		return <h1>Mailbox not Found!</h1>;
	}
	return (
		<>
			<h1>Mailbox {mailbox._id}</h1>
			<h2>Details</h2>
			<p>Boxholder: {mailbox.boxOwner}</p>
			<p>Box Size: {mailbox.boxSize}</p>
		</>
	);
};

export default MailboxDetails;
