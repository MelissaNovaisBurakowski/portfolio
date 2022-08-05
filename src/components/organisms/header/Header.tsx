import React from "react";
import * as S from "./styles"
import github from "../../../assets/github.svg";
import medium from "../../../assets/medium.svg";
import linkedin from "../../../assets/linkedin.svg";

const Header: React.FC = () => {
	return (
		<S.Header>
			<div>
				<S.Link href="#">Skills</S.Link>
				<S.Link href="#" target="_blank">Timeline</S.Link>
			</div>
			<S.HeaderIcons>
				<a href="https://www.linkedin.com/in/melissa-novais-0bb203151/" target="_blank">
					<S.Icon src={linkedin} />
				</a>
				<a href="https://github.com/MelissaNovaisBurakowski" target="_blank">
					<S.Icon src={github} />
				</a>
				<a href="https://medium.com/@mf.novais.98" target="_blank">
					<S.Icon src={medium} />
				</a>

			</S.HeaderIcons>

		</S.Header>
	)
}

export default Header;