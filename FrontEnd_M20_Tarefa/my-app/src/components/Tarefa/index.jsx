import { useRecoilState } from 'recoil';
import { tarefasState } from '../../atoms/tarefas';
import { Item, TextoItem, BotaoAlerta } from './styles';

function Tarefa({tarefa}) {

    const [tarefas, setTarefas] = useRecoilState(tarefasState);

    const alternarConcluida = () => {
        setTarefas(tarefas.map(t =>
            t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t
        ));
    }

    const remover = () => {
        setTarefas(tarefas.filter(t => t.id !== tarefa.id));
    }

    return (
        <Item>
            <input type="checkbox" checked={tarefa.concluida} onChange={alternarConcluida}/>
            <TextoItem $concluida={tarefa.concluida}>{tarefa.texto}</TextoItem>
            <BotaoAlerta type="button" onClick={remover}>Remover</BotaoAlerta>
        </Item>
    )
}
export default Tarefa;
