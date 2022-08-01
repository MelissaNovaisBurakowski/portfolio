import React from "react";
import * as S from "../../organisms/hero/styles";

const Hero: React.FC = () => {

	return (
		<>
			<S.Section>
				<S.Background >
					<img src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
				</S.Background>
				<S.ImageWrapper>
					<S.Img src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
				</S.ImageWrapper>
				<S.TextWrapper>
					<S.Title>Olá Mundo!</S.Title>
					<S.Subtitle>Eu me chamo Mel Novais Burakowski e sou uma</S.Subtitle>
					<S.Subtitle>Desenvolvedora Full Stack!</S.Subtitle>
				</S.TextWrapper>
			</S.Section>
		</>
	)
}

export default Hero