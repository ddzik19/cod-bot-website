/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../components/button";
import Logo from "../assets/images/unnamed.png"
export default function Navbar() {
	return (
		<div className="list-none m-5 w-full">
			<div className="text-right">
				<Button children="Add to Server" href="#"/>
			</div>
		</div>
	);
}
