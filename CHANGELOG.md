# 2.4.11 (2020-05-06)

### Bug Fixes

* - Merged: [Ensure click event listener is always removed #184](Ensure click event listener is always removed #184)

### Features

* - none



# 2.4.10 (2019-12-14)

### Bug Fixes

* -

### Features

* - Renderer removed.


# 2.4.9 (2018-08-21)

### Bug Fixes

* -

### Features

* - Added the focusInputOnDateSelect option.


# 2.4.8 (2018-08-01)

### Bug Fixes

* -

### Features

* - enableDates option works now so that year and month can be zero. If value of year/month is zero it affects all years/months. For example enable first day of every year and month: [{year: 0, month: 0, day: 1}]. It is possible enable recurring dates if they are disabled.


# 2.4.7 (2018-07-20)

### Bug Fixes

* -

### Features

* - disbleDates option works now so that year and month can be zero. If value of year/month is zero it affects all years/months. For example disable first day of every year and month: [{year: 0, month: 0, day: 1}].


# 2.4.6 (2018-07-06)

### Bug Fixes

* -

### Features

* - Added export to NgxMyDatePickerConfig.


# 2.4.5 (2018-03-23)

### Bug Fixes

* -

### Features

* - Added option disableWeekdays.


# 2.4.4 (2018-02-23)

### Bug Fixes

* Merged #128. It implements the OnDestroy method and it closes the calendar of date picker if it is open.

### Features

* -


# 2.4.3 (2018-02-03)

### Bug Fixes

* Merged #125

### Features

* README.md file updated.


# 2.4.2 (2018-01-08)

### Bug Fixes

* Merged #121

### Features

* none


# 2.4.1 (2018-01-06)

### Bug Fixes

* Merged #119

### Features

* none


# 2.4.0 (2017-12-26)

### Bug Fixes

* none

### Features

* Error is not now thrown if the input date that is set is invalid (for example disabled date). Now the component only calls the __inputFieldChanged__ callback with valid value of false.


# 2.3.4 (2017-12-06)

### Bug Fixes

* none

### Features

* Merged #111 which adds invalid date validator. Now focus is set to the input box when a date is selected from the calendar.


# 2.3.3 (2017-11-28)

### Bug Fixes

* Unsubscribe click listener in the OnDestroy callback.

### Features

* none


# 2.3.2 (2017-11-20)

### Bug Fixes

* -


### Features

* The __isDateValid()__ function now calls also the __inputFieldChanged__ callback. (#107).

# 2.3.1 (2017-11-20)

### Bug Fixes

* -


### Features

* Added new function __isDateValid()__ (#107).


# 2.3.0 (2017-11-07)

### Bug Fixes

* Fixing short date format functionality.

### Features

* none


# 2.2.0 (2017-11-05)

### Bug Fixes

* none

### Features

* Added support to short date formats fro example __d.m.yyyy__.
  * Issue: Manually entered dates without leading zeroes being ignored, treated as empty fields. ([#63](https://github.com/kekeh/ngx-mydatepicker/issues/63))


# 2.1.6 (2017-11-04)

### Bug Fixes

* Added missing __inputFieldChanged__ callback call when a date is selected from the calendar.

### Features

* none


# 2.1.5 (2017-10-21)

### Bug Fixes

* none

### Features

* Added option __appendSelectorToBody__.


# 2.1.4 (2017-10-15)

### Bug Fixes

* none

### Features

* Added option __allowSelectionOnlyInCurrentMonth__.