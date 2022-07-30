import React from "react";
import github from "../../../assets/github.svg";
import medium from "../../../assets/medium.svg";
import linkedin from "../../../assets/linkedin.svg";
import * as S from "./styles";
import Skills from "../../organisms/skills/Skills";
import Timeline from "../../organisms/timeline/Timeline";

const Portfolio: React.FC = () => {

	return (
		<>
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
			<S.Section>
				<S.ImageWrapper>
					<S.Img src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
				</S.ImageWrapper>

				<S.TextWrapper>
					<S.Title>Olá Mundo!</S.Title>
					<S.Subtitle>Eu me chamo Mel Novais Burakowski e sou uma</S.Subtitle>
					<S.Subtitle>Desenvolvedora Full Stack!</S.Subtitle>
				</S.TextWrapper>
			</S.Section>

			<Skills />

			<Timeline />
		</>
	)
}

export default Portfolio