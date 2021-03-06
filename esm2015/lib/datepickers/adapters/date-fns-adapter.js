import { Injectable } from '@angular/core';
import { format as dateFnsFormat, parse as dateFnsParse } from 'date-fns';
import { NglDateAdapterBase } from './adapter';
const PATTERNS = {
    'big-endian': 'yyyy/MM/dd',
    'little-endian': 'dd/MM/yyyy',
    'middle-endian': 'MM/dd/yyyy',
};
export class NglDateAdapter extends NglDateAdapterBase {
    parse(value, format) {
        const date = dateFnsParse(value, format, new Date());
        return this.isValidDate(date) ? date : null;
    }
    format(date, format) {
        return dateFnsFormat(date, format);
    }
    pattern(name, delimiter) {
        const pattern = PATTERNS[name];
        return (delimiter && delimiter !== '/') ? pattern.replace(/\//g, delimiter) : pattern;
    }
    isValidDate(value) {
        const dateWrapper = new Date(value);
        return !isNaN(dateWrapper.getDate());
    }
}
NglDateAdapter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mbnMtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL2FkYXB0ZXJzL2RhdGUtZm5zLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxJQUFJLGFBQWEsRUFBRSxLQUFLLElBQUksWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUvQyxNQUFNLFFBQVEsR0FBRztJQUNmLFlBQVksRUFBRSxZQUFZO0lBQzFCLGVBQWUsRUFBRSxZQUFZO0lBQzdCLGVBQWUsRUFBRSxZQUFZO0NBQzlCLENBQUM7QUFHRixNQUFNLE9BQU8sY0FBZSxTQUFRLGtCQUFrQjtJQUVwRCxLQUFLLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDakMsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDOUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFVLEVBQUUsTUFBYztRQUMvQixPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFzRCxFQUFFLFNBQWlCO1FBQy9FLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsU0FBUyxJQUFJLFNBQVMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUN4RixDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQUs7UUFDdkIsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFwQkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdCBhcyBkYXRlRm5zRm9ybWF0LCBwYXJzZSBhcyBkYXRlRm5zUGFyc2UgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBOZ2xEYXRlQWRhcHRlckJhc2UgfSBmcm9tICcuL2FkYXB0ZXInO1xuXG5jb25zdCBQQVRURVJOUyA9IHtcbiAgJ2JpZy1lbmRpYW4nOiAneXl5eS9NTS9kZCcsXG4gICdsaXR0bGUtZW5kaWFuJzogJ2RkL01NL3l5eXknLFxuICAnbWlkZGxlLWVuZGlhbic6ICdNTS9kZC95eXl5Jyxcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ2xEYXRlQWRhcHRlciBleHRlbmRzIE5nbERhdGVBZGFwdGVyQmFzZSB7XG5cbiAgcGFyc2UodmFsdWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBEYXRlIHwgbnVsbCB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVGbnNQYXJzZSh2YWx1ZSwgZm9ybWF0LCBuZXcgRGF0ZSgpKTtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkRGF0ZShkYXRlKSA/IGRhdGUgOiBudWxsO1xuICB9XG5cbiAgZm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0ZUZuc0Zvcm1hdChkYXRlLCBmb3JtYXQpO1xuICB9XG5cbiAgcGF0dGVybihuYW1lOiAnYmlnLWVuZGlhbicgfCAnbGl0dGxlLWVuZGlhbicgfCAnbWlkZGxlLWVuZGlhbicsIGRlbGltaXRlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXR0ZXJuID0gUEFUVEVSTlNbbmFtZV07XG4gICAgcmV0dXJuIChkZWxpbWl0ZXIgJiYgZGVsaW1pdGVyICE9PSAnLycpID8gcGF0dGVybi5yZXBsYWNlKC9cXC8vZywgZGVsaW1pdGVyKSA6IHBhdHRlcm47XG4gIH1cblxuICBwcml2YXRlIGlzVmFsaWREYXRlKHZhbHVlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF0ZVdyYXBwZXIgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuICFpc05hTihkYXRlV3JhcHBlci5nZXREYXRlKCkpO1xuICB9XG5cbn1cbiJdfQ==