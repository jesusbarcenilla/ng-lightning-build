import { EventEmitter, ElementRef, OnInit, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import { NglDatepickerInput } from './input/datepicker-input';
import { NglDatepickerConfig } from './config';
import { NglInternalDate } from './util';
import { NglDatepickerMonth } from './month';
export declare class NglDatepicker implements OnInit, OnChanges, AfterViewInit {
    private dtInput;
    private element;
    monthNames: ReadonlyArray<string>;
    dayNamesShort: ReadonlyArray<string>;
    dayNamesLong: ReadonlyArray<string>;
    dateDisabled: (date: Date) => boolean | null;
    _date: NglInternalDate;
    current: NglInternalDate;
    set date(date: Date);
    dateChange: EventEmitter<any>;
    readonly showToday: boolean;
    readonly firstDayOfWeek: number;
    /**
     * Offset of year from current year, that can be the minimum option in the year selection dropdown.
     */
    readonly relativeYearFrom: number;
    /**
     * Offset of year from current year, that can be the maximum option in the year selection dropdown.
     */
    readonly relativeYearTo: number;
    /**
     * The minimum date that can be selected.
     */
    readonly min: Date;
    /**
     * The maximum date that can be selected.
     */
    readonly max: Date;
    /**
     * Label of shortcut to select current date.
     */
    readonly todayLabel: string;
    /**
     * Label for button to go to the previous month.
     */
    readonly previousMonthLabel: string;
    /**
     * Label for button to go to the next month.
     */
    readonly nextMonthLabel: string;
    weeks: NglInternalDate[];
    uid: string;
    monthLabel: string;
    minDate: NglInternalDate;
    maxDate: NglInternalDate;
    monthView: NglDatepickerMonth;
    constructor(dtInput: NglDatepickerInput, defaultConfig: NglDatepickerConfig, locale: string, element: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    moveYear(year: string | number): void;
    moveMonth(diff: number): void;
    keyboardHandler(evt: KeyboardEvent): void;
    select(date: NglInternalDate): void;
    selectToday(): void;
    ngAfterViewInit(): void;
    /** Whether the previous period button is disabled. */
    previousDisabled(): boolean;
    /** Whether the next period button is disabled. */
    nextDisabled(): boolean;
    private focusActiveDay;
    private moveCalendar;
    private setCurrent;
    private render;
    /** Date filter for the month */
    private isDisabledDate;
    private setMinMaxDates;
}
