import React from "react";
import * as S from "./styles"
import { ReactComponent as GithubLogo } from "../../../assets/github.svg";
import { ReactComponent as LinkedInLogo } from "../../../assets/linkedin.svg";
// import medium from "../../../assets/medium.svg";

const Header: React.FC = () => {
	return (
		<S.Header>
			{/* <div>
				<S.Link href="#">Skills</S.Link>
				<S.Link href="#" target="_blank">Timeline</S.Link>
			</div> */}
			<S.HeaderIcons>
				<S.LogoLink href="https://www.linkedin.com/in/melissa-novais-0bb203151/" target="_blank">
					<LinkedInLogo />
				</S.LogoLink>
				<S.LogoLink href="https://github.com/MelissaNovaisBurakowski" target="_blank">
					<GithubLogo />
				</S.LogoLink>
				{/* <a href="https://medium.com/@mf.novais.98" target="_blank">
					<S.Icon src={medium} />
				</a> */}

			</S.HeaderIcons>

		</S.Header>
	)
}

export default Header;