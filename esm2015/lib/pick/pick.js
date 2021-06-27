import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputBoolean } from '../util/convert';
export class NglPick {
    constructor() {
        this.values = new BehaviorSubject(null);
        this.nglPickChange = new EventEmitter();
        this.nglOptionDestroyed = new EventEmitter();
        this.isMultiple = false;
    }
    set setSelected(selected) {
        this.selected = selected;
        this.ngAfterContentInit();
    }
    ngAfterContentInit() {
        this.values.next(this.selected);
    }
    selectOption(value) {
        let next;
        if (this.isMultiple) {
            if (Array.isArray(this.selected)) {
                // Remove if already there or add to selection
                const index = this.selected.indexOf(value);
                next = index > -1
                    ? [...this.selected.slice(0, index), ...this.selected.slice(index + 1)]
                    : [...this.selected, value];
            }
            else {
                next = Object.assign({}, this.selected, { [value]: !this.selected[value] });
            }
        }
        else {
            next = value;
        }
        this.nglPickChange.emit(next);
    }
    optionRemoved(value) {
        if (this.isMultiple && !this.selected) {
            return;
        }
        let emit;
        if (this.isMultiple) {
            emit = Array.isArray(this.selected) ? this.selected.indexOf(value) > -1 : !!this.selected[value];
        }
        else {
            emit = this.selected === value;
        }
        if (emit) {
            setTimeout(() => this.nglOptionDestroyed.emit(value));
        }
    }
}
NglPick.decorators = [
    { type: Directive, args: [{
                selector: '[nglPick]',
            },] }
];
NglPick.propDecorators = {
    setSelected: [{ type: Input, args: ['nglPick',] }],
    nglPickActiveClass: [{ type: Input }],
    nglPickChange: [{ type: Output }],
    nglOptionDestroyed: [{ type: Output }],
    isMultiple: [{ type: Input, args: ['nglPickMultiple',] }]
};
__decorate([
    InputBoolean()
], NglPick.prototype, "isMultiple", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3BpY2svcGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLL0MsTUFBTSxPQUFPLE9BQU87SUFIcEI7UUFNRSxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFTekIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFUixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBMEMvRCxDQUFDO0lBcERDLElBQXNCLFdBQVcsQ0FBQyxRQUFnQjtRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBU0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDckIsSUFBSSxJQUFTLENBQUM7UUFDZCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEMsOENBQThDO2dCQUM5QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ1QsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUMzRTtTQUNGO2FBQU07WUFDTCxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQWEsQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEc7YUFBTTtZQUNMLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7YUFDdEI7OzswQkFNRSxLQUFLLFNBQUMsU0FBUztpQ0FLZixLQUFLOzRCQUVMLE1BQU07aUNBQ04sTUFBTTt5QkFFTixLQUFLLFNBQUMsaUJBQWlCOztBQUFrQjtJQUFmLFlBQVksRUFBRTsyQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsUGlja10nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xQaWNrIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgc2VsZWN0ZWQ6IGFueTtcbiAgdmFsdWVzID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBASW5wdXQoJ25nbFBpY2snKSBzZXQgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQ6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xuICB9XG5cbiAgQElucHV0KCkgbmdsUGlja0FjdGl2ZUNsYXNzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG5nbFBpY2tDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuZ2xPcHRpb25EZXN0cm95ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCduZ2xQaWNrTXVsdGlwbGUnKSBASW5wdXRCb29sZWFuKCkgaXNNdWx0aXBsZSA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnZhbHVlcy5uZXh0KHRoaXMuc2VsZWN0ZWQpO1xuICB9XG5cbiAgc2VsZWN0T3B0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICBsZXQgbmV4dDogYW55O1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc2VsZWN0ZWQpKSB7XG4gICAgICAgIC8vIFJlbW92ZSBpZiBhbHJlYWR5IHRoZXJlIG9yIGFkZCB0byBzZWxlY3Rpb25cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBuZXh0ID0gaW5kZXggPiAtMVxuICAgICAgICAgICAgICAgID8gWy4uLnRoaXMuc2VsZWN0ZWQuc2xpY2UoMCwgaW5kZXgpLCAuLi50aGlzLnNlbGVjdGVkLnNsaWNlKGluZGV4ICsgMSldXG4gICAgICAgICAgICAgICAgOiBbLi4udGhpcy5zZWxlY3RlZCwgdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2VsZWN0ZWQsIHtbdmFsdWVdOiAhdGhpcy5zZWxlY3RlZFt2YWx1ZV19KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMubmdsUGlja0NoYW5nZS5lbWl0KG5leHQpO1xuICB9XG5cbiAgb3B0aW9uUmVtb3ZlZCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiAhdGhpcy5zZWxlY3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBlbWl0OiBib29sZWFuO1xuXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgZW1pdCA9IEFycmF5LmlzQXJyYXkodGhpcy5zZWxlY3RlZCkgPyB0aGlzLnNlbGVjdGVkLmluZGV4T2YodmFsdWUpID4gLTEgOiAhIXRoaXMuc2VsZWN0ZWRbdmFsdWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0ID0gdGhpcy5zZWxlY3RlZCA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ2xPcHRpb25EZXN0cm95ZWQuZW1pdCh2YWx1ZSkpO1xuICAgIH1cbiAgfVxufVxuIl19