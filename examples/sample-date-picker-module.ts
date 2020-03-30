import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MyDatePickerApp} from './sample-date-picker-app';

import {SampleDatePickerNgModel} from './sample-date-picker-ngmodel/sample-date-picker-ngmodel';
import {SampleDatePickerReacticeForms} from './sample-date-picker-reactive-forms/sample-date-picker-reactive-forms';

import {NgxMyDatePickerModule} from '../projects/ngx-mydatepicker/src/lib/ngx-mydatepicker.module';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, NgxMyDatePickerModule.forRoot()],
    declarations: [MyDatePickerApp, SampleDatePickerNgModel, SampleDatePickerReacticeForms],
    bootstrap: [MyDatePickerApp]
})
export class SampleDatePickerModule { }