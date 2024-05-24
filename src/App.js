import logo from './logo.svg';
import './App.css';
import { withStyle } from './patterns/hoc';
import Button from './components/button';
import Text from './components/text';

const StyledButton = withStyle(Button);
const StyledText = withStyle(Text)

const App = () => {
  return (
    <>
      <StyledButton  />
      <StyledText name="Szymon" />
    </>
  )
}

export default App;
