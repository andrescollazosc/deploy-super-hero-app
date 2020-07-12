import { ColorElementEnum } from '../enums/color-elements.enum';

export interface CardPeopleModel {
    id?: number;
    src?: string;
    title: string;
    history: string;
    labelButtom: string;
    colorButtom?: ColorElementEnum;
}