// import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Link from 'next/link';
const Navbar = () => {
	return (
		<NavBlast>
			<div className="navbar">
				<div>SAB</div>
				<div className="nav-links">
					<Link className="nav-link" href="/">
						Home
					</Link>
					<Link className="nav-link" href="/about">
						About
					</Link>
					<Link className="nav-link" href="/contact">
						Contact
					</Link>
				</div>
			</div>
		</NavBlast>
	);
};

const NavBlast = styled.div`
	padding: 2rem;
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.nav-links {
			display: flex;
			gap: 1rem;
			.nav-link {
			}
		}
	}
	@media only screen and (max-width: 500px) {
		.navbar {
			display: flex;
			flex-direction: row;
		}
	} ;
`;

export default Navbar;
