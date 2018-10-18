import template from './reduxForm.html';
import actions from '../../actions/formActions';

class ReduxFormController {
    constructor($ngRedux) {
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
    }
    mapStateToThis(state) {
        return {
            user: state.form
        }
    }
    submit() {
        console.log(this.user);
    }
    $onDestroy() {
        this.unsubscribe();
    }
}

const ReduxFormComponent = {
    controller: ReduxFormController,
    controllerAs: 'formCtrl',
    template
};

angular.module('formRedux').component('reduxForm', ReduxFormComponent);