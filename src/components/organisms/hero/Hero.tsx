import React from "react";
import * as S from "../../organisms/hero/styles";
import mel from "../../../assets/mel.jpg";
import Header from "../header/Header";

const Hero: React.FC = () => {

	return (
		<S.Background>

			<Header />
			<S.Bubbles />
			<S.Bubbles />
			<S.Section>
				<S.ImageWrapper>
					<img src={mel} />
				</S.ImageWrapper>
				<S.TextWrapper>
					<S.Title>Olá Mundo!</S.Title>
					<S.Subtitle>Eu me chamo Mel Novais Burakowski e sou uma <span>Desenvolvedora Full Stack!</span></S.Subtitle>
				</S.TextWrapper>
			</S.Section>
		</S.Background>
	)
}

export default Hero