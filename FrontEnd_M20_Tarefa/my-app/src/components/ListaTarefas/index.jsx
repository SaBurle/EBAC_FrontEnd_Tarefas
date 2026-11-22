import { useRecoilValue } from 'recoil';
import Tarefa from '../Tarefa';
import { tarefasFiltradasSelector } from '../../selectors/tarefasFiltradas';
import { Lista, Vazio } from './styles';

function ListaTarefas() {

    const tarefas = useRecoilValue(tarefasFiltradasSelector);

    if (tarefas.length === 0) return <Vazio>Nenhuma tarefa por aqui.</Vazio>;

    return (
        <Lista>
            {tarefas.map(tarefa => <Tarefa key={tarefa.id} tarefa={tarefa}/>)}
        </Lista>
    )
}
export default ListaTarefas;
