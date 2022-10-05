import React from "react";
import * as S from "../../organisms/hero/styles";
import mel from "../../../assets/mel.jpg";
import Header from "../header/Header";

const Hero: React.FC = () => {

	return (
		<>
			<Header />
			<S.Background >
				<img src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
			</S.Background>
			<S.Section>

				<S.ImageWrapper>
					<img src={mel} />
				</S.ImageWrapper>
				<S.TextWrapper>
					<S.Title>Olá Mundo!</S.Title>
					<S.Subtitle>Eu me chamo Mel Novais Burakowski e sou uma Desenvolvedora <S.SubtitlePrimary>Full Stack!</S.SubtitlePrimary></S.Subtitle>
				</S.TextWrapper>
			</S.Section>
		</>
	)
}

export default Hero