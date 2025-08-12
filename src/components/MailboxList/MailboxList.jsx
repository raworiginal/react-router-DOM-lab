import { Link } from "react-router";

const MailboxList = (props) => {
	return (
		<>
			<h2>Mailboxes!</h2>
			<ul>
				{props.mailboxes.map((box) => (
					<li key={box._id}>
						<Link to={`/mailboxes/${box._id}`}>{box.boxOwner}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default MailboxList;
