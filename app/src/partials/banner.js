import Button from "../components/button";
import Header from "../components/header";
import SubHeading from "../components/sub-heading";
const Banner = () => {
	return (
		<div className="h-full w-auto text-center pt-12 md:pt-[150px] md:mb-[250px]">
			<video autoPlay muted loop className="shadow-2xl video md:h-[85vh]">
				<source
					src="https://rr1---sn-8vq54voxpx-q0cd.googlevideo.com/videoplayback?expire=1666360889&ei=2VFSY7uAG-aI6dsP0c-sqAo&ip=176.67.87.31&id=o-AA9NibV_O50Gy32Go8TfPiIxTf57tRxiJHsZrss5WstS&itag=308&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&spc=yR2vp6-tlRSLyMLgJ7KsKJfQWrHunxM&vprv=1&mime=video%2Fwebm&ns=uzTMCV-Ymv64kJGm6WJYBgkI&gir=yes&clen=123193712&dur=90.089&lmt=1583775133194631&keepalive=yes&fexp=24001373,24007246&c=WEB_EMBEDDED_PLAYER&txp=5531432&n=TaFqj5E7L9wFRg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAPgs74W9frV_I6SXMfPdLfNHR2IS8aho8kUBfcRDj4vfAiEAv6df3ZDHJQe-hCzL5Q15opfGGFeMz3XV8AzI7PshwmY%3D&redirect_counter=1&rm=sn-2gber7l&req_id=65c67678b6fca3ee&cms_redirect=yes&ipbypass=yes&mh=_X&mip=64.43.32.32&mm=31&mn=sn-8vq54voxpx-q0cd&ms=au&mt=1666339023&mv=m&mvi=1&pl=21&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgRAASBxzL9unbmQTRSvkzHA_4mSlhx-xf_zBU8yhVx0ICIFjhKBtLXFjm8qKbyiuqe3ihw9A_lO2HDzQJiKl4HBqz"
					type="video/webm"
				/>
			</video>
			<Header>
				Lorem ipsum dolor
				<br /> dolor sit amet dolor sit amet
			</Header>
			<SubHeading>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed leo
				posuere, volutpat sem a, vulputate neque. Morbi viverra tortor id dolor
				pharetra pharetra.
			</SubHeading>
			<div className="md:pt-5 pb-10">
				<Button children={"Get COD Bot"} className="banner-btn p-3 mt-5" />
			</div>
		</div>
	);
};

export default Banner;
