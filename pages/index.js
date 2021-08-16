import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Navbar from '../comps/Navbar';

export default function Home() {
	return (
		<HomeStyle>
			<div className="main-cont">
				<div style={{ position: 'relative' }}>
					<Image src="/drone.jpeg" alt="drone" layout="fill" />
				</div>
				<div>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</div>
		</HomeStyle>
	);
}

const HomeStyle = styled.div`
	padding: 2rem;
	.main-cont {
		display: grid;
		grid-auto-flow: column;
		gap: 10%;
	}

	@media (max-width: 600px) {
		.main-cont {
			grid-auto-flow: row;
		}
	}
`;
