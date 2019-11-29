import {get} from 'lodash'
import weka from '../../../node_modules/node-weka/lib/weka-lib'

const predict = (body) =>{
    const data = body
    console.log("TCL: predict -> data", data)
    
    var options = {
        'classifier': 'weka.classifiers.functions.SMO',
        'params'    : ''
    };
    
    weka.predict('./test_prediction.model', data, options, function (err, result) {
        cb(err, result);
    });



    return data
}
export default predict