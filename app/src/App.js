import React from "react";
import Footer from "./partials/footer";
import Layout from "./partials/layout";
import Banner from "./partials/banner";
import Header from "./components/header";
import ContactUs from "./partials/constact-us";
import ContentBlock from "./partials/content-block";
import About from "./partials/about";
import Faq from "./partials/faq";
import Commands from "./partials/commands";

function App() {
	return (
		<Layout>
			<Banner />
			<ContentBlock className={"pt-[10%] md:pt-[6%] lg:pt-[13%] xl:pt-[13%] 2xl:pt-[8%]"}>
				{/* About */}
				<Header>What is <br/> Commander-B?</Header>
				<About/>
			</ContentBlock>
			<ContentBlock>{/* Gallery */}</ContentBlock>
			<ContentBlock className={"text-center"}>
				{/* Commands */}
				<Header>Commands</Header>
				<Commands />
			</ContentBlock>
			<ContentBlock>
				{/* FAQ Section */}
				<Faq />
			</ContentBlock>
			<ContentBlock>
				{/* Contact Us */}
				<Header children={"Contact Us"} />
				<ContactUs />
			</ContentBlock>
			<Footer />
		</Layout>
	);
}

export default App;
