import { NgModule } from '@angular/core';

import { StudentPlannerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StudentPlannerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StudentPlannerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StudentPlannerSharedCommonModule {}
