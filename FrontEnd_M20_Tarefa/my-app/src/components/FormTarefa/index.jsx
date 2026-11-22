import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tarefasState } from '../../atoms/tarefas';
import { Form, Input, Botao } from './styles';

function FormTarefa() {

    const [tarefas, setTarefas] = useRecoilState(tarefasState);
    const [texto, setTexto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (texto.trim() === '') return;

        const nova = { id: Date.now(), texto: texto.trim(), concluida: false };
        setTarefas([...tarefas, nova]);
        setTexto('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text"
                placeholder="Digite uma nova tarefa"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}/>
            <Botao type="submit">Adicionar</Botao>
        </Form>
    )
}
export default FormTarefa;
