/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../components/button";
import Logo from "../assets/images/unnamed.png"
export default function Footer() {
	return (
		<div className="relative md:w-full md:grid md:grid-cols-2 md:p-5">
			<div className="text-center md:text-right md:pr-10">
				<img alt="logo" className="m-auto pb-4 max-w-[100px] md:ml-auto md:mr-8 md:pb-3"  src={Logo}/>
				<Button children={"Add to Server"}  href="#"/>
				<p className="font-bold pt-3 text-white pr-3"> &copy; Damian Dzik 2022 </p>
			</div>
			<ul className="text-center md:text-left md:pl-10 mdlist-none text-[#b3b8cd] footer-list">
				<li className="pb-2 pt-2 md:hover:cursor-pointer md:p-1 md:hover:text-white">
					<a>Our Discord</a>
				</li>
				<li className="pb-2 hover:cursor-pointer md:p-1 hover:text-white">
					<a>Add to server</a>
				</li>
				<li className="pb-2 hover:cursor-pointer md:p-1 hover:text-white">
					<a>FAQ</a>
				</li>
			</ul>
		</div>
	);
}
