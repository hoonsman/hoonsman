import Create from './components/Create';
import Header from './components/Header';
import Styles from './app.module.css';
function App() {
	return (
		<div className={Styles.container}>
			<Header />
			<Create />
			{/*main */} 
		</div>
	);
}

export default App;
