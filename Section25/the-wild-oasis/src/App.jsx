import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.js';
import Button from './ui/Button.jsx';
import Input from './ui/Input.jsx';
import Heading from './ui/Heading.jsx';

const StyledApp = styled.main`
	background-color: orangered;
	padding: 20px;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Heading as={'h1'}>Hello, World</Heading>
				<Heading as={'h2'}>Hello, World</Heading>
				<Heading as={'h3'}>Hello, World</Heading>
				<Button>Check in</Button>
				<Button>Check out</Button>
				<Input type="number" placeholder="number of guests" />
			</StyledApp>
		</>
	);
}

export default App;
