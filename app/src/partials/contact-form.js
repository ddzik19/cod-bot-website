import Input from "../components/input";
import Header from "../components/header";
const ContactForm = () => {
	return (
		<>
			<Header children={"Contact Us"} />
			<div className="md:px-[300px] text-center">
				<form className="bg-[#323443]  md:px-[100px] md:py-[35px] rounded-lg shadow-xl">
					<div className="py-1">
						<label className="px-10" for="">
							yaya
						</label>
						<Input name={"email"} />
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
