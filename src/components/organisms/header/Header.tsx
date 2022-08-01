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
				<S.Link href="#">Timeline</S.Link>
				<S.Link href="#">Contato</S.Link>
			</div>
			<S.HeaderIcons>
				<S.Icon src={linkedin} />
				<S.Icon src={github} />
				<S.Icon src={medium} />
			</S.HeaderIcons>

		</S.Header>
	)
}

export default Header;