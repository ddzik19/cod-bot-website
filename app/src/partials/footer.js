/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../components/button";

export default function Footer() {
	return (
		<div className="relative w-full grid grid-cols-3 p-5">
			<div>
				<img alt="logo" className="m-auto" />
				<Button children={"Add to Server"} />
				<p className="font-bold pt-3 text-white"> &copy; Damian Dzik 2022 </p>
			</div>
			<div className="w-full"></div>
			<ul className="md:text-right list-none text-[#b3b8cd] footer-list">
				<li className="hover:cursor-pointer p-1 hover:text-white">
					<a>Our Discord</a>
				</li>
				<li className="hover:cursor-pointer p-1 hover:text-white">
					<a>Add to server</a>
				</li>
				<li className="hover:cursor-pointer p-1 hover:text-white">
					<a>FAQ</a>
				</li>
			</ul>
		</div>
	);
}

/* <div className="grid grid-cols-2">
<div className="grid grid-cols-0 max-w-[200px]" >
	<img alt="logo" className="m-auto" />
	<Button children={"Add to Server"} />
	<p className="font-bold text-white"> &copy; Damian Dzik 2022 </p>
</div>
<div className="list-none max-w-[200px]">
	<div>dev Discord</div>
	<div>Add to server</div>
	<div className="">
		<TextInput
			type="email"
			name="email"
			placeholder="Subscribe to News Letter"
		/>
	</div>
</div>
</div> */
