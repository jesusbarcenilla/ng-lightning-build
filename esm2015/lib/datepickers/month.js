import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChildren, NgZone } from '@angular/core';
import { take } from 'rxjs/operators';
import { split, getToday, isEqualDate, numberOfDaysInMonth, isDisabled } from './util';
import { NglDay } from './day';
export class NglDatepickerMonth {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.dateDisabled = null;
        this.selectDate = new EventEmitter();
    }
    indexTrackBy(index) {
        return index;
    }
    dateTrackBy(index, { year, month, day }) {
        return `${day}-${month}-${year}`;
    }
    onSelect(date) {
        if (date.disabled)
            return;
        this.selectDate.emit(date);
    }
    ngOnChanges(changes) {
        if (changes.year || changes.month || changes.firstDayOfWeek) {
            this.renderView();
            return;
        }
        if (changes.day) {
            this.updateActive();
        }
        if (changes.selected) {
            this.updateSelected();
        }
        if (changes.minDate || changes.maxDate || changes.dateDisabled) {
            this.updateDisabled();
        }
    }
    focusActiveDay() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
                const active = this.days.find((d) => d.isActive);
                if (active) {
                    active.focus();
                }
            });
        });
    }
    renderView() {
        const days = this.daysInMonth(this.year, this.month);
        Array.prototype.unshift.apply(days, this.daysInPreviousMonth(this.year, this.month));
        const nextMonth = this.daysInNextMonth(this.year, this.month + 1, days.length);
        if (nextMonth) {
            Array.prototype.push.apply(days, nextMonth);
        }
        this.weeks = split(days);
    }
    daysInMonth(year, month) {
        const last = numberOfDaysInMonth(year, month);
        return this.getDayObjects(year, month, 1, last);
    }
    daysInPreviousMonth(year, month) {
        const firstIndex = (new Date(year, month, 1)).getDay();
        const last = new Date(year, month, 0).getDate();
        const numDays = (7 + firstIndex - this.firstDayOfWeek) % 7;
        return this.getDayObjects(year, month - 1, last - numDays + 1, last, false);
    }
    daysInNextMonth(year, month, numOfDays) {
        if (numOfDays % 7 === 0) {
            return;
        }
        return this.getDayObjects(year, month, 1, 7 - (numOfDays % 7), false);
    }
    getDayObjects(year, month, from, to, isCurrentMonth = true) {
        const today = getToday();
        const days = [];
        for (let day = from; day <= to; day++) {
            const d = {
                year,
                month,
                day,
                isCurrentMonth,
                today: isEqualDate(today, { year, month, day }),
            };
            d.active = this.isActive(d);
            d.selected = this.isSelected(d);
            d.disabled = this.isDisabled(d);
            days.push(d);
        }
        return days;
    }
    updateActive() {
        this.weeks.forEach((days) => {
            days.forEach(day => {
                day.active = this.isActive(day);
            });
        });
    }
    isActive(day) {
        return day.isCurrentMonth && day.day === this.day;
    }
    updateSelected() {
        this.weeks.forEach((days) => {
            days.forEach((day) => {
                day.selected = this.isSelected(day);
            });
        });
    }
    isSelected(day) {
        return isEqualDate(this.selected, day);
    }
    updateDisabled() {
        this.weeks.forEach((days) => {
            days.forEach(day => {
                day.disabled = this.isDisabled(day);
            });
        });
    }
    /** Date filter for the month */
    isDisabled(d) {
        return !d.isCurrentMonth || isDisabled(d, this.dateDisabled, this.minDate, this.maxDate);
    }
}
NglDatepickerMonth.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglDatepickerMonth]',
                template: "\n<tr *ngFor=\"let week of weeks; trackBy:indexTrackBy\">\n  <td *ngFor=\"let date of week; trackBy:dateTrackBy\" [class.slds-is-today]=\"date.today\" [isActive]=\"date.active\" [nglDay]=\"date\" [nglDaySelected]=\"date.selected\" [nglDayDisabled]=\"date.disabled\" (click)=\"onSelect(date)\" role=\"gridcell\"><span class=\"slds-day\">{{ date.day }}</span></td>\n</tr>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDatepickerMonth.ctorParameters = () => [
    { type: NgZone }
];
NglDatepickerMonth.propDecorators = {
    selected: [{ type: Input }],
    year: [{ type: Input }],
    month: [{ type: Input }],
    day: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateDisabled: [{ type: Input }],
    selectDate: [{ type: Output }],
    days: [{ type: ViewChildren, args: [NglDay,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRlcGlja2Vycy9tb250aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBYSxNQUFNLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNKLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQW1CLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN4RyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBZS9CLE1BQU0sT0FBTyxrQkFBa0I7SUF3QjdCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUmhCLGlCQUFZLEdBQW1DLElBQUksQ0FBQztRQUU1RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFNdEIsQ0FBQztJQUV0QyxZQUFZLENBQUMsS0FBYTtRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQWtCO1FBQzVELE9BQU8sR0FBRyxHQUFHLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBcUI7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxJ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QUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNGLENBQUM7OztZQWpLRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyw2WEFBMkI7Z0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFqQmtHLE1BQU07Ozt1QkFvQnRHLEtBQUs7bUJBRUwsS0FBSztvQkFFTCxLQUFLO2tCQUVMLEtBQUs7NkJBRUwsS0FBSztzQkFFTCxLQUFLO3NCQUVMLEtBQUs7MkJBRUwsS0FBSzt5QkFFTCxNQUFNO21CQUVOLFlBQVksU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgTmdab25lLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbERhdGUsIHNwbGl0LCBnZXRUb2RheSwgaXNFcXVhbERhdGUsIG51bWJlck9mRGF5c0luTW9udGgsIGlzRGlzYWJsZWQgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgTmdsRGF5IH0gZnJvbSAnLi9kYXknO1xuXG5pbnRlcmZhY2UgSU5nbERheUNlbGwgZXh0ZW5kcyBOZ2xJbnRlcm5hbERhdGUge1xuICB0b2RheTogYm9vbGVhbjtcbiAgaXNDdXJyZW50TW9udGg6IGJvb2xlYW47XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmdsRGF0ZXBpY2tlck1vbnRoXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb250aC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbERhdGVwaWNrZXJNb250aCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWQ6IE5nbEludGVybmFsRGF0ZTtcblxuICBASW5wdXQoKSByZWFkb25seSB5ZWFyOiBudW1iZXI7XG5cbiAgQElucHV0KCkgcmVhZG9ubHkgbW9udGg6IG51bWJlcjtcblxuICBASW5wdXQoKSByZWFkb25seSBkYXk6IG51bWJlcjtcblxuICBASW5wdXQoKSByZWFkb25seSBmaXJzdERheU9mV2VlazogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHJlYWRvbmx5IG1pbkRhdGU6IE5nbEludGVybmFsRGF0ZTtcblxuICBASW5wdXQoKSByZWFkb25seSBtYXhEYXRlOiBOZ2xJbnRlcm5hbERhdGU7XG5cbiAgQElucHV0KCkgcmVhZG9ubHkgZGF0ZURpc2FibGVkOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2xJbnRlcm5hbERhdGU+KCk7XG5cbiAgQFZpZXdDaGlsZHJlbihOZ2xEYXkpIGRheXM6IFF1ZXJ5TGlzdDxOZ2xEYXk+O1xuXG4gIHdlZWtzOiBJTmdsRGF5Q2VsbFtdW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBpbmRleFRyYWNrQnkoaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGRhdGVUcmFja0J5KGluZGV4OiBudW1iZXIsIHt5ZWFyLCBtb250aCwgZGF5fTogTmdsSW50ZXJuYWxEYXRlKSB7XG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aH0tJHt5ZWFyfWA7XG4gIH1cblxuICBvblNlbGVjdChkYXRlOiBOZ2xJbnRlcm5hbERhdGUpIHtcbiAgICBpZiAoZGF0ZS5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZWxlY3REYXRlLmVtaXQoZGF0ZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMueWVhciB8fCBjaGFuZ2VzLm1vbnRoIHx8IGNoYW5nZXMuZmlyc3REYXlPZldlZWspIHtcbiAgICAgIHRoaXMucmVuZGVyVmlldygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRheSkge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZCgpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1pbkRhdGUgfHwgY2hhbmdlcy5tYXhEYXRlIHx8IGNoYW5nZXMuZGF0ZURpc2FibGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNBY3RpdmVEYXkoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmRheXMuZmluZCgoZCkgPT4gZC5pc0FjdGl2ZSk7XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICBhY3RpdmUuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclZpZXcoKSB7XG4gICAgY29uc3QgZGF5cyA9IHRoaXMuZGF5c0luTW9udGgodGhpcy55ZWFyLCB0aGlzLm1vbnRoKTtcblxuICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGRheXMsIHRoaXMuZGF5c0luUHJldmlvdXNNb250aCh0aGlzLnllYXIsIHRoaXMubW9udGgpKTtcbiAgICBjb25zdCBuZXh0TW9udGggPSB0aGlzLmRheXNJbk5leHRNb250aCh0aGlzLnllYXIsIHRoaXMubW9udGggKyAxLCBkYXlzLmxlbmd0aCk7XG4gICAgaWYgKG5leHRNb250aCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZGF5cywgbmV4dE1vbnRoKTtcbiAgICB9XG5cbiAgICB0aGlzLndlZWtzID0gc3BsaXQoZGF5cyk7XG4gIH1cblxuICBwcml2YXRlIGRheXNJbk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcikge1xuICAgIGNvbnN0IGxhc3QgPSBudW1iZXJPZkRheXNJbk1vbnRoKHllYXIsIG1vbnRoKTtcbiAgICByZXR1cm4gdGhpcy5nZXREYXlPYmplY3RzKHllYXIsIG1vbnRoLCAxLCBsYXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgZGF5c0luUHJldmlvdXNNb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBmaXJzdEluZGV4ID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKSkuZ2V0RGF5KCk7XG4gICAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgY29uc3QgbnVtRGF5cyA9ICg3ICsgZmlyc3RJbmRleCAtIHRoaXMuZmlyc3REYXlPZldlZWspICUgNztcblxuICAgIHJldHVybiB0aGlzLmdldERheU9iamVjdHMoeWVhciwgbW9udGggLSAxLCBsYXN0IC0gbnVtRGF5cyArIDEsIGxhc3QsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZGF5c0luTmV4dE1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgbnVtT2ZEYXlzOiBudW1iZXIpIHtcbiAgICBpZiAobnVtT2ZEYXlzICUgNyA9PT0gMCkgeyByZXR1cm47IH1cbiAgICByZXR1cm4gdGhpcy5nZXREYXlPYmplY3RzKHllYXIsIG1vbnRoLCAxLCA3IC0gKG51bU9mRGF5cyAlIDcpLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGdldERheU9iamVjdHMoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIGlzQ3VycmVudE1vbnRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRvZGF5ID0gZ2V0VG9kYXkoKTtcbiAgICBjb25zdCBkYXlzOiBJTmdsRGF5Q2VsbFtdID0gW107XG4gICAgZm9yIChsZXQgZGF5ID0gZnJvbTsgZGF5IDw9IHRvOyBkYXkrKykge1xuICAgICAgY29uc3QgZDogSU5nbERheUNlbGwgPSB7XG4gICAgICAgIHllYXIsXG4gICAgICAgIG1vbnRoLFxuICAgICAgICBkYXksXG4gICAgICAgIGlzQ3VycmVudE1vbnRoLFxuICAgICAgICB0b2RheTogaXNFcXVhbERhdGUodG9kYXksIHsgeWVhciwgbW9udGgsIGRheSB9KSxcbiAgICAgIH07XG5cbiAgICAgIGQuYWN0aXZlID0gdGhpcy5pc0FjdGl2ZShkKTtcbiAgICAgIGQuc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQoZCk7XG4gICAgICBkLmRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKGQpO1xuICAgICAgZGF5cy5wdXNoKGQpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5cztcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQWN0aXZlKCkge1xuICAgIHRoaXMud2Vla3MuZm9yRWFjaCgoZGF5czogSU5nbERheUNlbGxbXSkgPT4ge1xuICAgICAgZGF5cy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgIGRheS5hY3RpdmUgPSB0aGlzLmlzQWN0aXZlKGRheSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNBY3RpdmUoZGF5OiBJTmdsRGF5Q2VsbCkge1xuICAgIHJldHVybiBkYXkuaXNDdXJyZW50TW9udGggJiYgZGF5LmRheSA9PT0gdGhpcy5kYXk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNlbGVjdGVkKCkge1xuICAgIHRoaXMud2Vla3MuZm9yRWFjaCgoZGF5czogSU5nbERheUNlbGxbXSkgPT4ge1xuICAgICAgZGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgICAgZGF5LnNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKGRheSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTZWxlY3RlZChkYXk6IElOZ2xEYXlDZWxsKSB7XG4gICAgcmV0dXJuIGlzRXF1YWxEYXRlKHRoaXMuc2VsZWN0ZWQsIGRheSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURpc2FibGVkKCkge1xuICAgIHRoaXMud2Vla3MuZm9yRWFjaCgoZGF5czogSU5nbERheUNlbGxbXSkgPT4ge1xuICAgICAgZGF5cy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgIGRheS5kaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZChkYXkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogRGF0ZSBmaWx0ZXIgZm9yIHRoZSBtb250aCAqL1xuICBwcml2YXRlIGlzRGlzYWJsZWQoZDogSU5nbERheUNlbGwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWQuaXNDdXJyZW50TW9udGggfHwgaXNEaXNhYmxlZChkLCB0aGlzLmRhdGVEaXNhYmxlZCwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xuICB9XG59XG4iXX0=