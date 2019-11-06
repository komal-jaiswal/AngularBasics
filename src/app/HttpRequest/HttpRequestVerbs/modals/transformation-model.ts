import {TransformationFieldModel} from './transformation-field-model';
export interface TransformationModel {
    dataTypeId:number;
    transformationFields:[TransformationFieldModel];
    transformationId:number;
    transformationName:string;
}
