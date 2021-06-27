import { InjectionToken } from '@angular/core';
/** Injection token that can be used to specify default options. */
export const NGL_COMBOBOX_CONFIG = new InjectionToken('ngl-combobox-config');
export class NglComboboxConfig {
    constructor() {
        this.loadingLabel = 'Loading';
        this.noOptionsFound = 'No matches found.';
        this.removeSelectedLabel = 'Remove selected option';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29tYm9ib3hlcy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxtRUFBbUU7QUFDbkUsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQW9CLHFCQUFxQixDQUFDLENBQUM7QUFFaEcsTUFBTSxPQUFPLGlCQUFpQjtJQUE5QjtRQUVFLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBRXpCLG1CQUFjLEdBQUcsbUJBQW1CLENBQUM7UUFFckMsd0JBQW1CLEdBQUcsd0JBQXdCLENBQUM7SUFDakQsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgZGVmYXVsdCBvcHRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IE5HTF9DT01CT0JPWF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TmdsQ29tYm9ib3hDb25maWc+KCduZ2wtY29tYm9ib3gtY29uZmlnJyk7XG5cbmV4cG9ydCBjbGFzcyBOZ2xDb21ib2JveENvbmZpZzxEID0gYW55PiB7XG5cbiAgbG9hZGluZ0xhYmVsID0gJ0xvYWRpbmcnO1xuXG4gIG5vT3B0aW9uc0ZvdW5kID0gJ05vIG1hdGNoZXMgZm91bmQuJztcblxuICByZW1vdmVTZWxlY3RlZExhYmVsID0gJ1JlbW92ZSBzZWxlY3RlZCBvcHRpb24nO1xufVxuIl19