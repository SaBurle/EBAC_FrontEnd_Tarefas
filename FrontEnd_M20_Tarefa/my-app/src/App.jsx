import { useRecoilValue } from 'recoil';
import FormTarefa from './components/FormTarefa';
import FiltroTarefas from './components/FiltroTarefas';
import ListaTarefas from './components/ListaTarefas';
import { tarefasCountSelector } from './selectors/tarefasCount';
import { GlobalStyle, Main, Titulo } from './App.styles';

function App() {

  const tarefasCount = useRecoilValue(tarefasCountSelector);

  return (
    <Main>
      <GlobalStyle/>
      <Titulo>To do List ({tarefasCount})</Titulo>
      <FormTarefa/>
      <FiltroTarefas/>
      <ListaTarefas/>
    </Main>
  )
}

export default App
