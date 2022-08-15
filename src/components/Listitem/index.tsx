import * as C from './style';
import { Item } from '../../types/item';
import { isTemplateExpression } from 'typescript';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    return (
        <C.Container>
            <input type="checkbox"  />
            <label>{item.name}</label>
        </C.Container>
    );
}