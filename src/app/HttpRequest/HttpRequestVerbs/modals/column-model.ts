import {TransformationModel} from './transformation-model';
import {ValidationModel} from './validation-model';
export interface ColumnModel {
    actualColumn:string;
    dataType:string;
    inferredColumn?:string;
    mandatoryFl:boolean;
    sampleValue?:string;
    transformations:[TransformationModel];
    validation:ValidationModel;
    visible:boolean;
}
