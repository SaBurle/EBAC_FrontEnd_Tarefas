import { useRecoilState } from 'recoil';
import { filtroState } from '../../atoms/filtro';
import { Filtros, BotaoFiltro } from './styles';

const OPCOES = [
    { valor: 'todas', rotulo: 'Todas' },
    { valor: 'concluidas', rotulo: 'Concluídas' },
    { valor: 'pendentes', rotulo: 'Pendentes' }
];

function FiltroTarefas() {

    const [filtro, setFiltro] = useRecoilState(filtroState);

    return (
        <Filtros>
            {OPCOES.map(opcao => (
                <BotaoFiltro key={opcao.valor}
                    type="button"
                    $ativo={filtro === opcao.valor}
                    onClick={() => setFiltro(opcao.valor)}>
                    {opcao.rotulo}
                </BotaoFiltro>
            ))}
        </Filtros>
    )
}
export default FiltroTarefas;
